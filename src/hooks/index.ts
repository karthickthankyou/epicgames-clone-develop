/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react'

export function useCarouselTimer({
  duration,
  itemsLength,
}: {
  duration: number
  itemsLength: number
}): [number, Function] {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const timer = setTimeout(
      () => setCurrentIndex((s) => (s >= itemsLength - 1 ? 0 : s + 1)),
      duration
    )
    return () => clearTimeout(timer)
  }, [currentIndex])
  return [currentIndex, setCurrentIndex]
}
