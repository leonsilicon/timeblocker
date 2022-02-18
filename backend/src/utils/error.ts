import { TRPCError } from '@trpc/server';
import type { TRPCErrorDefinition } from '~s/types/error';

export function throwTrpcError(error: TRPCErrorDefinition): never {
	throw new TRPCError({
		code: error.code,
		message: `${error.name}: ${error.message}`,
	});
}
