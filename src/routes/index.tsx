import Calendar from "@/components/contents/Calendar";
import ContactAndAccount from "@/components/contents/ContactAndAccount";
import FullScreenMsg from "@/components/contents/FullScreenMsg";
import Gallery from "@/components/contents/Gallery";
import GuestBook from "@/components/contents/GuestBook";
import Heading from "@/components/contents/Heading";
import TimeCounter from "@/components/contents/TimeCounter";
import TimeLaps from "@/components/contents/TimeLaps";
import WayToCome from "@/components/contents/WayToCome";
import WeddingInfo from "@/components/contents/WeddingInfo";
import Wreath from "@/components/contents/Wreath";
import ErrorBoundary from "@/error/errorBoundary";
import StickyBar from "@/layouts/StickyBar";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute("/").createRoute({
  component: Home,
  beforeLoad: () => {
    console.log("beforeLoad");
  },
  errorComponent: ({ error }) => {
    return <ErrorBoundary error={error} />;
  },
});

function Home() {
  return (
    <>
      {/* 콘텐츠 */}
      <TimeLaps />
      <Heading />
      <FullScreenMsg />
      <WeddingInfo />
      <Calendar />
      <TimeCounter />
      <Gallery />
      <Wreath />
      <ContactAndAccount />
      <GuestBook />
      <WayToCome />

      {/* 고정 레이아웃 */}
      <StickyBar />
    </>
  );
}
