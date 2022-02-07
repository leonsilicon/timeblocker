import { z } from 'zod';
import { accountMiddleware } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';
import { timeblockMiddleware } from '~b/utils/timeblock.js';

export const timeblockTaskRouter = createRouter()
	.middleware(accountMiddleware)
	.middleware(timeblockMiddleware)
	.mutation('addTimeblockTask', {
		input: z.object({
			id: z.string(),
			name: z.string(),
			description: z.string(),
		}),
		async resolve({ ctx, input: { id, name, description } }) {
			await ctx.prisma.timeblockTask.create({
				data: {
					id,
					name,
					description,
					timeblockId: ctx.timeblockId,
				},
			});
		},
	})
	.query('listTimeblockTasks', {
		input: z.object({
			skip: z.number(),
			limit: z.number(),
		}),
		async resolve({ ctx }) {
			const timeblock = await ctx.prisma.timeblock.findFirst({
				select: {
					id: true,
					name: true,
					tasks: true,
				},
				where: {
					id: ctx.timeblockId,
				},
			});
			if (timeblock === null) {
				throw new Error('Timeblock not found.');
			}

			return timeblock.tasks;
		},
	})
	.mutation('updateTimeblockTask', {
		input: z.object({
			taskId: z.string(),
			name: z.string().optional(),
			description: z.string().optional(),
		}),
		async resolve({ ctx, input: { taskId, name, description } }) {
			await ctx.prisma.timeblockTask.update({
				data: {
					description,
					name,
				},
				where: {
					id: taskId,
				},
			});
		},
	})
	.mutation('deleteTimeblockTask', {
		input: z.object({
			taskId: z.string(),
		}),
		async resolve({ ctx, input: { taskId } }) {
			await ctx.prisma.timeblockTask.delete({
				where: {
					id: taskId,
				},
			});
		},
	});
