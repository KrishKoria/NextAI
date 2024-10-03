import { Button } from "@/components/ui/button";
import Link from "next/link";
import orbital from "@/assets/orbital.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex h-full items-center gap-[100px]">
      <Image
        src={orbital}
        alt="bg"
        className="animate-bg-spin absolute bottom-0 top-0 opacity-10"
      />
      <div className="flex flex-1 flex-col items-center justify-center gap-[16px] text-center">
        <h1 className="bg-gradient-to-r from-[#217bfe] to-[#e55571] bg-clip-text text-[128px] font-bold text-transparent">
          NEXT AI
        </h1>
        <h2 className="text-[1.5em]">Supercharge your business </h2>
        <h3 className="max-w-[70%] font-normal">
          Next AI is a leading AI company that helps businesses to transform and
          grow through AI solutions.
        </h3>
        <Button
          asChild
          className="mt-5 rounded-full bg-[#217bfe] px-6 py-4 text-sm text-white hover:bg-white hover:text-[#217bfe]"
        >
          <Link href={"/dashboard"}>Get Started</Link>
        </Button>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
