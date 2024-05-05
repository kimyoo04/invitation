import Section from '@/layouts/Section'
import Center from '@/ui/Center'

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

      {/* // TODO - sub image 넣기 */}
    </Section>
  )
}
