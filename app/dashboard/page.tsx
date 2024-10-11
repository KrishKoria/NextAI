import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import chat from "@/assets/chat.png";
import code from "@/assets/code.png";
import image from "@/assets/image.png";
import arrow from "@/assets/arrow.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function DashboardPage() {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="flex w-1/2 flex-1 flex-col items-center justify-center gap-[25px]">
        <div className="flex items-center gap-5 opacity-20">
          <Image src={logo} alt="" width={64} height={64} />
          <h1 className="bg-gradient-to-r from-[#217bfe] to-[#e55571] bg-clip-text text-[64px] font-bold text-transparent">
            NextAI
          </h1>
        </div>
        <div className="flex w-full items-center justify-between gap-[50px]">
          <div className="flex flex-1 flex-col gap-2.5 rounded-[20px] border border-solid border-[#555] p-5 text-sm font-light">
            <Image
              src={chat}
              alt=""
              width={40}
              height={40}
              className="object-cover"
            />
            <span>Create a New Chat</span>
          </div>
          <div className="flex flex-1 flex-col gap-2.5 rounded-[20px] border border-solid border-[#555] p-5 text-sm font-light">
            <Image
              src={image}
              alt=""
              width={40}
              height={40}
              className="object-cover"
            />
            <span>Analyze Images</span>
          </div>
          <div className="flex flex-1 flex-col gap-2.5 rounded-[20px] border border-solid border-[#555] p-5 text-sm font-light">
            <Image
              src={code}
              alt=""
              width={40}
              height={40}
              className="object-cover"
            />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>
      <div className="mb-10 mt-auto flex w-1/2 rounded-[20px] bg-[#2c2937]">
        <form className="mb-2.5 flex h-full w-full items-center justify-between gap-5">
          <Input
            className="flex-1 border-none bg-transparent p-5 text-[#ececec] outline-none"
            type="text"
            name="text"
            placeholder="Ask me anything..."
          />
          <Button
            variant={"ghost"}
            className="mr-5 flex cursor-pointer items-center justify-center rounded-[50%] border-[none] bg-[#605e68] p-2.5"
            type="submit"
          >
            <Image src={arrow} alt="" width={16} height={16} />
          </Button>
        </form>
      </div>
    </div>
  );
}
