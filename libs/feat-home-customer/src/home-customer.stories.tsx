import type { Meta, StoryObj } from '@storybook/react';
import { allDriverOrdersHandlers } from '@demo-b/data-msw-handlers';

import { HomeCustomerController } from './home-customer.controller';

const meta: Meta<typeof HomeCustomerController> = {
  title: 'Features/Home Customer',
  component: HomeCustomerController,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: allDriverOrdersHandlers,
    },
  },
};

export default meta;
type Story = StoryObj<typeof HomeCustomerController>;

export const Default: Story = {};
