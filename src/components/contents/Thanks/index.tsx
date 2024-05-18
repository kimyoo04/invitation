import { Center, Section } from '@/components/layouts'
import { ImageWithText } from '@/components/ui'
import { data } from '@/constants/data'

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
