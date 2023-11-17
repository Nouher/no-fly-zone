import React from 'react'
import { AlarmIcon } from '../icons'
import CountDownTimer from './CountDownTimer/CountDownTimer'

const Banner = () => {
    return (
        <div className='flex gap-6 bg-[#1D1313] text-[#CBCBCB] h-12 px-6 py-2 '>
            <div className='flex gap-2 justify-center items-center w-1/2'>
                <AlarmIcon width={40} height={40} />
                <p className='text-sm font-medium '>Time left to voice your concern</p>
            </div>
            <div className='flex w-1/2 items-center justify-center '>
                <CountDownTimer countdownTimestampMs={1706655600000} />
            </div>
        </div>
    )
}

export default Banner
