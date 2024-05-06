import { data } from '@/constants/data'
import { Section } from '@/layouts'
import { ImageWithText } from '@/ui'

export default function Heading() {
  return (
    <Section>
      <ImageWithText
        src={`/images/${data.wedding.images.main}.jpg`}
        alt="main_img"
        text={<span className="text-2xl font-bold">김 유 ♥ 고유진</span>}
      />
    </Section>
  )
}
