import SideBar from '../(site)/components/sidebar/SideBar';
import getConversations from '../action/getConversations';
import ConversationLists from './components/ConversationLists';

interface Props {
  children: React.ReactNode;
}

export default async function ConversationLayout({ children }: Props) {
  const conversations = await getConversations();
  return (
    <SideBar>
      <div className="h-full">
        <ConversationLists initialItems={conversations} />
        {children}
      </div>
    </SideBar>
  );
}
