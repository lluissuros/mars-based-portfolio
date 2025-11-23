'use client'

import { useState, useEffect } from 'react'
import useDebounce from './useDebounce'

type ReturnHook<T> = {
  originalCollection: T[] | undefined
  filteredCollection: T[] | undefined
  setOriginalCollection: (collection: T[] | undefined) => void
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

  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    //TODO: useRef for cache previous results/
    console.log('useEffect query', debouncedQuery)

    const newFilteredCollection = originalCollection?.filter(item =>
      item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    )
    setFilteredCollection(newFilteredCollection)
  }, [debouncedQuery, originalCollection])

  return { originalCollection, filteredCollection, setOriginalCollection }
}
