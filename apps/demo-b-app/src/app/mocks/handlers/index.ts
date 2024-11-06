import { testHandlers } from './test.handlers';
import { signupHandlers } from './signup.handlers';

export const handlers = [...testHandlers, ...signupHandlers];
