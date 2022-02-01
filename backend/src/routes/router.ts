import onetime from 'onetime';
import { createRouter } from '~/utils/router.js';
import { loginRouter } from '~/routes/login.js';
import { registrationRouter } from '~/routes/registration.js';

export const getAppRouter = onetime(() =>
	createRouter().merge(loginRouter).merge(registrationRouter)
);

export type AppRouter = ReturnType<typeof getAppRouter>;
