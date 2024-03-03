import TypingEffect from "@/components/TypingEffect";
import { ThemeDropDown } from "@/components/theme/ThemeDropDown";

export default function Home() {
  return (
    <main className="">
      <TypingEffect text="This is a typing effect!" />
      <ThemeDropDown />
    </main>
  );
}
