import process from 'node:process';
import { URLSearchParams } from 'node:url';
import { got } from 'got';
import { z } from 'zod';

export async function verifyReCaptcha(captchaResponse: string): Promise<void> {
	const response = await got.post<{ success: boolean }>(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaResponse}`,
		{
			headers: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
			},
		}
	);

	if (!response.body.success) {
		throw new Error('Invalid reCaptcha response');
	}
}

export async function verifyHCaptcha(captchaResponse: string): Promise<void> {
	const params = new URLSearchParams();
	params.append('response', captchaResponse);
	params.append('secret', process.env.HCAPTCHA_SECRET_KEY!);

	const response = await got.post<{ success: boolean }>(
		'https://hcaptcha.com/siteverify',
		{
			form: params,
			headers: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		}
	);

	if (!response.body.success) {
		throw new Error('Invalid hCaptcha response');
	}
}

type VerifyCaptchaParams = {
	captchaResponse: string;
	isReCaptcha: boolean;
};

export async function verifyCaptcha({
	captchaResponse,
	isReCaptcha,
}: VerifyCaptchaParams): Promise<void> {
	if (isReCaptcha) {
		await verifyReCaptcha(captchaResponse);
	} else {
		await verifyHCaptcha(captchaResponse);
	}
}

export const captchaInput = z.object({
	isRecaptcha: z.boolean(),
	captchaResponse: z.string(),
});
