import process from 'node:process';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import onetime from 'onetime';

export const getSmtpTransport = onetime(async () => {
	const oauth2Client = new google.auth.OAuth2(
		process.env.GMAIL_CLIENT_ID,
		process.env.GMAIL_CLIENT_SECRET,
		'https://developers.google.com/oauthplayground'
	);

	oauth2Client.setCredentials({
		// eslint-disable-next-line @typescript-eslint/naming-convention
		refresh_token: process.env.GMAIL_REFRESH_TOKEN,
	});

	return oauth2Client.getAccessToken().then(() =>
		nodemailer.createTransport({
			auth: {
				clientId: process.env.GMAIL_CLIENT_ID,
				clientSecret: process.env.GMAIL_CLIENT_SECRET,
				refreshToken: process.env.GMAIL_REFRESH_TOKEN,
				type: 'OAUTH2',
				user: 'tabulo@orbulo.com',
			},
			service: 'gmail',
		})
	);
});
