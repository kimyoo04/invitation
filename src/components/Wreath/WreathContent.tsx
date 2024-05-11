import WreathImage from './WreathImage'

export default function WreathContent() {
  return (
    <div className="flex justify-between rounded-md bg-blue-100 p-8">
      <div className="flex flex-col items-start gap-4">
        <div>
          신랑, 신부님께
          <br />
          축하의 마음을 전해보세요.
        </div>

        <button>화환 선물하기 {'>'}</button>
      </div>
      <WreathImage />
    </div>
  )
}
