import type { Meta, StoryObj } from '@storybook/react';

import { NotificationsScreen } from './notifications-screen.component';

const meta: Meta<typeof NotificationsScreen> = {
  title: 'Screens/Notifications Screen',
  component: NotificationsScreen,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof NotificationsScreen>;

export const Default: Story = {
  args: {
    isLoading: false,
    notifications: [
      {
        id: 'id1',
        title: 'Order failed',
        description: 'Order failed at 13:23',
        state: 'unread',
        createdAt: new Date(2025, 0, 25, 15, 0).toISOString(),
        action: null,
      },
      {
        id: 'id2',
        title: 'Order Completed',
        description: 'Order completed at 12:30',
        state: 'unread',
        createdAt: new Date(2025, 0, 25, 14, 45).toISOString(),
        action: null,
      },
      {
        id: 'id3',
        title: 'New updates',
        description: 'New feature on Settings tab',
        state: 'read',
        createdAt: new Date(2025, 0, 25, 12, 25).toISOString(),
        action: { type: 'navigate', url: '/settings' },
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    notifications: [],
    isLoading: true,
  },
};
