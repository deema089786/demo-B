import React from 'react';
import { Stack } from '@mui/material';
import { Notification } from '@demo-b/data-notifications';

import { ScreenLayout } from '../../layout';
import { ListLoader, NotificationListItem } from '../../molecules';

export type NotificationsScreenProps = {
  notifications: Notification[];
  isLoading?: boolean;
};

export const NotificationsScreen: React.FC<NotificationsScreenProps> = (
  props,
) => {
  const { notifications, isLoading } = props;

  if (isLoading) {
    return (
      <ScreenLayout>
        <ListLoader />
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <Stack spacing={1}>
        {notifications.map((notification) => (
          <NotificationListItem
            key={notification.id}
            title={notification.title}
            description={notification.description}
            date={new Date(notification.createdAt)}
            state={notification.state}
          />
        ))}
      </Stack>
    </ScreenLayout>
  );
};
