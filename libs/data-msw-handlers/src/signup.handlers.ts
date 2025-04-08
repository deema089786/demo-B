import { http, HttpResponse } from 'msw';
import { SignupMutationPayload } from '@demo-b/data-user';

export const signupDriverSuccessHandler = http.post<any, SignupMutationPayload>(
  'https://api.com/signup',
  async ({ request }) => {
    const data = await request.clone().json();
    if (data.phoneNumber === '+155555555' && data.userType === 'driver') {
      return HttpResponse.json({
        accessToken: 'mocked-access-token',
        refreshToken: 'mocked-refresh-token',
      });
    }

    return; // Fallback to any next existing handler
  },
);

export const signupCustomerSuccessHandler = http.post<
  any,
  SignupMutationPayload
>('https://api.com/signup', async ({ request }) => {
  const data = await request.clone().json();
  if (data.phoneNumber === '+122222222' && data.userType === 'customer') {
    return HttpResponse.json({
      accessToken: 'mocked-access-token',
      refreshToken: 'mocked-refresh-token',
    });
  }

  return; // Fallback to any next existing handler
});

export const signupFallbackErrorHandler = http.post<any, SignupMutationPayload>(
  'https://api.com/signup',
  async () => {
    return HttpResponse.error();
  },
);

export const allSignupHandlers = [
  signupDriverSuccessHandler,
  signupCustomerSuccessHandler,
  signupFallbackErrorHandler,
];
