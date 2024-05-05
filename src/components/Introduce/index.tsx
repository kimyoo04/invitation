import Section from '@/layouts/Section'
import BoldText from '@/ui/BoldText'
import Center from '@/ui/Center'

export default function Introduce() {
  return (
    <Section>
      <Center.Column>
        <div>저희 두 사람이</div>
        <div>평생을 함께하기 위해</div>
        <div>서로의 반려자가 되려 합니다.</div>
        <br />
        <div>그 진실한 서약을 하는 자리에</div>
        <div>소중한 분들을 모십니다.</div>
        <br />
        <div>자리하시어 축복해 주시면</div>
        <div>대단히 감사하겠습니다.</div>
      </Center.Column>
      <br />
      <Center.Column>
        <div>
          <BoldText>김종관</BoldText>
          {' - '}
          <BoldText> 배미영</BoldText>의 아들 <BoldText>김유</BoldText>
        </div>
        <div>
          <BoldText>고현범</BoldText>
          {' - '}
          <BoldText>배태주</BoldText>의 딸 <BoldText>고유진</BoldText>
        </div>
      </Center.Column>
    </Section>
  )
}
