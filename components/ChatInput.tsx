import { FaArrowUp } from "react-icons/fa6";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { NewConversation } from "@/actions/NewConversation";
import { CreateChat } from "@/actions/CreateChat";
import { useTypeEffect } from "@/store/useTypeEffect";
import { ChatGPT_API } from "@/actions/ChatGPT_API";
import { toast } from "sonner";

const ChatInput = () => {
  const params = useParams<{ chatId: string }>();
  const router = useRouter();
  const { setConversationId } = useTypeEffect();

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const Send = async () => {
    setLoading(true);
    if (!content) return;
    const notification = toast.loading("ChatGPT is thinking...");
    const results = await ChatGPT_API(content);
    try {
      if (!params.chatId) {
        const chat = await CreateChat(content);
        const conversation = await NewConversation(
          content,
          chat.id
          // results
        );
        setConversationId(conversation?.id || "");
        router.push(`/chat/${chat.id}`);
        // console.log(chat);
      } else {
        const conversation = await NewConversation(
          content,
          params.chatId
          // results
        );
        setConversationId(conversation?.id || "");
      }
      setContent("");
      setLoading(false);
      toast.success("Results Are ready", { id: notification });
    } catch (error) {
      toast.error("Error occured", { id: notification });
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="p-3">
      <div className="flex hover:shadow-lg bg-transparent focus-within:shadow-lg rounded-2xl border border-gray-200 px-5 py-2 items-center">
        <input
          className="bg-transparent focus:outline-none mx-2 w-full"
          placeholder="Message ChatGPT"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <Button size="icon" disabled={loading || !content} onClick={Send}>
          <FaArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
