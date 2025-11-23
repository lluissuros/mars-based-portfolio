'use client'

import { Input } from '../ui/input'
import { mockUsers } from './mockUsers'
import { User } from './types'
import { useEffect, useState } from 'react'
import useFilterCollectionByName from './useFilterCollectionByName'

enum LoadingState {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

const UserBox = ({ user }: { user: User }) => {
  return (
    <div className='mb-4 grid grid-cols-4 gap-4'>
      <div className='rounded-lg bg-indigo-300 p-4 text-center dark:bg-indigo-800 dark:text-indigo-400'>
        {user.name}
      </div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>{user.website}</div>
    </div>
  )
}

export default function TypescriptTests() {
  // PLAN : lets write a search input, a list and a hook with
  const [loadingState, setLoadingState] = useState<LoadingState | null>(null)
  const [query, setQuery] = useState<string>('')

  //hook will be to filter by name
  const { filteredCollection: filteredUsers, setOriginalCollection } =
    useFilterCollectionByName<User>(query)

  useEffect(() => {
    console.log('useEffect HELO0')
    setLoadingState(LoadingState.LOADING)
    //TODO : this would be a fetch
    setTimeout(() => {
      setOriginalCollection(mockUsers)
      setLoadingState(LoadingState.SUCCESS)
    }, 1000)
  }, [setOriginalCollection])

  return (
    <section>
      <h3>I really want to test some Tyspescript here</h3>

      {loadingState === LoadingState.LOADING && <div>Loading...</div>}

      {loadingState === LoadingState.SUCCESS && filteredUsers && (
        <>
          <Input
            className='w-1/4'
            type='text'
            placeholder='Search by name'
            onChange={e => setQuery(e.target.value)}
          />
          <div className='mt-4'>
            {filteredUsers.map(user => (
              <UserBox key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
