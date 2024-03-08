"use server";

import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const CreateChat = async (title: string) => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const chat = await db.chats.create({
    data: {
      userId: user.id,
      title: title,
    },
  });
  revalidatePath(`/chats/`);
  return chat;
};
