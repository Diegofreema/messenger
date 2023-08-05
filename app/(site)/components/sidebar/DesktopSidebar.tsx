'use client';

import useRoutes from '@/hooks/useRoutes';
import { FC, useState } from 'react';
import DeskTopItem from './DeskTopItem';
import { User } from '@prisma/client';
import Avatar from '../Avatar';

interface Props {
  currentUser: User;
}

const DesktopSidebar: FC<Props> = ({ currentUser }): JSX.Element => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="hidden 
        lg:fixed 
        lg:inset-y-0 
        lg:left-0 
        lg:z-40 
        lg:w-20 
        xl:px-6
        lg:overflow-y-auto 
        lg:bg-white 
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between"
    >
      <nav className="mt-4 flex flex-col justify-between">
        <ul className="flex flex-col items-center space-y-1" role="list">
          {routes.map((item) => (
            <DeskTopItem
              key={item.label}
              href={item.href}
              label={item.label}
              onClick={item.onClick}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </ul>
      </nav>
      <nav className="mt-4 flex flex-col justify-between items-center">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer hover:opacity-75 transition"
        >
          <Avatar user={currentUser} />
        </div>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
