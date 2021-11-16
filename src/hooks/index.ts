import {
  ReactElement,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

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

export const useDocumentTitle = (title: string | ReactElement) => {
  useEffect(() => {
    document.title = title.toString()
    return () => {
      document.title = 'Epic clone'
    }
  }, [title])
}

export const useForgetAfterSometime = (): [
  string,
  Dispatch<SetStateAction<string>>
] => {
  const [selected, setSelected] = useState('')
  console.log('Running use Effect', selected, 'outside useEffect')

  useEffect(() => {
    const timerId = setTimeout(() => setSelected(''), 3000)
    console.log('Running use Effect', selected)

    return () => {
      clearTimeout(timerId)
    }
  }, [selected])
  return [selected, setSelected]
}
