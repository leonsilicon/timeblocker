import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/dist/declarations/src/rpc';

type TRPCErrorParams = {
	code: TRPC_ERROR_CODE_KEY;
	message?: string;
};

export type TRPCErrorDefinition = {
	name: string;
} & TRPCErrorParams;

const defineErrors = <Errors extends Record<string, TRPCErrorParams>>(
	errors: Errors
): { [ErrorName in keyof Errors]: Errors[ErrorName] & { name: ErrorName } } => {
	for (const errorName of Object.keys(errors)) {
		(errors[errorName] as TRPCErrorDefinition).name = errorName;
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return errors as any;
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
