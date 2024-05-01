interface PictureAreaProps {
  path: string
  alt: string
}

export default function PictureArea({ path, alt }: PictureAreaProps) {
  return (
    <div className="rounded-md bg-gray-100">
      {/* // TODO - hover 효과, 클릭시 확대 오버레이 및 핀치 줌 */}
      <img src={path} alt={alt} className="h-96 w-64 rounded-md object-cover" />
    </div>
  )
}
