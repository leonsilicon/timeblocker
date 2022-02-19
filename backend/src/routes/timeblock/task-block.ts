import { z } from 'zod';
import { accountMiddleware } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';
import {
	timeblockColumnIdInput,
	timeblockColumnMiddleware,
	timeblockIdInput,
	timeblockMiddleware,
} from '~b/utils/timeblock.js';

export const timeblockTaskBlockRouter = createRouter()
	.middleware(accountMiddleware)
	.middleware(timeblockMiddleware)
	.middleware(timeblockColumnMiddleware)
	.mutation('addTimeblockTaskBlock', {
		input: timeblockColumnIdInput.merge(
			z.object({
				taskBlockId: z.string(),
				startMinute: z.number(),
				endMinute: z.number(),
			})
		),
		async resolve({ ctx, input: { taskBlockId, endMinute, startMinute } }) {
			await ctx.prisma.timeblockTaskBlock.create({
				data: {
					timeblockColumnId: ctx.timeblockColumnId,
					endMinute,
					id: taskBlockId,
					startMinute,
				},
			});
		},
	})
	.query('listTimeblockTaskBlocks', {
		input: timeblockIdInput,
		async resolve({ ctx }) {
			const timeblockTaskBlocks = await ctx.prisma.timeblockTaskBlock.findMany({
				select: {
					id: true,
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
		input: z.object({
			taskBlockId: z.string(),
			startMinute: z.number().optional(),
			endMinute: z.number().optional(),
		}),
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
		input: z.object({
			taskBlockId: z.string(),
		}),
		async resolve({ ctx, input: { taskBlockId } }) {
			await ctx.prisma.timeblockTaskBlock.delete({
				where: {
					id: taskBlockId,
				},
			});
		},
	});
