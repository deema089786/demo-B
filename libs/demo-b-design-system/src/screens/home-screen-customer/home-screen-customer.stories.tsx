import type { Meta, StoryObj } from '@storybook/react';

import { HomeScreenCustomer } from './home-screen-customer.component';

const meta: Meta<typeof HomeScreenCustomer> = {
  title: 'Screens/Home Screen Customer',
  component: HomeScreenCustomer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HomeScreenCustomer>;

export const Default: Story = {};
