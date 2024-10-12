"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
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
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSuccess = (result: any) => {
    if (result.info && result.info.secure_url) {
      setImage(result.info.secure_url);
    } else {
      console.error("Upload did not return a secure URL.");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prompt = new FormData(e.target as HTMLFormElement);
    if (!prompt) return;
    setPrompt(prompt.get("prompt") as string);
    setIsLoading(true);
    try {
      const res = await GenerateResponse(prompt);
      setResponse(res);
      inputRef.current?.focus();
    } catch (error) {
      console.error("Error generating response:", error);
      setResponse("Sorry, an error occurred while generating the response.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [response]);

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
          <Markdown className="prose-li:list-disc">{response}</Markdown>
        </div>
      )}
      <div ref={endRef} />
      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 m-4 flex items-center rounded-full bg-[#2c2937] p-2.5"
      >
        <CldUploadWidget
          uploadPreset="myuploadpreset"
          onSuccess={handleSuccess}
          options={{
            folder: "NextAI",
            resourceType: "image",
          }}
        >
          {({ open }: { open: () => void }) => (
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
          ref={inputRef}
        />
        <Button
          type="submit"
          className="flex cursor-pointer items-center justify-center rounded-full border-none bg-[#adadad] p-2.5"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <Image src={arrow} alt="arrow" width={16} height={16} />
          )}
        </Button>
      </form>
    </>
  );
}
