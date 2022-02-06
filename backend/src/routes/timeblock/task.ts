import { z } from 'zod';
import { getCtxAccountId } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';

export const timeblockTaskRouter = createRouter()
	.mutation('addTimeblockTask', {
		input: z.object({
			name: z.string(),
			description: z.string(),
			timeblockId: z.string(),
		}),
		async resolve({ ctx, input: { name, description, timeblockId } }) {
			const accountId = await getCtxAccountId(ctx);

			const { id: timeblockTaskId } = await ctx.prisma.timeblockTask.create({
				select: {
					id,
				},
				data: {
					name,
					description,
					timeblockId,
				},
			});

			return {
				timeblockTaskId,
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
