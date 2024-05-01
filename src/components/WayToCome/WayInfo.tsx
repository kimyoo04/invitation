import { data } from '@/constants/data'

export default function WayInfo() {
  const { name, address, link, wayToCome } = data.wedding.location

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="text-2xl">오시는 길</h2>

      <div>
        <div className="text-sm">{name}</div>
        <div className="text-sm">{address}</div>
        <div className="text-sm">
          <a href={link.url}>{link.name}</a>
        </div>
      </div>

      <div className="text-sm">지하철: {wayToCome.metro}</div>

      <div className="text-sm">
        버스:
        {wayToCome.bus.map((bus) => {
          return <div key={bus}>{bus}</div>
        })}
      </div>
    </div>
  )
}
