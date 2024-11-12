import type { Meta, StoryObj } from '@storybook/react';

import { OptionCard } from './option-card.component';

const meta: Meta<typeof OptionCard> = {
  title: 'Atoms/Option Card',
  component: OptionCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof OptionCard>;

export const Selected: Story = {
  args: {
    selected: true,
    imageSrc: 'images/signup-option-driver.png',
    label: 'Driver',
  },
};

export const NotSelected: Story = {
  args: {
    selected: false,
    imageSrc: 'images/signup-option-client.png',
    label: 'Client',
  },
};
