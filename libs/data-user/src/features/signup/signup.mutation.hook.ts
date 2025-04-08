import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useMemo } from 'react';

import { SignupMutationPayload } from './signup.mutation.types';

type UseSignupMutationParams = {
  onSuccess?: () => void;
  onError?: () => void;
};
export const useSignupMutation = (params: UseSignupMutationParams = {}) => {
  const { onSuccess, onError } = params;
  const { isError, isPending, isSuccess, mutate } = useMutation({
    onSuccess,
    onError,
    mutationFn: (data: SignupMutationPayload) => {
      return axios.request({
        url: 'https://api.com/signup',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  });

  return useMemo(
    () => ({
      signup: mutate,
      isError,
      isPending,
      isSuccess,
    }),
    [isError, isPending, isSuccess, mutate],
  );
};
