import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import type { MiddlewareFunction } from '@trpc/server/dist/declarations/src/internals/middlewares';
import type { Context } from '~b/types/index.js';
import { throwTrpcError, trpcError } from '~b/utils/error.js';

/**
 * Verify that an account owns the timeblock
 */
export async function verifyTimeblockOwner(
	ctx: Context,
	{ accountId, timeblockId }: { accountId: string; timeblockId: string }
) {
	const timeblock = await ctx.prisma.timeblock.findFirst({
		select: {
			ownerAccountId: true,
		},
		where: {
			id: timeblockId,
		},
	});

	if (timeblock === null) {
		throwTrpcError(trpcError.timeblockNotFound);
	}

	if (timeblock.ownerAccountId !== accountId) {
		throwTrpcError(trpcError.accountNotOwnerOfTimeblock);
	}
}

export const timeblockIdInput = z.object({ timeblockId: z.string() });

export const timeblockMiddleware: MiddlewareFunction<
	Context & { accountId: string },
	Context & { accountId: string; timeblockId: string }
> = async ({ next, ctx, rawInput }) => {
	const result = timeblockIdInput.safeParse(rawInput);
	if (!result.success) {
		throwTrpcError(trpcError.timeblockIdNotProvided);
	}

	await verifyTimeblockOwner(ctx, {
		accountId: ctx.accountId,
		timeblockId: result.data.timeblockId,
	});

	return next({ ctx: { ...ctx, timeblockId: result.data.timeblockId } });
};
