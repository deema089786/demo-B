import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { DriverOrder } from '../../orders.types';

export const useDriverOrdersQuery = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['driver-orders'],
    queryFn: async () => {
      const { data } = await axios.request<DriverOrder[]>({
        url: 'https://api.com/driver-orders',
        method: 'GET',
      });
      return data;
    },
  });
  return {
    orders: data || [],
    isError,
    isLoading,
  };
};
