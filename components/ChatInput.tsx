import { FaArrowUp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

const ChatInput = () => {
  return (
    <div className="fixed bottom-0 z-30 w-full p-3 dark:bg-[#212121] bg-[#FFFFFF]">
      <div className="flex hover:shadow-lg bg-transparent focus-within:shadow-lg rounded-2xl border border-gray-200 px-5 py-2 items-center max-w-md sm:max-w-[550px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl">
        <input
          className="bg-transparent focus:outline-none mx-2 w-full"
          placeholder="Message ChatGPT"
        />
        <Button size="icon" className="">
          <FaArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
