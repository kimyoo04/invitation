import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

import { useCallback, useLayoutEffect, useMemo, useRef } from 'react'

// reference - https://github.com/codegenixdev/video-scrolling-tutorial/blob/main/src/App.tsx

//! 이미지 개수 조절
const startIndex = 1
const endIndex = 86

//! spacer - 이미지들이 등장하기 전에 스크롤 높이 조절
const startHeight = '100vh'

export default function ScrollImageSlide() {
  const ref = useRef<HTMLCanvasElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'start start'],
  })

  const imageArr = useMemo(() => {
    const loadedImages: HTMLImageElement[] = []

    for (let i = 1; i <= 86; i++) {
      const img = new Image()
      img.src = `/images/ScrollImageSlide/${i}.webp`
      loadedImages.push(img)
    }

    return loadedImages
  }, [])

  const render = useCallback(
    (index: number) => {
      if (imageArr[index - 1] && ref.current) {
        ref.current?.getContext('2d')?.drawImage(imageArr[index - 1], 0, 0)
      }
    },
    [imageArr],
  )

  const currentIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [startIndex, endIndex],
  )

  useMotionValueEvent(currentIndex, 'change', (latest) => {
    render(Number(latest.toFixed()))
  })

  useLayoutEffect(() => {
    render(1)
  }, [render])

  return (
    <div className="flex items-end justify-center">
      {/* spacer - 이미지들이 등장하기 전에 스크롤 높이 조절용 태그 */}
      <div className={`h-[${startHeight}]`} />

      <canvas ref={ref} width={'100%'} height={'100%'} />
    </div>
  )
}
