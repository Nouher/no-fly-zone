'use client'

import React, { useEffect, useState } from 'react'
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}


const CountDownTimer = ({ countdownTimestampMs }) => {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000)
        return () => clearInterval(intervalId)
    }, [countdownTimestampMs])

    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
    }
    return (
        <div className='flex text-lg font-semibold gap-x-1'>
            <span>{remainingTime.days}d</span>
            <span>{remainingTime.hours}h</span>
            <span>{remainingTime.minutes}m</span>
            <span>{remainingTime.seconds}s</span>
        </div>
    )
}

export default CountDownTimer
