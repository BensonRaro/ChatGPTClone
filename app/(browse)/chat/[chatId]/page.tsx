import { currentUser } from "@clerk/nextjs";

import Conversation from "@/components/Conversation";
import { db } from "@/lib/db";

const Chats = async ({
  searchParams,
}: {
  searchParams: {
    chatId: string;
  };
}) => {
  const user = await currentUser();
  const conversation = await db.conversation.findMany({
    where: {
      chatId: searchParams.chatId,
      userId: user?.id,
    },
  });

  return <Conversation conversation={conversation} />;
};

export default Chats;
