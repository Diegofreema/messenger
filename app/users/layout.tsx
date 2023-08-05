import SideBar from '../(site)/components/sidebar/SideBar';
import getUsers from '../action/getUsers';
import UserList from './components/UserList';

interface Props {
  children: React.ReactNode;
}

export default async function UserLayout({ children }: Props) {
  const users = await getUsers();
  return (
    <SideBar>
      <UserList items={users!} />
      <div className="h-full">{children}</div>
    </SideBar>
  );
}
