'use client';

import { NextPage } from 'next';
import clsx from 'clsx';

import useConversation from '@/hooks/useConversation';
import EmptyState from '@/Components/EmtyState';
interface Props {}

const Conversations: NextPage<Props> = ({}): JSX.Element => {
  const { isOpen } = useConversation();
  return (
    <div
      className={clsx('lg:pl-80 h-full lg:block', isOpen ? 'block' : 'hidden')}
    >
      <EmptyState />
    </div>
  );
};

export default Conversations;
