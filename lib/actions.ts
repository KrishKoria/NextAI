"use server";

import model from "./gemini";

export async function GenerateResponse(formdata: FormData) {
  const prompt = formdata.get("prompt");
  const result = await model.generateContent(prompt as string);
  return result.response.text();
}
