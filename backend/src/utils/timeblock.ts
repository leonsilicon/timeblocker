import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import type { MiddlewareFunction } from '@trpc/server/dist/declarations/src/internals/middlewares';
import type { Context } from '~b/types/index.js';

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
		throw new Error('Timeblock not found.');
	}

	if (timeblock.ownerAccountId !== accountId) {
		throw new Error('Account is not the owner of the timeblock.');
	}
}

const timeblockIdInput = z.object({ timeblockId: z.string() });

export const timeblockMiddleware: MiddlewareFunction<
	Context & { accountId: string },
	Context & { accountId: string; timeblockId: string }
> = async ({ next, ctx, rawInput }) => {
	const result = timeblockIdInput.safeParse(rawInput);
	if (!result.success) {
		throw new TRPCError({
			code: 'BAD_REQUEST',
			message: 'Timeblock ID not provided.',
		});
	}

	await verifyTimeblockOwner(ctx, {
		accountId: ctx.accountId,
		timeblockId: result.data.timeblockId,
	});

	return next({ ctx: { ...ctx, timeblockId: result.data.timeblockId } });
};
