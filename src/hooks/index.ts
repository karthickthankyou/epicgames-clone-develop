/* eslint-disable import/prefer-default-export */
import { useEffect, useReducer, useState } from 'react'
import { LoadSuccessErrorType } from '../types'

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

export const useLoadSuccessError = () => {
  const initialState = {
    loading: false,
    success: false,
    error: false,
  }

  function reducer(state: typeof initialState, action: LoadSuccessErrorType) {
    switch (action) {
      case 'load':
        return { loading: true, error: false, success: false }
      case 'success':
        return { loading: false, error: false, success: true }
      case 'failed':
        return { loading: false, error: true, success: false }
      default:
        throw new Error('Invalid action.')
    }
  }

  return useReducer(reducer, initialState)
}
