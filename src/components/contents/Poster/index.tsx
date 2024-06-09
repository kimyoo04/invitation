import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useRef } from 'react'

import { Section } from '@/components/layouts'
import { data } from '@/constants/data'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function Poster() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: true,
          start: 'top',
          end: '+=500px',
        },
      })

      timeline
        .from('.poster-image', { clipPath: `inset(15%)` })
        .to('.poster-image', { clipPath: 0 })
    },
    { scope: container },
  )

  return (
    <Section ref={container}>
      <img
        className="poster-image object-cover"
        src={`/images/${data.wedding.images.main}.jpg`}
        alt="background image"
      />

      {/*
      <ImageWithText
        src={`/images/${data.wedding.images.main}.jpg`}
        alt="main_img"
        text={<span className="text-2xl font-bold">김 유 ♥ 고유진</span>}
      /> */}
    </Section>
  )
}
