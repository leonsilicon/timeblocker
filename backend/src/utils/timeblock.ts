import { z } from 'zod';
import type { MiddlewareFunction } from '@trpc/server/dist/declarations/src/internals/middlewares';
import type { Context } from '~b/types/index.js';
import { throwTrpcError } from '~b/utils/error.js';
import { trpcError } from '~s/types/error.js';

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

export const timeblockColumnIdInput = z.object({
	timeblockColumnId: z.string(),
});

/**
 * Verify that an account owns the timeblock column
 */
export async function verifyTimeblockColumnOwner(
	ctx: Context,
	{
		accountId,
		timeblockColumnId,
	}: { accountId: string; timeblockColumnId: string }
) {
	const timeblockColumn = await ctx.prisma.timeblockColumn.findFirst({
		select: {
			timeblock: {
				select: {
					ownerAccountId: true,
				},
			},
		},
		where: {
			id: timeblockColumnId,
		},
	});

	if (timeblockColumn === null) {
		throwTrpcError(trpcError.timeblockColumnNotFound);
	}

	if (timeblockColumn.timeblock.ownerAccountId !== accountId) {
		throwTrpcError(trpcError.accountNotOwnerOfTimeblock);
	}
}

export const timeblockColumnMiddleware: MiddlewareFunction<
	Context & { accountId: string },
	Context & { accountId: string; timeblockColumnId: string }
> = async ({ next, ctx, rawInput }) => {
	const result = timeblockColumnIdInput.safeParse(rawInput);
	if (!result.success) {
		throwTrpcError(trpcError.timeblockColumnIdNotProvided);
	}

	await verifyTimeblockColumnOwner(ctx, {
		accountId: ctx.accountId,
		timeblockColumnId: result.data.timeblockColumnId,
	});

	return next({
		ctx: { ...ctx, timeblockColumnId: result.data.timeblockColumnId },
	});
};
