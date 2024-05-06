import Calendar from '@/components/Calendar'
import ContactAndAccount from '@/components/ContactAndAccount'
import GuestBook from '@/components/contents/GuestBook'
import DDayCountDown from '@/components/DDayCountDown'
import Footer from '@/components/Footer'
import FunnyScrollEvent from '@/components/FunnyScrollEvent'
import Gallery from '@/components/Gallery'
import Heading from '@/components/Heading'
import Introduce from '@/components/Introduce'
import Poem from '@/components/Poem'
import Thanks from '@/components/Thanks'
import WayToCome from '@/components/WayToCome'
import Wreath from '@/components/Wreath'
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
      <Heading />
      <Poem />
      <Introduce />
      <FunnyScrollEvent />
      <Calendar />
      <DDayCountDown />
      <Gallery />
      <Wreath />
      <ContactAndAccount />
      <GuestBook />
      <WayToCome />
      <Thanks />
      <Footer />

      {/* 고정 레이아웃 */}
      <StickyBar />
    </>
  )
}
