"use client";

import { FiEdit } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import Link from "next/link";

import { Hint } from "./hint";
import { ThemeDropDown } from "./theme/ThemeDropDown";

const Sidebar = () => {
  return (
    <div className="dark:bg-[#171717] bg-[#F9F9F9] h-screen flex flex-col justify-between w-[290px]">
      <div className="p-2 pt-4">
        <Link href="/">
          <Hint
            label="New chat"
            side="right"
            className="flex justify-between items-center dark:hover:bg-[#212121] hover:bg-[#ece7e7] p-2 rounded-md w-full"
          >
            <p className="gap-4 flex items-center">
              <img src="/logo.png" alt="" className="h-7 w-7 rounded-full" />
              <span className="text-sm">New chat</span>
            </p>
            <FiEdit className="h-5 w-5" />
          </Hint>
        </Link>
        {/* chats */}
      </div>
      <div className="p-2 pb-4 space-y-2">
        <div className="flex gap-2 items-center cursor-pointer dark:hover:bg-[#212121] hover:bg-[#ece7e7] p-2 rounded-md">
          <span className="border border-gray-500 p-1 rounded-full">
            <BsStars className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm">Upgrade plan</p>
            <p className="text-xs text-gray-500">Get GPT-4, DALL·E, and more</p>
          </div>
        </div>

        <ThemeDropDown />

        <div className="flex gap-2 items-center cursor-pointer dark:hover:bg-[#212121] hover:bg-[#ece7e7] p-2 rounded-md">
          <img
            src="https://lh3.googleusercontent.com/a/AGNmyxa1pBtBWQiKdjWoVHRo_Nw_EOfUGsNTmSI7tM_S=s96-c"
            alt=""
            className="rounded-full h-8 w-8"
          />
          <p className="text-sm">Benson</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
