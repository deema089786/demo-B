import type { Meta, StoryObj } from '@storybook/react';

import { SettingsScreen } from './settings-screen.component';

const meta: Meta<typeof SettingsScreen> = {
  title: 'Screens/Settings Screen',
  component: SettingsScreen,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SettingsScreen>;

export const Default: Story = {};
