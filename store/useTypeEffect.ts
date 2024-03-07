import { create } from "zustand";

interface useTypeEffectProps {
  conversationId: string;
  setConversationId: (conversationId: string) => void;
}

export const useTypeEffect = create<useTypeEffectProps>((set) => ({
  conversationId: "",
  setConversationId: (conversationId) =>
    set({ conversationId: conversationId }),
}));
