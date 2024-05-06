import clsx from 'clsx'

import { data } from '@/constants/data'
import { Center } from '@/layouts'

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']
const months = Array.from({ length: 13 }, (_, i) => i) // 0 ~ 12

const getDaysInMonth = ({
  year,
  month,
}: {
  year: number
  month: number
}): { date: number; day: string }[] => {
  const days: { date: number; day: string }[] = []

  const daysInMonth = new Date(year, month, 0).getDate()

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, months[month - (1 % 12)], i)
    days.push({ date: i, day: daysOfWeek[date.getDay()] })
  }

  return days
}

export default function CalendarContent() {
  const [year, month, dDay] = data.wedding.date.split('-').map(Number)

  const days = getDaysInMonth({ year, month })
  const startDay = daysOfWeek.indexOf(days[0].day)
  const emptyDays = Array.from({ length: startDay }, (_, i) => i)

  const highlightSunday = (day: string) => {
    return day === '일' ? 'text-red-500' : ''
  }

  const highlightDDay = (day: number) => {
    return day === dDay ? 'bg-orange-300 rounded-full text-white font-bold' : ''
  }

  return (
    <div>
      <h2 className="mb-4 text-center text-xl">{month} 월</h2>

      <div className="grid w-full grid-cols-7 gap-2">
        {daysOfWeek.map((day, indx) => (
          <Center.Row
            key={indx}
            className={clsx(['font-bold', highlightSunday(day)])}
          >
            {day}
          </Center.Row>
        ))}

        {emptyDays.map((_, indx) => {
          return (
            <div key={indx}>
              <span className="block"></span>
            </div>
          )
        })}

        {days.map((day, indx) => {
          return (
            <div
              key={indx + day.day}
              className={clsx([
                'p-2 text-sm sm:text-lg',
                highlightSunday(day.day),
              ])}
            >
              <Center.Row
                className={clsx([
                  'flex h-6 w-6 sm:h-7 sm:w-7',
                  highlightDDay(day.date),
                ])}
              >
                <span>{day.date}</span>
              </Center.Row>
            </div>
          )
        })}
      </div>
    </div>
  )
}
