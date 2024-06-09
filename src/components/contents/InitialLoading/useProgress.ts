import { useLayoutEffect, useState } from 'react'

//! progress bar 증가 타이밍 조절
const intervalTime = 60 // ms

//! progress bar 증가량 조절
const increaseValue = 1

export default function useProgress() {
  const [progress, setProgress] = useState<number>(0)

  useLayoutEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + increaseValue
      })
    }, intervalTime)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return { progress }
}
