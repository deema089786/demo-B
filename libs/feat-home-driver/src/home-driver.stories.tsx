import type { Meta, StoryObj } from '@storybook/react';
import { allDriverOrdersHandlers } from '@demo-b/data-msw-handlers';

import { HomeDriverController } from './home-driver.controller';

const meta: Meta<typeof HomeDriverController> = {
  title: 'Features/HomeDriver',
  component: HomeDriverController,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: allDriverOrdersHandlers,
    },
  },
};

export default meta;
type Story = StoryObj<typeof HomeDriverController>;

export const Default: Story = {};
