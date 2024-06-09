import { useEffect } from 'react'

export default function useDisableScroll(disable: boolean) {
  useEffect(() => {
    if (disable) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [disable])
}
