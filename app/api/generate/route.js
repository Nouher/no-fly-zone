import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

export async function POST(request) {
  const body = await request.json();
  let convo = [
    {
      role: "system",
      content:
        // "You are a virtual assistant for content creation. you need to create a submission article body.",
        "You are a virtual assistant for content creation.",
    },
    {
      role: "user",
      // content: `Create a submission article for me based on these parameters:
      //   - Topic: craft a submission to the Australian Government in regard to the draft flight paths proposed for the Western Sydney International Airport.
      //   - Flight Path changes will disproportionately affect Bardwell Park, Bardwell Valley, Bexley North, Earlwood, Kingsgrove and surrounds.
      //   `,
      content: `Create a submission article for me based on these parameters:
        - Topic: the Australian Government in regard to the draft flight paths proposed for the Western Sydney International Airport.
        `,
    },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: convo,
  });
  console.log(completion.choices[0].message);

  return NextResponse.json({
    message: completion.choices[0].message,
  });
}
