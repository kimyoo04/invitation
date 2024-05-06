import { data } from '@/constants/data'
import { Center, Section } from '@/layouts'
import { ImageWithText } from '@/ui'

export default function Thanks() {
  return (
    <Section>
      <ImageWithText
        src={`/images/thanks/${data.wedding.images.thanks}.jpg`}
        alt="thanks_img"
        text={
          <Center.Column className="h-full">
            <span className="text-2xl text-white">감사합니다</span>
          </Center.Column>
        }
      />
    </Section>
  )
}
