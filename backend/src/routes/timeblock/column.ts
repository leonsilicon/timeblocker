import { z } from 'zod';
import { accountMiddleware } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';
import { timeblockIdInput, timeblockMiddleware } from '~b/utils/timeblock.js';

export const timeblockColumnRouter = createRouter()
	.middleware(accountMiddleware)
	.middleware(timeblockMiddleware)
	.mutation('addTimeblockColumn', {
		input: timeblockIdInput.merge(
			z.object({
				columnId: z.string(),
			})
		),
		async resolve({ ctx, input: { columnId } }) {
			await ctx.prisma.timeblockColumn.create({
				data: {
					id: columnId,
					timeblockId: ctx.timeblockId,
				},
			});
		},
	})
	.query('getTimeblockColumns', {
		input: timeblockIdInput,
		async resolve({ ctx }) {
			const timeblockColumns = await ctx.prisma.timeblockColumn.findMany({
				select: {
					id: true,
				},
				where: {
					timeblockId: ctx.timeblockId,
				},
			});

			return timeblockColumns;
		},
	})
	.mutation('deleteTimeblockColumn', {
		input: timeblockIdInput.merge(
			z.object({
				columnId: z.string(),
			})
		),
		async resolve({ ctx, input: { columnId } }) {
			await ctx.prisma.timeblockColumn.deleteMany({
				where: {
					id: columnId,
				},
			});
		},
	});
