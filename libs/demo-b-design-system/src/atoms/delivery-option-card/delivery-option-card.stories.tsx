import type { Meta, StoryObj } from '@storybook/react';

import { DeliveryOptionCard } from './delivery-option-card.component';
import { DeliveryOptionMotoIcon, DeliveryOptionWalkIcon } from '../../icons';

const meta: Meta<typeof DeliveryOptionCard> = {
  title: 'Atoms/Delivery Option Card',
  component: DeliveryOptionCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DeliveryOptionCard>;

export const Selected: Story = {
  args: {
    selected: true,
    color: '#e2dcff',
    title: 'From $19.99',
    subTitle: 'by Scooter driver',
    icon: <DeliveryOptionMotoIcon />,
  },
};

export const NotSelected: Story = {
  args: {
    selected: false,
    color: '#ffdfff',
    title: 'From $8.99',
    subTitle: 'by Courier',
    icon: <DeliveryOptionWalkIcon />,
  },
};
