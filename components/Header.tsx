import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { RiArrowDropDownLine, RiBarChartHorizontalLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

const Header = () => {
  const { collapsed, setMobileSidebar } = useSidebar();

  return (
    <>
      <header
        className={cn(
          "space-x-2 items-center pt-1 fixed dark:bg-[#212121] bg-[#FFFFFF] w-full",
          !collapsed && "md:ml-[280px]"
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          className="border border-slate-200 dark:border-slate-800 md:hidden"
          onClick={() => setMobileSidebar(true)}
        >
          <RiBarChartHorizontalLine className="h-4 w-4" />
        </Button>
        <Link href="/" className={cn(!collapsed && "md:hidden")}>
          <Button
            variant="ghost"
            size="icon"
            className="border border-slate-200 dark:border-slate-800"
          >
            <FiEdit className="h-4 w-4" />
          </Button>
        </Link>
        <Button variant="ghost">
          ChatGPT 3.5
          <RiArrowDropDownLine className="h-7 w-7" />
        </Button>
      </header>
    </>
  );
};

export default Header;
