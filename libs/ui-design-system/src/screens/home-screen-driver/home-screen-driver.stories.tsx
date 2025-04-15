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

export const Default: Story = {
  args: {
    isLoading: false,
    orders: [
      {
        id: 'id1',
        createdAt: new Date(),
        customerId: 'customerId1',
        price: 113,
        deliveryType: 'byScooter',
        route: {
          timeTotalMin: 23,
          distanceTotalKm: 3.5,
          from: { address: 'Main street 55', timeMin: 8, distanceKm: 0.6 },
          to: {
            address: 'Main street 55 Old way home',
            timeMin: 15,
            distanceKm: 2.9,
          },
        },
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    orders: [],
  },
};
