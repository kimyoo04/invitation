import { useEffect, useState } from 'react'

import { pad } from '@/utils'

const calculateTimeRemaining = (targetDate: Date) => {
  const now = new Date()
  const differenceInTime = targetDate.getTime() - now.getTime()

  const days = String(Math.floor(differenceInTime / (1000 * 3600 * 24)))

  const hours = Math.floor(
    (differenceInTime % (1000 * 3600 * 24)) / (1000 * 3600),
  )
  const padHours = pad(hours, 2)

  const minutes = Math.floor((differenceInTime % (1000 * 3600)) / (1000 * 60))
  const padMinutes = pad(minutes, 2)

  const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000)
  const padSeconds = pad(seconds, 2)

  return {
    days,
    hours: padHours,
    minutes: padMinutes,
    seconds: padSeconds,
  }
}

export default function useCalculateTimeRemaining(targetDate: Date) {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(targetDate),
  )

  useEffect(() => {
    const updateCounter = () => {
      setTimeRemaining(calculateTimeRemaining(targetDate))
    }

    const intervalId = setInterval(updateCounter, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return timeRemaining
}
