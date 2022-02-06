import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { accountMiddleware } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';
import { verifyTimeblockOwner } from '~b/utils/timeblock.js';

const timeblockIdInput = z.object({ timeblockId: z.string() });
export const timeblockTaskRouter = createRouter()
	.middleware(accountMiddleware)
	.middleware(async ({ next, ctx, rawInput }) => {
		const result = timeblockIdInput.safeParse(rawInput);
		if (!result.success) {
			throw new TRPCError({
				code: 'BAD_REQUEST',
				message: 'Timeblock ID not provided.',
			});
		}

		await verifyTimeblockOwner(ctx, {
			accountId: ctx.accountId,
			timeblockId: result.data.timeblockId,
		});

		return next({ ctx: { ...ctx, timeblockId: result.data.timeblockId } });
	})
	.mutation('addTimeblockTask', {
		input: z.object({
			name: z.string(),
			description: z.string(),
		}),
		async resolve({ ctx, input: { name, description } }) {
			const { id: timeblockTaskId } = await ctx.prisma.timeblockTask.create({
				select: {
					id: true,
				},
				data: {
					name,
					description,
					timeblockId: ctx.timeblockId,
				},
			});

			return {
				timeblockTaskId,
			};
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
