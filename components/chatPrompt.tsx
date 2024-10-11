"use client";
import React, { useEffect, useRef } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import attachment from "@/assets/attachment.png";
import Image from "next/image";
import { Button } from "./ui/button";
import arrow from "@/assets/arrow.png";
export default function ChatPrompt() {
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div className="pb-[50px]" ref={endRef} />
      <form className="absolute bottom-0 flex w-1/2 items-center rounded-full bg-[#2c2937] p-2.5">
        <Label
          htmlFor="picture"
          className="flex cursor-pointer items-center justify-center rounded-[50%] border-none bg-[#605e68] p-2.5"
        >
          <Image src={attachment} alt="attachment" width={16} height={16} />
        </Label>
        <Input
          id="picture"
          type="file"
          className="hidden flex-1 border-none bg-transparent p-5 text-[#ececec] outline-none"
        />
        <Input
          type="text"
          placeholder="Ask Anything...."
          className="flex-1 border-none bg-transparent p-5 text-[#ececec] outline-none"
        />
        <Button className="flex cursor-pointer items-center justify-center rounded-[50%] border-[none] bg-[#605e68] p-2.5">
          <Image src={arrow} alt="arrow" width={16} height={16} />
        </Button>
      </form>
    </>
  );
}
