import {
  signupCustomerSuccessHandler,
  signupDriverSuccessHandler,
  signupFallbackErrorHandler,
  allSignupHandlers,
} from './signup.handlers';
import {
  driverOrdersSuccessHandler,
  allDriverOrdersHandlers,
} from './driver-orders.handlers';
import {
  notificationsSuccessHandler,
  allNotificationsHandlers,
} from './notifications.handlers';

export {
  signupCustomerSuccessHandler,
  signupDriverSuccessHandler,
  signupFallbackErrorHandler,
  allSignupHandlers,
  driverOrdersSuccessHandler,
  allDriverOrdersHandlers,
  notificationsSuccessHandler,
  allNotificationsHandlers,
};

export const allHandler = [
  ...allSignupHandlers,
  ...allDriverOrdersHandlers,
  ...allNotificationsHandlers,
];
