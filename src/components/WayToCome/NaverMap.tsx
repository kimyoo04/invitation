import { useEffect, useRef } from 'react'

import { data } from '@/constants/data'

export default function NaverMap() {
  const mapElement = useRef(null)

  const { lat, lng } = data.wedding.location

  useEffect(() => {
    const { naver } = window
    if (!mapElement.current || !naver) return
    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(lat, lng)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    }
    const map = new naver.maps.Map(mapElement.current, mapOptions)
    new naver.maps.Marker({
      position: location,
      map,
    })
  }, [])

  return (
    <div className="border-1 h-80 w-full overflow-hidden rounded-md">
      <div ref={mapElement} className="h-80 w-full " />
    </div>
  )
}
