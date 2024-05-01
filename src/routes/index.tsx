import Calendar from '@/components/Calendar'
import ContactAndAccount from '@/components/contents/ContactAndAccount'
import FullScreenMsg from '@/components/contents/FullScreenMsg'
import Gallery from '@/components/contents/Gallery'
import GuestBook from '@/components/contents/GuestBook'
import Heading from '@/components/contents/Heading'
import TimeLaps from '@/components/contents/TimeLaps'
import WayToCome from '@/components/contents/WayToCome'
import WeddingInfo from '@/components/contents/WeddingInfo'
import Wreath from '@/components/contents/Wreath'
import DDayCountDown from '@/components/DDayCountDown'
import ErrorBoundary from '@/error/errorBoundary'
import StickyBar from '@/layouts/StickyBar'
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
      <TimeLaps />
      <Heading />
      <FullScreenMsg />
      <WeddingInfo />
      <Calendar />
      <DDayCountDown />
      <Gallery />
      <Wreath />
      <ContactAndAccount />
      <GuestBook />
      <WayToCome />

      {/* 고정 레이아웃 */}
      <StickyBar />
    </>
  )
}
