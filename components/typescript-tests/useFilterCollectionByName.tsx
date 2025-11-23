'use client'

import { useState, useEffect } from 'react'

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

  useEffect(() => {
    //TODO: useDebounce?
    //TODO: useRef for cache previous results/
    console.log('useEffect query', query)

    const newFilteredCollection = originalCollection?.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredCollection(newFilteredCollection)
  }, [query, originalCollection])

  return { originalCollection, filteredCollection, setOriginalCollection }
}
