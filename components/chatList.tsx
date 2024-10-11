import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
export default function ChatList() {
  return (
    <div className="flex h-full flex-col">
      <span className="mb-2.5; text-[10px] font-semibold">DASHBOARD</span>
      <Link
        className="rounded-[10px] p-[10px] hover:bg-[#2c2937]"
        href="/dashboard"
      >
        Create a new Chat
      </Link>
      <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
        Explore Lama AI
      </Link>
      <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
        Contact
      </Link>
      <hr className="mx-0 my-5 h-0.5 rounded-[5px] border-[none] bg-[#ddd] opacity-10" />
      <span className="mb-2.5; text-[10px] font-semibold">RECENT CHATS</span>
      <div className="flex flex-col overflow-scroll">
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
        <Link className="rounded-[10px] p-[10px] hover:bg-[#2c2937]" href="/">
          Recent Chat
        </Link>
      </div>
      <hr className="mx-0 my-5 h-0.5 rounded-[5px] border-[none] bg-[#ddd] opacity-10" />
      <div className="mt-auto flex items-center gap-3 text-xs">
        <Image src={logo} alt="" width={24} height={24} />
        <div className="flex flex-col">
          <span className="font-semibold">Upgrade to NextAI Pro</span>
          <span className="text-[#888]">
            Get unlimited access to all features
          </span>
        </div>
      </div>
    </div>
  );
}
