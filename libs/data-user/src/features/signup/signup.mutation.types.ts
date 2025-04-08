import { UserType } from '@demo-b/data-user';

export type SignupMutationPayload = {
  userType: UserType;
  phoneNumber: string;
};
