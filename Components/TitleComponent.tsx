'use client';
import { FC } from 'react';
import { Title, TitleOrder } from '@mantine/core';

interface Props {
  text: string;
  order: TitleOrder;
  className?: string;
}

const TitleComponent: FC<Props> = ({ text, order, className }): JSX.Element => {
  return (
    <Title className={className} order={order}>
      {text}
    </Title>
  );
};

export default TitleComponent;
