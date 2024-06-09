import { AnimatePresence, motion } from 'framer-motion'

import { useLayoutEffect, useState } from 'react'

import { Progress } from '@/shadcn/ui/progress'

//! progress bar 증가 타이밍 조절
const intervalTime = 60 // ms

//! progress bar 증가량 조절
const increaseValue = 1

export default function LoadingOverlay() {
  const [progress, setProgress] = useState<number>(0)
  const [isComplete, setIsComplete] = useState<boolean>(false)

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

  if (progress >= 100 && isComplete) {
    return null
  }

  const getMessage = (progress: number) => {
    if (progress < 20) return '환영합니다.'
    if (progress < 60) return '유와 유진의 결혼식에 초대합니다.'
    return '기다려 주셔서 감사합니다. 곧 시작합니다!'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: progress >= 100 ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => {
          if (progress >= 100) {
            setIsComplete(true)
          }
        }}
        className="fixed inset-0 flex flex-col items-center justify-center bg-primary-foreground "
      >
        <div className="mb-4 text-lg">{getMessage(progress)}</div>

        <Progress value={progress} className="w-[60%]" />
      </motion.div>
    </AnimatePresence>
  )
}
