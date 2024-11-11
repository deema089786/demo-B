import type { Meta, StoryObj } from '@storybook/react';

import { SignupScreen } from './signup-screen.component';

const meta: Meta<typeof SignupScreen> = {
  title: 'Screens/SignUp Screen',
  component: SignupScreen,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SignupScreen>;

export const Default: Story = {};
