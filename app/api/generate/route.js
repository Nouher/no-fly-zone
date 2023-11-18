import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

export async function POST(request) {
  const body = await request.json();

  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY,
  // });

  // const completion = await openai.completions.create({
  //   model: "gpt-3.5-turbo-instruct",
  //   prompt: "Say this is a test.",
  //   max_tokens: 7,
  //   temperature: 0,
  // });

  // console.log(completion);

  console.log(body);
  return NextResponse.json({
    body: "from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt from chat gpt testt ",
  });
}
