import { z } from 'zod';
import { accountMiddleware } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';
import { timeblockMiddleware } from '~b/utils/timeblock.js';

export const timeblockColumnRouter = createRouter()
	.middleware(accountMiddleware)
	.middleware(timeblockMiddleware)
	.mutation('addTimeblockColumn', {
		input: z.object({
			columnId: z.string(),
		}),
		async resolve({ ctx, input: { columnId } }) {
			const { id: timeblockId } = await ctx.prisma.timeblock.create({
				data: {
					name,
					ownerAccountId: ctx.accountId,
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
			const timeblock = await ctx.prisma.timeblock.findFirst({
				select: {
					id: true,
					name: true,
				},
				where: {
					id: timeblockId,
					ownerAccountId: ctx.accountId,
				},
			});

			if (timeblock === null) {
				throw new Error('Timeblock not found.');
			}

			return timeblock;
		},
	})
	.query('listTimeblocks', {
		input: z.object({
			skip: z.number(),
			limit: z.number(),
		}),
		async resolve({ ctx, input: { skip, limit } }) {
			const timeblocks = await ctx.prisma.timeblock.findMany({
				select: {
					id: true,
					name: true,
				},
				where: {
					ownerAccountId: ctx.accountId,
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
			await ctx.prisma.timeblock.deleteMany({
				where: {
					id: timeblockId,
					ownerAccountId: ctx.accountId,
				},
			});
		},
	});
