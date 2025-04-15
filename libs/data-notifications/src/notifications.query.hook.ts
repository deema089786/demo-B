import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Notification } from './notifications.types';

export const useNotificationsQuery = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const { data } = await axios.request<Notification[]>({
        url: 'https://api.com/notifications',
        method: 'GET',
      });
      return data;
    },
  });
  return {
    notifications: data || [],
    isError,
    isLoading,
  };
};
