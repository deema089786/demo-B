import type { Meta, StoryObj } from '@storybook/react';

import { HomeScreen } from './home-screen.component';

const meta: Meta<typeof HomeScreen> = {
  title: 'Screens/Home Screen',
  component: HomeScreen,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HomeScreen>;

export const Default: Story = {};
