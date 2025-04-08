import React from 'react';
import { SignupScreen } from '@demo-b/ui-design-system';
import { useSignupMutation } from '@demo-b/data-user';

export const SignupController: React.FC = () => {
  const { signup } = useSignupMutation({
    onError: () => alert('Sign up failed.'),
    onSuccess: () => alert('Sign up successful.'),
  });
  return (
    <SignupScreen
      onSubmit={(values) =>
        signup({
          userType: values.userType,
          phoneNumber: `+1${values.phoneNumber}`,
        })
      }
    />
  );
};
