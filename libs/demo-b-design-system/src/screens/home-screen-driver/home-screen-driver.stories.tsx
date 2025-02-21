import type { Meta, StoryObj } from '@storybook/react';

import { HomeScreenDriver } from './home-screen-driver.component';

const meta: Meta<typeof HomeScreenDriver> = {
  title: 'Screens/Home Screen Driver',
  component: HomeScreenDriver,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HomeScreenDriver>;

export const Default: Story = {};
