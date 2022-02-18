import { Notify } from 'quasar';

export function displayError(error: unknown) {
	Notify.create({
		message: String(error),
		type: 'error',
	});
}
