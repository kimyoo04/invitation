import { PropsWithChildren } from 'react'

import { data } from '@/constants/data'
import Center from '@/ui/Center'

export default function Heading({ children }: PropsWithChildren) {
  return (
    <div className="relative ">
      <img
        src={`/public/images/${data.wedding.images.main}.jpg`}
        alt="main_img"
        className="w-full object-cover"
      />

      <div className="absolute left-0 top-0 h-full w-full p-8">
        <Center.Column>{children}</Center.Column>
      </div>
    </div>
  )
}
