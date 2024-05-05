import { data } from '@/constants/data'
import Section from '@/layouts/Section'
import Center from '@/ui/Center'
import ImageWithText from '@/ui/ImageWithText'

export default function ThanksGreeting() {
  return (
    <Section>
      <ImageWithText
        // TODO - 이미지 교체하기
        src={`/images/${data.wedding.images.main}.jpg`}
        text={
          <Center.Column className="h-full">
            <span className="">감사합니다</span>
          </Center.Column>
        }
      />
    </Section>
  )
}
