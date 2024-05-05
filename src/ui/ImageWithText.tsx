import { ReactNode } from 'react'

interface Props {
  src: string
  text?: ReactNode
}

export default function ImageWithText({ src, text }: Props) {
  return (
    <div className="relative ">
      <img src={src} alt="main_img" className="w-full object-cover" />

      {text ? (
        <div className="absolute left-0 top-0 h-full w-full p-8">{text}</div>
      ) : null}
    </div>
  )
}
