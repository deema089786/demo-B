import React from 'react';
import { HomeScreenCustomer } from '@demo-b/ui-design-system';
import { useCurrentLocation } from '@demo-b/data-places';

export const HomeCustomerController: React.FC = () => {
  const { place, isLoading } = useCurrentLocation();
  // console.log({ isLoading, coords });
  return <HomeScreenCustomer defaultLocation={place} />;
};
