import { Notify } from 'quasar';
import { mdiAlert } from '@mdi/js';

export function displayError(error: unknown) {
	const errorMessage = getErrorMessage(error);
	Notify.create({
		message: errorMessage,
		type: 'negative',
		icon: mdiAlert,
	});
}

export function getErrorCode(error: unknown) {
	if (typeof error === 'object' && error !== null && 'message' in error) {
		const rawMessage = (error as { message: string }).message;
		const colonIndex = rawMessage.indexOf(': ');
		if (colonIndex === -1) {
			return rawMessage;
		}

		const code = rawMessage.slice(0, colonIndex);
		return code;
	} else {
		return undefined;
	}
}

export function getErrorMessage(error: unknown) {
	if (typeof error === 'object' && error !== null && 'message' in error) {
		const rawMessage = (error as { message: string }).message;
		const colonIndex = rawMessage.indexOf(': ');
		if (colonIndex === -1) {
			return rawMessage;
		}

		const message = rawMessage.slice(colonIndex + 2);
		return message;
	} else {
		return String(error);
	}
}
