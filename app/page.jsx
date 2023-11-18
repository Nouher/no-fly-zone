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
        <p className='bg-[#724324] text-white text-center text-sm p-8 mt-36'>
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

      <section className='py-16 px-5 flex flex-col items-center' ref={linkRef}>
        <h1 className='flex gap-2 items-center font-bold text-2xl'>
          <EditIcon />
          <span className='text-[#535E32]'>Your submission</span>
        </h1>
        <p className='text-[#747570] py-12 text-md text-center italic'>
          We utilise ChatGPT to generate your submission. Use as is, or as a starting point
        </p>
        <SubmissionForm />


        <div className="mt-12">
          <h2 className='w-full font-semibold text-md text-start '>2. Adjust submission concerns <span className="text-[#AFAFAF]">(optional)</span></h2>
          <p className='mt-7 text-sm '>What do you care about? Why are you completing this submission? These factors will be used to change the generated response. </p>
          <div className="mt-7 flex flex-col gap-y-3">
            <h3 className='text-sm '>
              Your suburb or postcode
            </h3>
            <Input
              placeholder="Input suburb or postcode"
              labelPlacement="outside"
            />
          </div>
          <div className='flex flex-col gap-3 items-start w-full mt-7'>
            <Checkbox defaultSelected radius="full" >Noise from planes</Checkbox>
            <Checkbox defaultSelected radius="full" >My health</Checkbox>
            <Checkbox radius="full" >The environment</Checkbox>
            <Checkbox defaultSelected radius="full" >Native wildlife</Checkbox>
            <Checkbox radius="full" >Sharing flight paths across Sydney</Checkbox>
            <Checkbox radius="full" >Property values decreasing</Checkbox>
            <Checkbox radius="full" >Already get enough noise from M5</Checkbox>
            <Checkbox radius="full" >Already get enough noise from planes</Checkbox>
          </div>
        </div>
        <div>
          <h3 className='w-full mt-12 font-semibold text-lg text-start '>3. Add your details <span className="text-[#AFAFAF]">(optional)</span></h3>
          <p className=' text-sm mt-7'>This site does not store any of your data. It uses the information below to populate an email you send from your email account. </p>
          <div className='mt-7 flex flex-col gap-1'>
            <h3 className='text-sm'>Remain anonymous</h3>
            <RadioGroup>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </RadioGroup>
          </div>
          <div className='mt-6 flex flex-col gap-4'>
            <Input type='text' label='Name' placeholder='Input Name' labelPlacement="outside" />
            <Input type='email' label='Email' placeholder='Input Email' labelPlacement="outside" />
            <Input type='phone' label='Phone' placeholder='Input Phone' labelPlacement="outside" />
            <Input type='text' label='Organisation' placeholder='Input Organisation' labelPlacement="outside" />
          </div>
          <div className='mt-12 flex w-full justify-between '>
            <Button variant="ghost" color='primary' radius="full" size='lg' className='font-semibold h-16 w-40'>Copy text</Button>
            <Button radius="full" color='primary' size='lg' className='text-white font-semibold h-16 w-40' startContent={
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.2501 2.03253L7.24545 3.06747C3.35787 4.40656 1.41408 5.0761 0.96984 6.23326C0.794876 6.68901 0.75408 7.17908 0.852343 7.64475C1.10184 8.8271 2.93285 9.6378 6.59488 11.2593C6.63666 11.2778 6.67647 11.2954 6.71435 11.3123L9.81396 9.0847C10.1857 8.81755 10.3715 8.68399 10.4298 8.7417C10.488 8.79941 10.3532 8.98354 10.0836 9.3518L7.90783 12.3236C7.96469 12.4394 8.02784 12.5794 8.10772 12.7564C9.6614 16.2009 10.4383 17.9231 11.5289 18.2155C12.1041 18.3697 12.7257 18.3116 13.2807 18.052C14.3329 17.5596 14.935 15.7087 16.1392 12.0069L17.1987 8.75006C18.6631 4.24822 19.3953 1.99729 18.2075 0.849C17.0197 -0.299294 14.7632 0.47798 10.2501 2.03253Z" fill="white" />
              </svg>

            }>
              Send
            </Button>
          </div>
        </div>
      </section>

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
