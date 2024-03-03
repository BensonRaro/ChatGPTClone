import ChatInput from "@/components/ChatInput";
import Navigation from "@/components/Navigation";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Navigation>
      {children}
      <ChatInput />
    </Navigation>
  );
};

export default ChatLayout;
