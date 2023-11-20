'use client'
import { Button, Checkbox, Divider, Input, Radio, RadioGroup, Textarea } from "@nextui-org/react";
import { BookmarkIcon, BulbIcon, EditIcon, ExternalLinkIcon, FacebookSocialIcon, Icon1, Icon2, Icon3, Icon4, Icon5, InstagramSocialIcon, LinkIcon, LinkSocialIcon, LinkedInSocialIcon, Logo, MailSocialIcon, WhatsappSocialIcon, XSocialIcon } from './icons';
import { useRef } from "react";
import SubmissionForm from "./components/SubmissionForm";


export default function Home() {

  const linkRef = useRef(null)
  const scrollToGenerateButton = () => {
    linkRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="lg:flex lg:flex-col lg:items-center">

      <section className="flex flex-col items-center pt-10 bg-[url('/bg-plain.jpg')] bg-cover bg-center " >
        <Logo width={200} />
        <p className='text-2xl font-medium italic  text-center px-4 mt-40 text-white'><span className='underline '>Take action</span> against the Western Sydney International Airport flight paths and <span className='underline'>protect your suburb</span></p>
        <p className='bg-[#724324] text-white text-center p-8 mt-36'>
          Use this site to craft a submission to the Australian Government in regard to the draft flight paths proposed for the Western Sydney International Airport.
          <br />
          <br />
          Flight Path changes will disproportionately affect Bardwell Park, Bardwell Valley, Bexley North, Earlwood, Kingsgrove and surrounds.
        </p>
      </section >

      <section className="py-16 px-5 lg:w-1/2 ">
        <h1 className='flex justify-center gap-4 font-bold text-2xl text-[#724324]'>
          <BulbIcon width={30} />
          How does it work?
        </h1>
        <div className='flex justify-center flex-col gap-5 mt-14'>
          <div className='flex text-black gap-6 items-center'>
            <Icon1 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>Generate submission</h3>
              <p className='text-[#747570]'>This site uses ChatGPT artificial intelligence (AI) to generate a written submission. Use it as is, or as a draft to write your own.</p>
            </div>
          </div>
          <div className='flex text-black gap-6 items-center'>
            <Icon2 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>Send submission</h3>
              <p className='text-[#747570]'>After generating a submission, you can click the Send Mail button to send from your own email address, or Copy Mail to copy and paste your submission.</p>
            </div>
          </div>
          <div className='flex text-black gap-6 items-center'>
            <Icon3 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>No fly zone</h3>
              <p className='text-[#747570]'>With Community support, our voices will be heard by the committee, and the flight paths will be diverted.</p>
            </div>
          </div>
        </div>
      </section>



      <Divider className="my-2" />
      <div ref={linkRef}>
        <SubmissionForm />
      </div>

      <Divider className="my-2" />

      <section className="py-16 px-5">
        <h1 className='flex justify-center gap-4 font-bold text-2xl text-[#724324]'>
          <BulbIcon width={30} />
          What is this site?
        </h1>
        <div className='flex justify-center flex-col gap-5 mt-14'>
          <div className='flex text-black gap-6 items-center'>
            <Icon4 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>Community action</h3>
              <p className='text-[#747570]'>This tool was made for the residents disproportionately affected by flight path changes in Bardwell Park, Bardwell Valley, Bexley North, Earlwood, and Kingsgrove.</p>
            </div>
          </div>
          <div className='flex text-black gap-6 items-center'>
            <Icon4 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>From 0 to 100 flights per day</h3>
              <p className='text-[#747570]'>Under the proposed changes up to 99+ flights per day from Sydney Airport will fly over these homes.</p>
            </div>
          </div>
          <div className='flex text-black gap-6 items-center'>
            <Icon4 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>Delicate fauna destroyed</h3>
              <p className='text-[#747570]'>The current 3 flight paths in Sydney will be combined into one, taking off directly above Bardwell Park, Bardwell Valley, Bexley North, Earlwood, and Kingsgrove.</p>
            </div>
          </div>
          <div className='flex text-black gap-6 items-center'>
            <Icon4 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>Loud noises</h3>
              <p className='text-[#747570]'>The “Government Data – Noise Tool” indicates that homes will be affected by aircraft noise above 70 decibels (as loud as a passing truck 10 meters away) up to 99 times a day.</p>
            </div>
          </div>
        </div>
      </section>

      <Divider className="my-2" />

      <section className="py-16 px-5">
        <h1 className='flex justify-center gap-4 font-bold text-[22px] text-[#724324]'>
          <BulbIcon width={30} />
          How to voice your concern
        </h1>
        <div className='flex justify-center flex-col gap-5 mt-12'>
          <div className='flex text-black gap-6 items-center'>
            <Icon5 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>Generate a submission</h3>
              <p className='text-[#747570] cursor-pointer'><a onClick={scrollToGenerateButton} className="underline">use this website</a>  to draft an email to voice your concerns and stop WSI.</p>
            </div>
          </div>
          <div className='flex text-black gap-6 items-center'>
            <Icon5 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>Submit Online</h3>
              <p className='text-[#747570]'><a href="https://www.wsiflightpaths.gov.au/make-a-submission/" target="_blank" className="underline">Head to the WSI website</a>, and leave your comments in the online form.</p>
            </div>
          </div>
          <div className='flex text-black gap-6 items-center'>
            <Icon5 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>Talk to your Councillors</h3>
              <p className='text-[#747570]'>Local Councillors (often residents of the area) should be on our side. Reach out. </p>
            </div>
          </div>
          <div className='flex text-black gap-6 items-center'>
            <Icon5 width={20} className='w-1/5' />
            <div className='w-4/5'>
              <h3 className='text-lg font-medium py-2'>Make noise</h3>
              <p className='text-[#747570]'>Tell people about this tool. Use it to create change. <a href="#" className="underline">Share with your neighbours and local community.</a></p>
            </div>
          </div>
        </div>
      </section>

      <Divider className="my-2" />

      <section className="py-16 px-1 flex flex-col items-center">
        <h1 className='flex gap-2 items-center font-bold text-2xl'>
          <BookmarkIcon />
          <span className='text-[#535E32]'>Related documents</span>
        </h1>
        <div className="mt-10 flex justify-center">
          <div className='flex flex-col gap-y-5 text-[#747570]'>
            <a className='flex gap-2 text-sm ' target='_blank' href="https://www.wsiflightpaths.gov.au/make-a-submission/">
              <LinkIcon />
              <span>Western Sydney International Airport Community</span>
            </a>
            <a className='flex gap-2 text-sm ' target='_blank' href="https://wsiflightpaths.aerlabs.com/ ">
              <LinkIcon />
              <span>Flight path tool to check your address</span>
            </a>
            <a className='flex gap-2 text-sm ' target='_blank' href="https://www.wsiflightpaths.gov.au/make-a-submission/">
              <LinkIcon />
              <span>Form to submit your concern</span>
            </a>
          </div>
        </div>
      </section>

      <Divider className="my-2" />

      <section className="py-16 px-5 flex flex-col items-center">
        <h1 className='flex gap-2 items-center font-bold text-2xl'>
          <ExternalLinkIcon />
          <span className='text-[#535E32]'>Share this site</span>
        </h1>
        <div className='mt-10 flex justify-between items-center w-full'>
          <a href="#"><MailSocialIcon /></a>
          <a href="#"><LinkSocialIcon /></a>
          <a href="#"><FacebookSocialIcon /></a>
          <a href="#"><InstagramSocialIcon /></a>
          <a href="#"><WhatsappSocialIcon /></a>
          <a href="#"><XSocialIcon /></a>
          <a href="#"><LinkedInSocialIcon /></a>
        </div>
      </section>
    </div >
  )
}
