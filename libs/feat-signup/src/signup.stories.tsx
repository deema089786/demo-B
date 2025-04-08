import type { Meta, StoryObj } from '@storybook/react';
import { allSignupHandlers } from '@demo-b/data-msw-handlers';

import { SignupController } from './signup.controller';

const meta: Meta<typeof SignupController> = {
  title: 'Features/Signup',
  component: SignupController,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: allSignupHandlers,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SignupController>;

export const Default: Story = {};
