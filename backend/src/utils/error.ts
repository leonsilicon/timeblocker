import { TRPCError } from '@trpc/server';
import { TRPC_ERROR_CODE_KEY } from '@trpc/server/dist/declarations/src/rpc';

type TRPCErrorParams = {
	code: TRPC_ERROR_CODE_KEY;
	message?: string;
};

type TRPCErrorDefinition = {
	name: string;
} & TRPCErrorParams;

const defineErrors = <Errors extends Record<string, TRPCErrorParams>>(
	errors: Errors
): { [ErrorName in keyof Errors]: Errors[ErrorName] & { name: ErrorName } } => {
	const errorsMap: Record<string, TRPCErrorParams> = {};
	for (const errorName of Object.keys(errors)) {
		(errors[errorName] as TRPCErrorDefinition).name = errorName;
	}
	return errorsMap as any;
};

export const trpcError = defineErrors({
	invalidConfirmationCode: {
		code: 'BAD_REQUEST',
		message: 'Email not found or invalid confirmation code.',
	},
	notAtExampleEmail: {
		code: 'BAD_REQUEST',
		message: 'Email must end in @example.com',
	},
	badUsernamePassword: {
		code: 'BAD_REQUEST',
		message: 'Username or password not found.',
	},
	timeblockNotFound: {
		code: 'BAD_REQUEST',
		message: 'Timeblock not found.',
	},
	userNotAuthenticated: {
		code: 'UNAUTHORIZED',
		message: 'User is not authenticated.',
	},
	tokenNotFound: {
		code: 'BAD_REQUEST',
		message: 'Token not found.',
	},
	accountNotOwnerOfTimeblock: {
		code: 'UNAUTHORIZED',
		message: 'Account is not the owner of the timeblock.',
	},
	timeblockIdNotProvided: {
		code: 'BAD_REQUEST',
		message: 'Timeblock ID was not provided.',
	},
});

export function throwTrpcError(error: TRPCErrorDefinition): never {
	throw new TRPCError({
		code: error.code,
		message: `${error.name}: ${error.message}`,
	});
}
