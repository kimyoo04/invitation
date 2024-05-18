import Calendar from '@/components/contents/Calendar'
import Contact from '@/components/contents/Contact'
import DDayCountDown from '@/components/contents/DDayCountDown'
import Footer from '@/components/contents/Footer'
import Gallery from '@/components/contents/Gallery'
import GuestBook from '@/components/contents/GuestBook'
import Introduce from '@/components/contents/Introduce'
import Poem from '@/components/contents/Poem'
import Poster from '@/components/contents/Poster'
import ScrollAnimation from '@/components/contents/ScrollAnimation'
import ScrollVideo from '@/components/contents/ScrollVideo'
import Thanks from '@/components/contents/Thanks'
import TwoPortraits from '@/components/contents/TwoPortraits'
import WayToCome from '@/components/contents/WayToCome'
import Wreath from '@/components/contents/Wreath'
import ErrorBoundary from '@/components/error/errorBoundary'
import StickyBar from '@/components/layouts/StickyBar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
  beforeLoad: () => {
    console.log('beforeLoad')
  },
  errorComponent: ({ error }) => {
    return <ErrorBoundary error={error} />
  },
})

function Home() {
  return (
    <>
      {/* 콘텐츠 */}
      <ScrollVideo />
      <Poster />
      <Poem />
      <Introduce />
      <ScrollAnimation />
      <TwoPortraits />
      <Calendar />
      <DDayCountDown />
      <Gallery />
      <Contact />
      <WayToCome />
      <Wreath />
      <GuestBook />
      <Thanks />
      <Footer />

      {/* 고정 레이아웃 */}
      {/* <StickyBar /> */}
    </>
  )
}

{
  /*
  Poster - 메인 화면
  Poem - 시 문구
  Introduce - 결혼식 초대 문구
  ScrollAnimation - 스크롤 이벤트에 따른 애니메이션
  TwoPortraits - 신랑신부 독사진
  Calendar - 달력
  DDayCountDown - 디데이 남은 시간
  Gallery - 스튜디오 이미지들
  Contact - 연락처
  WayToCome - 오시는 길
  Wreath - 화환
  Account - 계좌번호, 카카오페이
  GuestBook - 방명록
  Thanks - 감사합니다 마무리
  Footer - 풋터
  */
}
