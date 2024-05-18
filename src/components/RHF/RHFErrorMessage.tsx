import { FieldError } from 'react-hook-form'

interface Props {
  error: FieldError | undefined
}

export default function RHFErrorMessage({ error }: Props) {
  // 레이아웃 시프트 방지
  if (!error || !error.message) return <div className="h-4"></div>

  return <span className="text-xs text-red-500">{error.message}</span>
}
