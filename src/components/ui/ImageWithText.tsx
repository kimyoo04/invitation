import { ReactNode } from 'react'

interface Props {
  src: string
  alt: string
  text?: ReactNode
}

export function ImageWithText({ src, alt, text }: Props) {
  return (
    <div className="relative ">
      <img src={src} alt={alt} className="w-full rounded-md object-cover" />

      {text ? (
        <div className="absolute left-0 top-0 h-full w-full p-8">{text}</div>
      ) : null}
    </div>
  )
}
