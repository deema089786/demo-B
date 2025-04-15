import type { Meta, StoryObj } from '@storybook/react';
import { allNotificationsHandlers } from '@demo-b/data-msw-handlers';

import { NotificationsController } from './notifications.controller';

const meta: Meta<typeof NotificationsController> = {
  title: 'Features/Notifications',
  component: NotificationsController,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: allNotificationsHandlers,
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationsController>;

export const Default: Story = {};
