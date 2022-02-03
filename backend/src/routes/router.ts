import onetime from 'onetime';
import { createRouter } from '~b/utils/router.js';
import { loginRouter } from '~b/routes/login.js';
import { registrationRouter } from '~b/routes/registration.js';
import { timeblockCrudRouter } from '~b/routes/timeblock/crud.js';

export const getAppRouter = onetime(() =>
	createRouter()
		.merge(loginRouter)
		.merge(registrationRouter)
		.merge(timeblockCrudRouter)
);
