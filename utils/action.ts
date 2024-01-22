"use server";

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessage: any) => {
  // const response = await openai.chat.completions.create({
  //   messages: [
  //     { role: "system", content: "you are a helpful assistant" },
  //     {
  //       role: "user",
  //       content: chatMessage,
  //     },
  //   ],
  //   model: "gpt-3.5-turbo",
  // });

  // console.log(response.choices[0].message);
  // console.log("resp", response);
  console.log(chatMessage);

  return "awesome";
};
