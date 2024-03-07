import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import Navigation from "@/components/Navigation";
import { db } from "@/lib/db";

const ChatLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const chats = await db.chats.findMany({
    where: {
      userId: user?.id,
    },
  });
  return <Navigation chats={chats}>{children}</Navigation>;
};

export default ChatLayout;
