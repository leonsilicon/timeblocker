import onetime from 'onetime';
import { createRouter } from '~b/utils/router.js';
import { loginRouter } from '~b/routes/login.js';
import { registrationRouter } from '~b/routes/registration.js';
import { timeblockCrudRouter } from '~b/routes/timeblock/crud.js';
import { timeblockTaskRouter } from '~b/routes/timeblock/task.js';
import { timeblockTaskBlockRouter } from '~b/routes/timeblock/task-block.js';

export const getAppRouter = onetime(() =>
	createRouter()
		.merge(loginRouter)
		.merge(registrationRouter)
		.merge(timeblockCrudRouter)
		.merge(timeblockTaskRouter)
		.merge(timeblockTaskBlockRouter)
);
