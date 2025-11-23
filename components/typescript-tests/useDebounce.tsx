import { useState, useEffect } from 'react'

export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timerID)
  }, [value, delay])
  return debouncedValue
}
