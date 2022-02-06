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
