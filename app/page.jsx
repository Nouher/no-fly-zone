import { Button, Checkbox, Divider, Input, Radio, RadioGroup, Textarea } from "@nextui-org/react";
import { BookmarkIcon, BulbIcon, EditIcon, ExternalLinkIcon, FacebookSocialIcon, Icon1, Icon2, Icon3, Icon4, Icon5, InstagramSocialIcon, LinkIcon, LinkSocialIcon, LinkedInSocialIcon, Logo, MailSocialIcon, WhatsappSocialIcon, XSocialIcon } from './icons';


export default function Home() {
  return (
    <div>

      <section div className="flex flex-col items-center pt-10 bg-[url('/bg-plain.jpg')] bg-cover bg-center" >
        <Logo width={200} />
        <p className='text-2xl font-medium italic  text-center px-4 mt-40 text-white'><span className='underline '>Take action</span> against the Western Sydney International Airport flight paths and <span className='underline'>protect your suburb</span></p>
        <div className='bg-[#724324] text-white text-center text-sm p-8 mt-36'>
          Use this site to craft a submission to the Australian Government in regard to the draft flight paths proposed for the Western Sydney International Airport.
          <br />
          <br />
          Flight Path changes will disproportionately affect Bardwell Park, Bardwell Valley, Bexley North, Earlwood, Kingsgrove and surrounds.
        </div>
      </section >

      <section className="py-16 px-5">
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

      <section className='py-16 px-5 flex flex-col items-center'>
        <h1 className='flex gap-2 items-center font-bold text-2xl'>
          <EditIcon />
          <span className='text-[#535E32]'>Your submission</span>
        </h1>
        <p className='text-[#747570] py-12 text-md text-center italic'>
          We utilise ChatGPT to generate your submission. Use as is, or as a starting point
        </p>
        <Button radius="full" size='lg' className='bg-[#8EA34E] text-white font-semibold w-72 h-14'
          startContent={
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0465 2.35204L12.0027 2.75047C12.1652 2.81816 12.1652 3.04829 12.0027 3.11598L11.0465 3.51441C10.9897 3.53805 10.9472 3.58673 10.9313 3.64614L10.6528 4.69062C10.6005 4.88658 10.3225 4.88658 10.2702 4.69062L9.99168 3.64614C9.97584 3.58673 9.93329 3.53805 9.87653 3.51441L8.9203 3.11598C8.75785 3.04829 8.75785 2.81816 8.9203 2.75047L9.87653 2.35204C9.93329 2.32839 9.97584 2.27972 9.99168 2.2203L10.2702 1.17582C10.3225 0.979864 10.6005 0.979864 10.6528 1.17582L10.9313 2.2203C10.9472 2.27972 10.9897 2.32839 11.0465 2.35204ZM7.49373 3.70265L8.80471 4.24247C9.04991 4.34343 9.04991 4.69071 8.80471 4.79167L7.49373 5.33149C7.41392 5.36435 7.35236 5.4303 7.32507 5.51218L6.78362 7.13654C6.69337 7.40729 6.3104 7.40729 6.22015 7.13654L5.6787 5.51218C5.6514 5.4303 5.58984 5.36435 5.51004 5.33149L4.19906 4.79167C3.95386 4.69071 3.95386 4.34343 4.19906 4.24247L5.51004 3.70265C5.58984 3.66979 5.6514 3.60384 5.6787 3.52196L6.22015 1.8976C6.3104 1.62685 6.69337 1.62685 6.78362 1.8976L7.32507 3.52196C7.35236 3.60384 7.41392 3.66979 7.49373 3.70265ZM17.1556 13.7254L19.2437 14.639C19.481 14.7428 19.481 15.0793 19.2437 15.1831L17.1556 16.0967C17.0802 16.1297 17.0218 16.1925 16.9945 16.2702L16.1861 18.5689C16.0931 18.8335 15.7189 18.8335 15.6258 18.5689L14.8175 16.2702C14.7902 16.1925 14.7318 16.1297 14.6564 16.0967L12.5682 15.1831C12.331 15.0793 12.331 14.7427 12.5682 14.639L14.6564 13.7254C14.7318 13.6924 14.7902 13.6295 14.8175 13.5518L15.6258 11.2531C15.7189 10.9885 16.0931 10.9885 16.1861 11.2531L16.9945 13.5518C17.0218 13.6295 17.0802 13.6924 17.1556 13.7254ZM17.8147 1.56532C17.0608 0.81148 15.8386 0.811479 15.0848 1.56532L2.06538 14.5847C1.31154 15.3385 1.31154 16.5607 2.06538 17.3146L3.18533 18.4345C3.93916 19.1884 5.16137 19.1884 5.91521 18.4345L18.9346 5.41516C19.3116 5.03824 19.5 4.54422 19.5 4.0502C19.5 3.55621 19.3116 3.06221 18.9347 2.6853L17.8147 1.56532ZM16.7647 2.61529C16.5908 2.44133 16.3087 2.44133 16.1348 2.61529L13.2999 5.45016L15.0498 7.20006L17.8847 4.36519C17.9657 4.28416 18.009 4.17969 18.0145 4.07361C18.0194 3.98041 17.9951 3.88596 17.9417 3.8051C17.9254 3.7804 17.9064 3.75698 17.8847 3.73524"
                fill="white"
              />
            </svg>
          }>
          Generate
        </Button>
        <h2 className='mt-12 pb-5 w-full font-semibold text-lg text-start '>1. Generated submission</h2>
        <Textarea
          labelPlacement="outside"
          placeholder="The text will appear here ..."
          defaultValue=""
          fullWidth={true}
          isRequired
          disableAnimation
          disableAutosize
          classNames={{
            base: "",
            input: "resize-y min-h-[250px]",
          }}
        />

        <div className='flex w-full justify-between mt-5'>
          <Button variant="ghost" color='primary' radius="full" size='lg' className='font-semibold h-16 w-40'>Copy text</Button>
          <Button radius="full" color='primary' size='lg' className='text-white font-semibold h-16 w-40' startContent={
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.2501 2.03253L7.24545 3.06747C3.35787 4.40656 1.41408 5.0761 0.96984 6.23326C0.794876 6.68901 0.75408 7.17908 0.852343 7.64475C1.10184 8.8271 2.93285 9.6378 6.59488 11.2593C6.63666 11.2778 6.67647 11.2954 6.71435 11.3123L9.81396 9.0847C10.1857 8.81755 10.3715 8.68399 10.4298 8.7417C10.488 8.79941 10.3532 8.98354 10.0836 9.3518L7.90783 12.3236C7.96469 12.4394 8.02784 12.5794 8.10772 12.7564C9.6614 16.2009 10.4383 17.9231 11.5289 18.2155C12.1041 18.3697 12.7257 18.3116 13.2807 18.052C14.3329 17.5596 14.935 15.7087 16.1392 12.0069L17.1987 8.75006C18.6631 4.24822 19.3953 1.99729 18.2075 0.849C17.0197 -0.299294 14.7632 0.47798 10.2501 2.03253Z" fill="white" />
            </svg>
          }>
            Send
          </Button>
        </div>
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
              <p className='text-[#747570]'><a href="#generateButton" className="underline">use this website</a>  to draft an email to voice your concerns and stop WSI.</p>
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
