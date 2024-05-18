import { Section } from '@/components/layouts'
import { ImageWithText } from '@/components/ui'
import { data } from '@/constants/data'

export default function Poster() {
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
