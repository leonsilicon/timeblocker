import { z } from 'zod';
import { getCtxAccountId } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';

export const timeblockCrudRouter = createRouter()
	.mutation('createTimeblock', {
		input: z.object({
			name: z.string(),
		}),
		async resolve({ ctx, input: { name } }) {
			const accountId = await getCtxAccountId(ctx);

			const timeblockId = await ctx.prisma.timeblock.create({
				data: {
					name,
					ownerAccountId: accountId,
				},
				select: {
					id: true,
				},
			});

			return {
				timeblockId,
			};
		},
	})
	.query('getTimeblock', {
		input: z.object({
			timeblockId: z.string(),
		}),
		async resolve({ ctx, input: { timeblockId } }) {
			const accountId = await getCtxAccountId(ctx);

			const timeblock = await ctx.prisma.timeblock.findFirst({
				select: {
					id: true,
					name: true,
				},
				where: {
					id: timeblockId,
					ownerAccountId: accountId,
				},
			});
		},
	})
	.query('listTimeblocks', {
		input: z.object({
			skip: z.number(),
			limit: z.number(),
		}),
		async resolve({ ctx, input: { skip, limit } }) {
			const accountId = await getCtxAccountId(ctx);
			const timeblocks = await ctx.prisma.timeblock.findMany({
				select: {
					id: true,
					name: true,
				},
				where: {
					ownerAccountId: accountId,
				},
				skip,
				take: limit,
			});

			return timeblocks;
		},
	})
	.mutation('deleteTimeblock', {
		input: z.object({
			timeblockId: z.string(),
		}),
		async resolve({ ctx, input: { timeblockId } }) {
			const accountId = await getCtxAccountId(ctx);

			await ctx.prisma.timeblock.deleteMany({
				where: {
					id: timeblockId,
					ownerAccountId: accountId,
				},
			});
		},
	});
