"use client";
import React, { useEffect, useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import attachment from "@/assets/attachment.png";
import arrow from "@/assets/arrow.png";
import { GenerateResponse } from "@/lib/actions";
import Markdown from "react-markdown";

export default function ChatPrompt() {
  const [image, setImage] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSuccess = (result: any) => {
    setImage(result.info.secure_url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = new FormData(e.target as HTMLFormElement);
    if (!prompt) return;
    setPrompt(prompt.get("prompt") as string);
    const res = await GenerateResponse(prompt);
    setResponse(res);
  };

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {image && (
        <CldImage width={250} height={250} alt="chat image" src={image} />
      )}
      {prompt && (
        <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
          {prompt}
        </div>
      )}
      {response && (
        <div className="p-2 text-[#ececec]">
          {<Markdown className={"prose-li:list-disc"}>{response}</Markdown>}
        </div>
      )}
      <div className="pb-[50px]" ref={endRef} />
      <form
        onSubmit={handleSubmit}
        className="absolute bottom-0 left-1/4 flex w-1/2 items-center rounded-full bg-[#2c2937] p-2.5"
      >
        <CldUploadWidget
          uploadPreset="myuploadpreset"
          onSuccess={handleSuccess}
          options={{
            folder: "NextAI",
            resourceType: "image",
          }}
        >
          {({ open }) => (
            <Label
              htmlFor="picture"
              className="flex cursor-pointer items-center justify-center rounded-full border-none bg-[#605e68] p-2.5"
              onClick={() => open()}
            >
              <Image src={attachment} alt="attachment" width={16} height={16} />
            </Label>
          )}
        </CldUploadWidget>
        <Input
          type="text"
          placeholder="Ask Anything...."
          className="flex-1 border-none bg-transparent p-5 text-[#ececec] outline-none"
          name="prompt"
        />
        <Button
          type="submit"
          className="flex cursor-pointer items-center justify-center rounded-full border-none bg-[#adadad] p-2.5"
        >
          <Image src={arrow} alt="arrow" width={16} height={16} />
        </Button>
      </form>
    </>
  );
}
