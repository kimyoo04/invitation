import { PropsWithChildren } from 'react'

function BarItem({ children }: PropsWithChildren) {
  return (
    <div className="flex h-16 w-16 items-center justify-center bg-red-500">
      {children}
    </div>
  )
}

export default function LeftStickyBar() {
  return (
    <div className="fixed left-10 top-10 flex h-60 w-16 flex-col justify-between bg-black bg-opacity-50">
      {/* 최상단 이동 버튼 */}
      <BarItem>^</BarItem>
      {/* 방명록 앵커 버튼 */}
      <BarItem>2</BarItem>
      {/* 연락하기 */}
      <BarItem>3</BarItem>
    </div>
  )
}
