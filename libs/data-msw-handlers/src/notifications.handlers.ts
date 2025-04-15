import { http, HttpResponse, delay } from 'msw';
import { Notification } from '@demo-b/data-notifications';

export const notificationsSuccessHandler = http.get(
  'https://api.com/notifications',
  async () => {
    await delay(1000);
    const data: Notification[] = [
      {
        id: 'id1',
        title: 'Order failed',
        description: 'Order failed at 13:23',
        state: 'unread',
        createdAt: new Date(2025, 0, 25, 15, 0).toISOString(),
        action: null,
      },
      {
        id: 'id2',
        title: 'Order Completed',
        description: 'Order completed at 12:30',
        state: 'unread',
        createdAt: new Date(2025, 0, 25, 14, 45).toISOString(),
        action: null,
      },
      {
        id: 'id3',
        title: 'New updates',
        description: 'New feature on Settings tab',
        state: 'read',
        createdAt: new Date(2025, 0, 25, 12, 25).toISOString(),
        action: { type: 'navigate', url: '/settings' },
      },
    ];
    return HttpResponse.json(data);
  },
);

export const allNotificationsHandlers = [notificationsSuccessHandler];
