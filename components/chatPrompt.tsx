"use client";
import React, { useEffect, useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import attachment from "@/assets/attachment.png";
import arrow from "@/assets/arrow.png";

export default function ChatPrompt() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSuccess = (result: any) => {
    setImage(result.info.secure_url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sending the message here
    console.log("Sending message:", message);
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          className="flex cursor-pointer items-center justify-center rounded-full border-none bg-[#605e68] p-2.5"
        >
          <Image src={arrow} alt="arrow" width={16} height={16} />
        </Button>
      </form>
    </>
  );
}
