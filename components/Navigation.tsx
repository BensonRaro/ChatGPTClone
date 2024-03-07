"use client";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { VscClose } from "react-icons/vsc";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useSidebar } from "@/store/use-sidebar";
import { Hint } from "@/components/hint";
import { Button } from "./ui/button";
import ChatInput from "./ChatInput";

interface chatProps {
  id: string;
  title: string;
  userId: string;
  createdAt: Date;
}

const Navigation = ({
  children,
  chats,
}: {
  children: React.ReactNode;
  chats: chatProps[];
}) => {
  const { collapsed, mobileSidebar, setSidebar, setMobileSidebar } =
    useSidebar();

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className={cn(collapsed ? "hidden" : "fixed hidden md:flex")}>
        <Sidebar chats={chats} />
      </div>
      <div
        className={cn(
          mobileSidebar
            ? "fixed flex gap-10 inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            : "hidden"
        )}
        onClick={() => setMobileSidebar(false)}
      >
        <Sidebar chats={chats} />
        <Button
          variant="ghost"
          size="icon"
          className="border border-slate-200 dark:border-slate-800 text-white mt-5 md:hidden"
          onClick={() => setMobileSidebar(false)}
        >
          <VscClose className="h-6 w-6" />
        </Button>
      </div>
      <Hint
        label={collapsed ? "Open Sidebar" : "Close Sidebar"}
        side="right"
        className={cn(
          "hidden md:flex fixed justify-center items-center h-full",
          !collapsed && "md:ml-[295px]"
        )}
      >
        <span onClick={() => setSidebar(!collapsed)}>
          {collapsed ? (
            <BsChevronCompactRight className="h-6 w-6" />
          ) : (
            <div className="group">
              <BsChevronCompactLeft className="h-6 w-6 hidden group-hover:flex" />
              <MdOutlineHorizontalRule className="h-9 w-7 rotate-90 group-hover:hidden" />
            </div>
          )}
        </span>
      </Hint>
      <section
        className={cn(
          "flex flex-1 flex-col items-center pb-32 sm:px-5 pt-16",
          !collapsed && "md:ml-[295px]"
        )}
      >
        <div className="w-full max-w-4xl">{children}</div>
      </section>
      <div
        className={cn(
          "flex flex-col items-center pb-2 sm:px-10 sticky bottom-0 dark:bg-[#212121] bg-[#FFFFFF]",
          !collapsed && "md:ml-[295px]"
        )}
      >
        <div className="w-full max-w-4xl">
          <ChatInput />
          <p className="justify-center flex items-center w-full">
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Navigation;
