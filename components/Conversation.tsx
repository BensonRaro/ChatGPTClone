"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import TypingEffect from "./TypingEffect";
import { useTypeEffect } from "@/store/useTypeEffect";
import Typography from "./Typography";

interface conversationProps {
  id: string;
  userMessage: string;
  chatgptResponse: string;
  GeneratedImage: string;
  userId: string;
  chatId: string;
  createdAt: Date;
}

const Conversation = ({
  conversation,
}: {
  conversation: conversationProps[];
}) => {
  const { user } = useUser();
  const { conversationId } = useTypeEffect();
  // console.log(conversation);
  return (
    <>
      {/* userMessage */}
      {conversation.map((conv) => (
        <div key={conv.id}>
          <div className="mb-10">
            <div className="flex items-center gap-4">
              <img
                src={user?.imageUrl}
                alt=""
                className="h-8 w-8 rounded-full"
              />
              You
            </div>

            <div className="ml-12 mt-2">{conv.userMessage}</div>
          </div>
          <>
            <div className="flex items-center gap-4">
              <Image
                src="/favicon.ico"
                height={200}
                width={200}
                alt=""
                className="h-8 w-8 rounded-full"
              />
              ChatGPT
            </div>
            <div className="ml-12 mt-2 text-lg tracking-wide">
              {conversationId === conv.id ? (
                <TypingEffect text={conv.chatgptResponse} />
              ) : (
                <Typography text={conv.chatgptResponse} />
              )}
            </div>
          </>
        </div>
      ))}
    </>
  );
};

export default Conversation;
