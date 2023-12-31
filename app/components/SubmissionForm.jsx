'use client'
import { Button, Checkbox, Radio, RadioGroup, CircularProgress, Input, Textarea } from '@nextui-org/react'
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { EditIcon } from '../icons';

const SubmissionForm = () => {

    const linkRef = useRef(null)
    const textareaRef = useRef(null)

    const scrollToTopSection = () => {
        linkRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    const [suburb, setSuburb] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [organisation, SetOrganisation] = useState('');
    const [submissionForm, setSubmissionForm] = useState({
        suburb: '',
        name: '',
        email: '',
        phone: '',
        organisation: '',
        content: '',
        prompt: []
    })
    //fill Prompt 
    const [prompt, setPrompt] = useState(['']);
    const [isSelected1, setIsSelected1] = useState(true)
    const [isSelected2, setIsSelected2] = useState(false)
    const [isSelected3, setIsSelected3] = useState(true)
    const [isSelected4, setIsSelected4] = useState(true)
    const [isSelected5, setIsSelected5] = useState(false)
    const [isSelected6, setIsSelected6] = useState(false)
    const [isSelected7, setIsSelected7] = useState(false)
    const [isSelected8, setIsSelected8] = useState(false)

    const CheckBoxList = [
        { id: 1, isSelected: isSelected1, prompt: "I am concerned about the noise from planes flying over my suburb. Reference studies from around the world of poor health due to closeness of airplane traffic", },
        { id: 2, isSelected: isSelected2, prompt: "I am concerned my health will deteriorate, due to planes flying over head with their cancer inducing noxious gases, and my hearing will be affected", },
        { id: 3, isSelected: isSelected3, prompt: "I am concerned my health will deteriorate, due to planes flying over head with their cancer inducing noxious gases, and my hearing will be affected", },
        { id: 4, isSelected: isSelected4, prompt: "I am concerned about the native environment in my suburb, particularly native species that are only found in the area like the grey headed flying foxes in Turrella Reserve and Wolli Creek", },
        { id: 5, isSelected: isSelected5, prompt: "We already get our fair share of airplane traffic throughout the day and evening. It’s unfair to tunnel all of the sydney airport traffic through my suburb. There should be an equitable sharing of the flight paths - as a tax payer, I am not happy.", },
        { id: 6, isSelected: isSelected6, prompt: "I am concerned about the proposed changes because it will greatly affect my property value in the area. I purchased in this area as it had unique aspects I couldn’t find in Sydney, like the beautiful native bush and surround. Reference other studies from around the world of property values decreasing when new airports are built around them", },
        { id: 7, isSelected: isSelected7, prompt: "We already get more than our fair share of noise from the M5 motorway day and night, with cars, and bikes making lots of noise. There’s also heavy trucking from the north and south, and from  from Port Botany at all hours of the day. It never stops. We’ve had enough", },
        { id: 8, isSelected: isSelected8, prompt: "We have planes that fly overhead already, day and night, that are harming the fragile native wildlife and flora", },
    ]

    const fillPrompt = () => {
        setPrompt([])
        CheckBoxList.map((item) => {
            item.isSelected && prompt.push(item.prompt)
        })

    }

    const [pending, setPending] = useState(false);

    const [anonymous, setAnonymous] = useState(true);


    function handleInput(key, value) {
        setSubmissionForm({
            ...submissionForm,
            [key]: value
        })
    }

    function generate(e) {
        e.preventDefault();
        setPending(true)
        scrollToTopSection();
        fillPrompt();
        console.log(prompt)
        axios.post('/api/generate', {
            ...submissionForm,
            suburb,
            name,
            email,
            phone,
            organisation,
            prompt
        })
            .then(res => {
                setPending(false)
                handleInput('content', res.data.message.content)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const copyToClipboard = () => {
        textareaRef.current.select();
        document.execCommand('copy');
    }

    return (
        <form className='py-16 px-5 flex flex-col items-center ' ref={linkRef}>
            <h1 className='flex gap-2 items-center font-bold text-2xl'>
                <EditIcon />
                <span className='text-[#535E32] lg:text-4xl lg:py-4'>Your submission</span>
            </h1>
            <p className='text-[#747570] py-12 text-md text-center italic'>
                We utilise ChatGPT to generate your submission. Use as is, or as a starting point
            </p>

            <Button
                onClick={(e) => generate(e)}
                type='submit'
                radius="full"
                size='lg'
                className='bg-[#8EA34E] text-white font-semibold  w-3/4 h-14 mt-5'
                startContent={

                    pending ?
                        <CircularProgress size='sm' aria-label="Loading..." />
                        :
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
            <h2 className='mt-12 pb-5 w-full font-semibold text-lg text-start lg:text-2xl ' >1. Generated submission</h2>
            <Textarea
                isRequired
                ref={textareaRef}
                value={submissionForm.content}
                onInput={(e) => handleInput('title', (e.target.value))}
                labelPlacement="outside"
                placeholder="The text will appear here ..."
                defaultValue=""
                fullWidth={true}
                disableAnimation
                disableAutosize
                classNames={{
                    base: "",
                    input: "resize-y min-h-[250px] text-md",
                }}
            />


            <div className='flex w-full justify-between mt-5'>
                <Button variant="ghost" color='primary' radius="full" size='lg' className='font-semibold h-14 w-5/12' onPress={copyToClipboard}>Copy text</Button>
                <Button variant="bordered" radius="full" color='primary' size='lg' className='font-semibold h-14 w-5/12' startContent={
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.2498 3.03253L7.24521 4.06747C3.35763 5.40656 1.41384 6.0761 0.969596 7.23326C0.794632 7.68901 0.753836 8.17908 0.852099 8.64475C1.1016 9.8271 2.93261 10.6378 6.59464 12.2593C6.63642 12.2778 6.67623 12.2954 6.71411 12.3123L9.81372 10.0847C10.1854 9.81755 10.3712 9.68399 10.4295 9.7417C10.4877 9.79941 10.3529 9.98354 10.0833 10.3518L7.90759 13.3236C7.96445 13.4394 8.0276 13.5794 8.10748 13.7564C9.66116 17.2009 10.438 18.9231 11.5286 19.2155C12.1038 19.3697 12.7254 19.3116 13.2804 19.052C14.3326 18.5596 14.9347 16.7087 16.1389 13.0069L17.1984 9.75006C18.6628 5.24822 19.395 2.99729 18.2072 1.849C17.0194 0.700706 14.7629 1.47798 10.2498 3.03253Z" fill="#8EA34E" />
                    </svg>
                }>
                    <a href={`mailto:eis.submissions@infrastructure.gov.au?subject=Concerns over the proposed Western Sydney Flight Path Environmental Study&body=${submissionForm.content}`}>Send</a>
                </Button>
            </div>


            <div className="mt-12">
                <h2 className='w-full font-semibold text-md text-start lg:text-2xl'>2. Adjust submission concerns <span className="text-[#AFAFAF]">(optional)</span></h2>
                <p className='mt-7 text-sm lg:text-medium '>What do you care about? Why are you completing this submission? These factors will be used to change the generated response. </p>
                <div className="mt-7 flex flex-col gap-y-3">
                    <label className='text-sm lg:text-medium ' htmlFor='suburb_or_postcode'>
                        Your suburb or postcode
                    </label>
                    <Input
                        placeholder="Input suburb or postcode"
                        labelPlacement="outside"
                        name='suburb'
                        value={suburb}
                        onInput={(e) => setSuburb(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-3 items-start w-full mt-7'>
                    <Checkbox radius="full" isSelected={isSelected1} onValueChange={setIsSelected1}>Noise from planes</Checkbox>
                    <Checkbox radius="full" isSelected={isSelected2} onValueChange={setIsSelected2}>My health</Checkbox>
                    <Checkbox radius="full" isSelected={isSelected3} onValueChange={setIsSelected3}>The environment</Checkbox>
                    <Checkbox radius="full" isSelected={isSelected4} onValueChange={setIsSelected4}>Native wildlife</Checkbox>
                    <Checkbox radius="full" isSelected={isSelected5} onValueChange={setIsSelected5}>Sharing flight paths across Sydney</Checkbox>
                    <Checkbox radius="full" isSelected={isSelected6} onValueChange={setIsSelected6}>Property values decreasing</Checkbox>
                    <Checkbox radius="full" isSelected={isSelected7} onValueChange={setIsSelected7}>Already get enough noise from M5</Checkbox>
                    <Checkbox radius="full" isSelected={isSelected8} onValueChange={setIsSelected8}>Already get enough noise from planes</Checkbox>
                </div>
            </div>
            <div>
                <h3 className='w-full mt-12 font-semibold text-lg text-start lg:text-2xl'>3. Add your details <span className="text-[#AFAFAF]">(optional)</span></h3>
                <p className=' text-sm lg:text-medium mt-7'>This site does not store any of your data. It uses the information below to populate an email you send from your email account. </p>
                <div className='mt-7 flex flex-col gap-1'>
                    <h3 className='text-sm lg:text-medium'>Remain anonymous</h3>
                    <RadioGroup
                        value={anonymous}
                        onValueChange={setAnonymous}
                    >
                        <Radio value={true} >Yes</Radio>
                        <Radio value={false} >No</Radio>
                    </RadioGroup>
                    {anonymous}
                </div>
                <div className='mt-6 flex flex-col gap-4'>
                    <Input isDisabled={anonymous} type='text' label='Name' placeholder='Input Name' labelPlacement="outside" name='name'
                        value={name}
                        onInput={(e) => setName(e.target.value)} />

                    <Input isDisabled={anonymous} type='email' label='Email' placeholder='Input Email' labelPlacement="outside" name='email'
                        value={email}
                        onInput={(e) => setEmail(e.target.value)} />

                    <Input isDisabled={anonymous} type='phone' label='Phone' placeholder='Input Phone' labelPlacement="outside" name='phone'
                        value={phone}
                        onInput={(e) => setPhone(e.target.value)} />

                    <Input isDisabled={anonymous} type='text' label='Organisation' placeholder='Input Organisation' labelPlacement="outside" name='organisation'
                        value={organisation}
                        onInput={(e) => SetOrganisation(e.target.value)} />
                </div>

                <div className='flex justify-center'>
                    <Button
                        onClick={(e) => generate(e)}
                        type='submit'
                        radius="full"
                        size='lg'
                        className='bg-[#8EA34E] text-white font-semibold w-3/4 h-14 mt-5'
                        startContent={

                            pending ?
                                <CircularProgress size='sm' aria-label="Loading..." />
                                :
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
                </div>
            </div>
        </form >

    )
}

export default SubmissionForm
