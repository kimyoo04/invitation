import clsx from 'clsx'

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
  const year = 2025
  const month = 11
  const dDay = 25

  const days = getDaysInMonth({ year, month })
  const startDay = daysOfWeek.indexOf(days[0].day)
  const emptyDays = Array.from({ length: startDay }, (_, i) => i)

  const highlightSunday = (day: string) => {
    return day === '일' ? 'text-red-500' : ''
  }

  const HighlightDDay = (day: number) => {
    return day === dDay ? 'bg-orange-300 rounded-full text-white font-bold' : ''
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-center text-xl">{month} 월</h2>

      <div className="grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day, indx) => (
          <div key={indx} className={clsx(['font-bold', highlightSunday(day)])}>
            {day}
          </div>
        ))}

        {emptyDays.map((_, indx) => {
          return (
            <div key={indx} className="p-2">
              <span className="block"></span>
            </div>
          )
        })}

        {days.map((day, indx) => {
          return (
            <div
              key={indx + day.day}
              className={clsx([
                'flex h-10 w-10 items-center justify-center',
                highlightSunday(day.day),
                HighlightDDay(day.date),
              ])}
            >
              <span>{day.date}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
