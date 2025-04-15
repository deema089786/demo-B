import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { NotificationState } from '@demo-b/data-notifications';

export type NotificationListProps = {
  title: string;
  description: string;
  date: Date;
  state: NotificationState;
};

export const NotificationListItem: React.FC<NotificationListProps> = (
  props,
) => {
  const { title, description, date, state } = props;
  return (
    <Paper
      variant={state === 'unread' ? 'outlined' : 'elevation'}
      component={Stack}
      sx={{
        color: state === 'unread' ? 'text.primary' : 'text.secondary',
        borderColor: state === 'unread' ? 'primary.main' : 'secondary.main',
      }}
      p={1}
    >
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography>{title}</Typography>
        <Typography variant="caption" color="textSecondary">
          {Intl.DateTimeFormat('en-US', {}).format(date)}
        </Typography>
      </Stack>
      <Typography variant="caption" fontWeight="bold">
        {description}
      </Typography>
    </Paper>
  );
};
