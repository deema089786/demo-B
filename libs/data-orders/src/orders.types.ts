export type Order = {
  id: string;
  createdAt: Date;
  price: number;
  deliveryType: 'byCourier' | 'byScooter' | 'byCar' | 'byTruck';
  route: {
    timeTotalMin: number;
    distanceTotalKm: number;
    from: {
      address: string;
      timeMin: number;
      distanceKm: number;
    };
    to: {
      address: string;
      timeMin: number;
      distanceKm: number;
    };
  };
};

export type CustomerOrder = Order & {
  driverId: string;
};

export type DriverOrder = Order & {
  customerId: string;
};
