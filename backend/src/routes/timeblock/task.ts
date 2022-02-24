import { z } from 'zod';
import type { TimeblockTask } from '~s/types/task.js';
import { accountMiddleware } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';
import { timeblockIdInput, timeblockMiddleware } from '~b/utils/timeblock.js';
import { throwTrpcError } from '~b/utils/error.js';
import { trpcError } from '~s/types/error.js';

export const timeblockTaskRouter = createRouter()
	.middleware(accountMiddleware)
	.middleware(timeblockMiddleware)
	.mutation('addTimeblockTask', {
		input: timeblockIdInput.merge(
			z.object({
				id: z.string(),
				name: z.string(),
				description: z.string().optional(),
			})
		),
		async resolve({ ctx, input: { id, name, description } }) {
			await ctx.prisma.timeblockTask.create({
				data: {
					id,
					name,
					description,
					timeblockId: ctx.timeblockId,
					isHidden: false,
				},
			});
		},
	})
	.query('getTimeblockTasks', {
		input: timeblockIdInput.merge(
			z.object({
				skip: z.number(),
				limit: z.number(),
			})
		),
		async resolve({ ctx }) {
			const timeblock = await ctx.prisma.timeblock.findFirst({
				select: {
					id: true,
					name: true,
					tasks: {
						select: {
							id: true,
							name: true,
							description: true,
							isHidden: true,
						},
					},
				},
				where: {
					id: ctx.timeblockId,
				},
			});
			if (timeblock === null) {
				throwTrpcError(trpcError.timeblockNotFound);
			}

			return timeblock.tasks as TimeblockTask[];
		},
	})
	.mutation('updateTimeblockTask', {
		input: timeblockIdInput.merge(
			z.object({
				taskId: z.string(),
				name: z.string().optional(),
				description: z.string().optional(),
			})
		),
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
	.mutation('hideTimeblockTask', {
		input: timeblockIdInput.merge(
			z.object({
				taskId: z.string(),
			})
		),
		async resolve({ ctx, input: { taskId } }) {
			await ctx.prisma.timeblockTask.update({
				data: {
					isHidden: true,
				},
				where: {
					id: taskId,
				},
			});
		},
	});
