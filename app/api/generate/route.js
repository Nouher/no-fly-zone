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
      content: "say hi",
      // content:
      //   "You are a virtual assistant for content creation. you need to create a submission article body.",
    },
    // {
    //   role: "user",
    //   content: `Create a submission article for me based on these parameters:
    //   - Topic: I am a concerned resident of <insert suburb>. The new Western Sydney International (Nancy-Bird Walton) Airport (WSI) is set to open for freight, domestic and international travellers in 2026.
    //   The Australian Government has released the preliminary flight paths and draft Environmental Impact Statement (EIS) for WSI for the community to view.

    //   The draft EIS will be on public exhibition until 31 January 2024. Now is the time to make a Submission to tell the Federal, State, and Local politicians that residents have elected, that they don’t agree with proposed flight path changes.

    //   Flight Path changes will disproportionately affect Bardwell Park, Bardwell Valley, Bexley North, Earlwood, Kingsgrove and surrounds.

    //   These flight path changes will severely negatively impact the local community. The native environment, the native wildlife will be greatly hurt and destroyed. The noise from airplanes and associated gas emissions will destroy the environment, and hurt the residents health, and wellbeing. The area will suffer economically due to unfair decreases in residents property and housing values, and which in turn hurt their retirement savings, which will cause more stress on the federal government’s pension system in old age.

    //   Local residents already put up with their fair share of airplane noise, day and night - as well as the M5 motorway that has heavy freight, and trucks moving north and south, day and night.

    //   Now is the time to take action against the Western Sydney International Airport flight paths and protect our suburbs.

    //   Residents are encouraged to visit the Aircraft Overflight Noise Tool to see the preliminary flight paths and view the draft EIS to learn more about their impacts.

    //   Your task is to generate responses in varying length for the residents to copy and paste into emails to the Australian Government.

    //   Please reference local Australia examples, as well as international examples of where new infrastructure like Airports have been damaging to the local community, flora, and fauna.

    //   There will be prompts supplied below to help you craft a compelling summary of the issues, that will be emotional, and factual for the WSI team to respond to.
    //   -suburb: ${body.suburb}
    //   -Name: ${body.name}
    //   -Email: ${body.email}
    //   -Phone: ${body.phone}
    //   -Organisation: ${body.organisation}
    //   `,
    // },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: convo,
  });
  console.log(body);
  return NextResponse.json({
    message: completion.choices[0].message,
  });
}
