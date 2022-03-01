import { nanoid } from 'nanoid-nice';
import { z } from 'zod';
import dayjs from 'dayjs';
import { accountMiddleware } from '~b/utils/auth.js';
import { throwTrpcError } from '~b/utils/error.js';
import { createRouter } from '~b/utils/router.js';
import { trpcError } from '~s/types/error.js';

export const timeblockCrudRouter = createRouter()
	.middleware(accountMiddleware)
	.mutation('createTimeblock', {
		input: z.object({
			date: z.object({
				year: z.number(),
				month: z.number(),
				day: z.number(),
			}),
		}),
		async resolve({ ctx, input: { date } }) {
			const timeblockId = nanoid();

			await ctx.prisma.timeblock.create({
				data: {
					id: timeblockId,
					date,
					ownerAccountId: ctx.accountId,
				},
				select: {
					id: true,
				},
			});

			const timeblockColumnId = nanoid();
			await ctx.prisma.timeblockColumn.create({
				data: {
					id: timeblockColumnId,
					timeblockId,
				},
			});

			// Create a task block for each fixed-time timeblock task
			const fixedTimeTasks = await ctx.prisma.timeblockTask.findMany({
				select: {
					id: true,
					startMinute: true,
					endMinute: true,
				},
				where: {
					type: 'fixed-time',
					ownerAccountId: ctx.accountId,
					isHidden: false,
				},
			});

			await ctx.prisma.timeblockTaskBlock.createMany({
				data: fixedTimeTasks
					.filter(
						({ startMinute, endMinute }) =>
							startMinute !== null && endMinute !== null
					)
					.map(({ startMinute, endMinute, id }) => ({
						id: nanoid(),
						startMinute: startMinute!,
						endMinute: endMinute!,
						taskId: id,
						timeblockColumnId,
					})),
			});

			const dayjsDate = dayjs().set(date);
			const dayOfWeek = dayjsDate.day();

			await ctx.prisma.timeblockTask.findMany({
				select: {
					id: true,
					startMinute: true,
					endMinute: true,
				},
				where: {
					type: 'fixed-weekly-time',
					ownerAccountId: ctx.accountId,
					isHidden: false,
					dayOfWeek,
				},
			});

			await ctx.prisma.timeblockTaskBlock.createMany({
				data: fixedTimeTasks
					.filter(
						({ startMinute, endMinute }) =>
							startMinute !== null && endMinute !== null
					)
					.map(({ id, startMinute, endMinute }) => ({
						id: nanoid(),
						taskId: id,
						startMinute: startMinute!,
						endMinute: endMinute!,
						timeblockColumnId,
					})),
			});

			return {
				timeblockId,
				timeblockColumnId,
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
					date: true,
				},
				where: {
					id: timeblockId,
					ownerAccountId: ctx.accountId,
				},
			});

			if (timeblock === null) {
				throwTrpcError(trpcError.timeblockNotFound);
			}

			return timeblock;
		},
	})
	.query('listTimeblocks', {
		async resolve({ ctx }) {
			const timeblocks = await ctx.prisma.timeblock.findMany({
				select: {
					id: true,
					date: true,
				},
				where: {
					ownerAccountId: ctx.accountId,
				},
			});

			return timeblocks as Array<{
				id: string;
				name: string;
				date: {
					year: number;
					month: number;
					day: number;
				};
			}>;
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
