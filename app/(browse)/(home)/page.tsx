import Messages from "@/components/Messages";
import { db } from "@/lib/db";

const HomePage = async () => {
  const chats = await db.chats.findMany();
  console.log(chats);
  return (
    <div>
      <Messages />
      <Messages />
      <Messages />
    </div>
  );
};

export default HomePage;
