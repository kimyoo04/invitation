import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

import { useCallback, useEffect, useMemo, useRef } from 'react'

// reference - https://github.com/codegenixdev/video-scrolling-tutorial/blob/main/src/App.tsx

const startIndex = 1
const endIndex = 86

export default function ScrollVideo() {
  const ref = useRef<HTMLCanvasElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'start start'],
  })

  const images = useMemo(() => {
    const loadedImages: HTMLImageElement[] = []

    for (let i = 1; i <= 86; i++) {
      const img = new Image()
      img.src = `/images/${i}.webp`
      loadedImages.push(img)
    }

    return loadedImages
  }, [])

  const render = useCallback(
    (index: number) => {
      if (images[index - 1] && ref.current) {
        ref.current?.getContext('2d')?.drawImage(images[index - 1], 0, 0)
      }
    },
    [images],
  )

  const currentIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [startIndex, endIndex],
  )

  useMotionValueEvent(currentIndex, 'change', (latest) => {
    render(Number(latest.toFixed()))
  })

  useEffect(() => {
    render(1)
  }, [render])

  return (
    <div
      style={{
        height: '200vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <div style={{ height: '1000px' }} />
      <canvas ref={ref} width={1000} height={1000} />
    </div>
  )
}
