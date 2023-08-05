import { Conversation } from '@prisma/client';
import { FC } from 'react';

interface Props {
  initialItems: Conversation[];
}

const ConversationLists: FC<Props> = ({ initialItems }): JSX.Element => {
  return <div>ConversationLists</div>;
};

export default ConversationLists;
