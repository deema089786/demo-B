import React from 'react';
import { NotificationsScreen } from '@demo-b/ui-design-system';
import { useNotificationsQuery } from '@demo-b/data-notifications';

export const NotificationsController: React.FC = () => {
  const { notifications, isLoading } = useNotificationsQuery();
  return (
    <NotificationsScreen notifications={notifications} isLoading={isLoading} />
  );
};
