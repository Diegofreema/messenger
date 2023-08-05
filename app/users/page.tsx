import EmptyState from '@/Components/EmtyState';
import { NextPage } from 'next';

interface Props {}

const Users: NextPage<Props> = ({}) => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default Users;
