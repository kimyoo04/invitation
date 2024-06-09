import { Center, Section } from '@/components/layouts'
import { ImageComponent } from '@/components/ui'
import { data } from '@/constants/data'

export default function Poem() {
  return (
    <Section>
      <Center.Column>
        <div>꽃이 피었다고 너에게 쓰고</div>
        <div>꽃이 졌다고 너에게 쓴다.</div>
        <br />
        <div>너에게 쓴 마음이</div>
        <div>벌써 길이 되었다.</div>
        <br />
        <div>너에게 쓴 마음이</div>
        <div>벌써 내 일생이 되었다.</div>
        <br />
        <div>{'천양희 <너에게 쓴다>'}</div>
      </Center.Column>

      <ImageComponent
        src={`/images/${data.wedding.images.sub}.jpg`}
        alt={'sub_img'}
      />
    </Section>
  )
}
