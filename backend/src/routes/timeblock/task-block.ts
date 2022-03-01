import { z } from 'zod';
import dayjs from 'dayjs';
import { accountMiddleware } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/router.js';
import {
	timeblockColumnIdInput,
	timeblockColumnMiddleware,
} from '~b/utils/timeblock.js';

export const timeblockTaskBlockRouter = createRouter()
	.middleware(accountMiddleware)
	.middleware(timeblockColumnMiddleware)
	.mutation('createTimeblockTaskBlocks', {
		input: timeblockColumnIdInput.merge(
			z.object({
				taskBlocks: z
					.object({
						taskId: z.string(),
						taskBlockId: z.string(),
						startMinute: z.number(),
						endMinute: z.number(),
					})
					.array(),
			})
		),
		async resolve({ ctx, input: { taskBlocks } }) {
			const timeblockColumn = await ctx.prisma.timeblockColumn.findFirst({
				select: {
					timeblock: {
						select: {
							date: true,
						},
					},
				},
				where: {
					id: ctx.timeblockColumnId,
				},
			});

			await ctx.prisma.timeblockTaskBlock.createMany({
				data: taskBlocks.map(
					({ endMinute, taskBlockId, taskId, startMinute }) => ({
						timeblockColumnId: ctx.timeblockColumnId,
						endMinute,
						id: taskBlockId,
						taskId,
						startMinute,
					})
				),
			});

			const tasks = await ctx.prisma.timeblockTask.findMany({
				select: {
					id: true,
					type: true,
				},
				where: {
					id: {
						in: taskBlocks.map((taskBlock) => taskBlock.taskId),
					},
				},
			});

			await Promise.all(
				tasks
					.filter(
						(task) =>
							task.type === 'fixed-time' || task.type === 'fixed-weekly-time'
					)

					.map(async (task) => {
						const taskBlock = taskBlocks.find(
							(taskBlock) => task.id === taskBlock.taskId
						);

						const date = timeblockColumn!.timeblock.date as {
							year: number;
							month: number;
							day: number;
						};

						const dayjsDate = dayjs(0)
							.set('year', date.year)
							.set('month', date.month)
							.set('date', date.day);

						await ctx.prisma.timeblockTask.update({
							data: {
								startMinute: taskBlock?.startMinute,
								endMinute: taskBlock?.endMinute,
								dayOfWeek:
									task.type === 'fixed-weekly-time'
										? dayjsDate.day()
										: undefined,
							},
							where: {
								id: task.id,
							},
						});
					})
			);
		},
	})
	.query('getTimeblockTaskBlocks', {
		input: timeblockColumnIdInput,
		async resolve({ ctx }) {
			const timeblockTaskBlocks = [
				...(await ctx.prisma.timeblockTaskBlock.findMany({
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
				})),

				// Also select all timeblocks that are fixed time/fixed weekly
				...(await ctx.prisma.timeblockTaskBlock.findMany({
					select: {
						id: true,
						taskId: true,
						timeblockColumnId: true,
						startMinute: true,
						endMinute: true,
					},
					where: {
						task: {
							type: 'fixed-weekly-time',
						},
					},
				})),
				...(await ctx.prisma.timeblockTaskBlock.findMany({
					select: {
						id: true,
						taskId: true,
						timeblockColumnId: true,
						startMinute: true,
						endMinute: true,
					},
					where: {
						task: {
							type: 'fixed-time',
						},
					},
				})),
			];

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
			const taskBlock = await ctx.prisma.timeblockTaskBlock.findFirst({
				select: {
					task: {
						select: {
							id: true,
							type: true,
						},
					},
				},
				where: {
					id: taskBlockId,
				},
			});

			if (
				taskBlock?.task.type === 'fixed-weekly-time' ||
				taskBlock?.task.type === 'fixed-time'
			) {
				await ctx.prisma.timeblockTask.update({
					data: {
						startMinute,
						endMinute,
					},
					where: {
						id: taskBlock.task.id,
					},
				});
			}

			await ctx.prisma.timeblockTaskBlock.update({
				data: {
					startMinute,
					endMinute,
					timeblockColumnId: ctx.timeblockColumnId,
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
