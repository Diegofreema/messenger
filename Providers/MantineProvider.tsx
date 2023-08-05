'use client';
import { MantineProvider } from '@mantine/core';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const Mantine: FC<Props> = ({ children }): JSX.Element => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default Mantine;
