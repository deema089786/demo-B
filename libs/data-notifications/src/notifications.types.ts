export type Notification = {
  id: string;
  title: string;
  description: string;
  state: NotificationState;
  action: NotificationAction | null;
  createdAt: string;
};

export type NotificationState = 'unread' | 'read' | 'archived';

export type NotificationActionNavigate = {
  type: 'navigate';
  url: string;
};

export type NotificationAction = NotificationActionNavigate;
