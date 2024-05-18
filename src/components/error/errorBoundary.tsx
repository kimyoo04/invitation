import { ErrorComponent, ErrorComponentProps } from '@tanstack/react-router'

import { MyCustomError } from './errorClass'

export default function ErrorBoundary({
  error,
}: {
  error: ErrorComponentProps['error']
}) {
  if (error instanceof MyCustomError) {
    return <div>{error.message}</div>
  }

  if (error instanceof Error) {
    return <div>에러가 발생했어요. 새로고침을 해주세요.</div>
  }

  // 기본 에러 페이지
  return <ErrorComponent error={error} />
}
