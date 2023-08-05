'use client';
import { FC } from 'react';
import { Notifications } from '@mantine/notifications';
interface Props {}

const Notification: FC<Props> = ({}): JSX.Element => {
  return <Notifications position="top-center" />;
};

export default Notification;
