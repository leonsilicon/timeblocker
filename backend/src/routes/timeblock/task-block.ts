import { z } from 'zod';
import { accountMiddleware } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';
import {
	timeblockColumnIdInput,
	timeblockColumnMiddleware,
} from '~b/utils/timeblock.js';

export const timeblockTaskBlockRouter = createRouter()
	.middleware(accountMiddleware)
	.middleware(timeblockColumnMiddleware)
	.mutation('addTimeblockTaskBlock', {
		input: timeblockColumnIdInput.merge(
			z.object({
				taskId: z.string(),
				taskBlockId: z.string(),
				startMinute: z.number(),
				endMinute: z.number(),
			})
		),
		async resolve({
			ctx,
			input: { taskBlockId, endMinute, startMinute, taskId },
		}) {
			await ctx.prisma.timeblockTaskBlock.create({
				data: {
					timeblockColumnId: ctx.timeblockColumnId,
					endMinute,
					id: taskBlockId,
					taskId,
					startMinute,
				},
			});
		},
	})
	.query('getTimeblockTaskBlocks', {
		input: timeblockColumnIdInput,
		async resolve({ ctx }) {
			const timeblockTaskBlocks = await ctx.prisma.timeblockTaskBlock.findMany({
				select: {
					id: true,
					taskId: true,
					timeblockColumnId: true,
					startMinute: true,
					endMinute: true,
				},
				where: {
					timeblockColumnId: ctx.timeblockColumnId,
				},
			});

			return timeblockTaskBlocks;
		},
	})
	.mutation('updateTimeblockTaskBlock', {
		input: timeblockColumnIdInput.merge(
			z.object({
				taskBlockId: z.string(),
				startMinute: z.number().optional(),
				endMinute: z.number().optional(),
			})
		),
		async resolve({ ctx, input: { startMinute, endMinute, taskBlockId } }) {
			await ctx.prisma.timeblockTaskBlock.update({
				data: {
					startMinute,
					endMinute,
				},
				where: {
					id: taskBlockId,
				},
			});
		},
	})
	.mutation('deleteTimeblockTaskBlock', {
		input: timeblockColumnIdInput.merge(
			z.object({
				taskBlockId: z.string(),
			})
		),
		async resolve({ ctx, input: { taskBlockId } }) {
			await ctx.prisma.timeblockTaskBlock.delete({
				where: {
					id: taskBlockId,
				},
			});
		},
	});
