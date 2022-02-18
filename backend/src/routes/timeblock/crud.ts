import { z } from 'zod';
import { accountMiddleware } from '~b/utils/auth.js';
import { throwTrpcError } from '~b/utils/error.js';
import { createRouter } from '~b/utils/router.js';
import { trpcError } from '~s/types/error.js';

export const timeblockCrudRouter = createRouter()
	.middleware(accountMiddleware)
	.mutation('createTimeblock', {
		input: z.object({
			name: z.string(),
		}),
		async resolve({ ctx, input: { name } }) {
			const { id: timeblockId } = await ctx.prisma.timeblock.create({
				data: {
					name,
					ownerAccountId: ctx.accountId,
				},
				select: {
					id: true,
				},
			});

			return {
				timeblockId,
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
					name: true,
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
		input: z.object({
			skip: z.number(),
			limit: z.number(),
		}),
		async resolve({ ctx, input: { skip, limit } }) {
			const timeblocks = await ctx.prisma.timeblock.findMany({
				select: {
					id: true,
					name: true,
				},
				where: {
					ownerAccountId: ctx.accountId,
				},
				skip,
				take: limit,
			});

			return timeblocks;
		},
	})
	.mutation('updateTimeblock', {
		input: z.object({
			timeblockId: z.string(),
			name: z.string(),
		}),
		async resolve({ ctx, input: { name, timeblockId } }) {
			await ctx.prisma.timeblock.update({
				data: {
					name,
				},
				where: {
					id: timeblockId,
				},
			});
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
