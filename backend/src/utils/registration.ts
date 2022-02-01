import process from 'node:process';
import type { Context } from '~/types/context.js';
import { getSmtpTransport } from '~/utils/smtp.js';

export async function sendAccountRegistrationConfirmationCode(
	ctx: Context,
	{
		email,
		registrationConfirmationCode,
	}: { email: string; registrationConfirmationCode: string }
) {
	const link = `${process.env.CLIENT_URL}/confirm-registration?email=${email}&code=${registrationConfirmationCode}`;
	const smtpTransport = await getSmtpTransport();
	await smtpTransport.sendMail({
		from: 'tabulo@orbulo.com',
		html: `
			<p>Please visit the following link to verify your Tabulo account:
				<a href='${link}'>
					${link}
				</a>

				<p>If you are unable to press the link, please paste it into your browser's URL bar.</p>
				<p>Thank you for using Tabulo!</p>
			</p>
		`,
		subject: 'Verify Tabulo Account',
		to: email,
	});
}
