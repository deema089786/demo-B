import type { Meta, StoryObj } from '@storybook/react';
import { allSignupHandlers } from '@demo-b/data-msw-handlers';

import { SettingsController } from './settings.controller';

const meta: Meta<typeof SettingsController> = {
  title: 'Features/Settings',
  component: SettingsController,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: allSignupHandlers,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SettingsController>;

export const Default: Story = {};
