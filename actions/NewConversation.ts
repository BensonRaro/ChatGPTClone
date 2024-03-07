"use server";

import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { ChatGPT_API } from "./ChatGPT_API";

export const NewConversation = async (
  content: string,
  chatId: string
  // results: { result: string; image_gen: boolean; image_url: string }
) => {
  const user = await currentUser();
  const results = await ChatGPT_API(content);

  if (!user) {
    return redirectToSignIn();
  }

  try {
    const conversation = await db.conversation.create({
      data: {
        userId: user.id,
        userMessage: content,
        chatgptResponse: results.result,
        GeneratedImage: results.image_gen ? results.image_url : "",
        chatId: chatId,
      },
    });
    revalidatePath(`/chats/${chatId}`);
    return conversation;
  } catch (error) {
    console.log(error);
  }
};
