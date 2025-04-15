import React from 'react';
import { HomeScreenDriver } from '@demo-b/ui-design-system';
import { useDriverOrdersQuery } from '@demo-b/data-orders';

export const HomeDriverController: React.FC = () => {
  const { orders, isLoading } = useDriverOrdersQuery();
  return <HomeScreenDriver orders={orders} isLoading={isLoading} />;
};
