'use client'

import { useState, useEffect } from 'react'

type ReturnHook<T> = {
  originalCollection: T[] | undefined
  filteredCollection: T[] | undefined
  setOriginalCollection: (collection: T[] | undefined) => void
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timerID)
  }, [value, delay])
  return debouncedValue
}

export default function useFilterCollectionByName<T extends { name: string }>(
  query: string
  // originalCollectionWithNames: T[] | undefineds
): ReturnHook<T> {
  const [originalCollection, setOriginalCollection] = useState<T[] | undefined>(
    undefined
  )
  const [filteredCollection, setFilteredCollection] = useState<T[] | undefined>(
    undefined
  )

  const debouncedQuery = useDebounce(query, 300) // 300ms example

  useEffect(() => {
    //TODO: useDebounce?
    //TODO: useRef for cache previous results/
    console.log('useEffect query', debouncedQuery)

    const newFilteredCollection = originalCollection?.filter(item =>
      item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    )
    setFilteredCollection(newFilteredCollection)
  }, [debouncedQuery, originalCollection])

  return { originalCollection, filteredCollection, setOriginalCollection }
}
