import { z } from 'zod';
import { accountMiddleware } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';

export const timeblockTaskRouter = createRouter()
	.middleware(accountMiddleware)
	.mutation('createTimeblockTask', {
		input: z.object({
			id: z.string(),
			name: z.string(),
			description: z.string().optional(),
			type: z.string(),
			dayOfWeek: z.number().optional(),
			startMinute: z.number().optional(),
			endMinute: z.number().optional(),
		}),
		async resolve({
			ctx,
			input: { id, name, description, type, dayOfWeek, startMinute, endMinute },
		}) {
			await ctx.prisma.timeblockTask.create({
				data: {
					id,
					name,
					description,
					ownerAccountId: ctx.accountId,
					isHidden: false,
					dayOfWeek,
					startMinute,
					endMinute,
					type,
				},
			});
		},
	})
	.query('getTimeblockTasks', {
		input: z.object({
			skip: z.number(),
			limit: z.number(),
		}),
		async resolve({ ctx }) {
			const tasks = await ctx.prisma.timeblockTask.findMany({
				select: {
					id: true,
					name: true,
					description: true,
					isHidden: true,
					type: true,
					startMinute: true,
					endMinute: true,
					dayOfWeek: true,
				},
				where: {
					ownerAccountId: ctx.accountId,
				},
			});

			return tasks;
		},
	})
	.mutation('updateTimeblockTask', {
		input: z.object({
			taskId: z.string(),
			name: z.string().optional(),
			description: z.string().optional(),
			startMinute: z.number().optional(),
			endMinute: z.number().optional(),
		}),
		async resolve({
			ctx,
			input: { taskId, name, description, startMinute, endMinute },
		}) {
			await ctx.prisma.timeblockTask.update({
				data: {
					description,
					name,
					endMinute,
					startMinute,
				},
				where: {
					id: taskId,
				},
			});
		},
	})
	.mutation('hideTimeblockTask', {
		input: z.object({
			taskId: z.string(),
		}),
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
