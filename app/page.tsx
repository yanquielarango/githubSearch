'use client'

import Search from '@/components/Search'
import UserCardInfo from '@/components/UserCardInfo'
import { useState } from 'react'





export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`)
    if(!res.ok) {
      setUser(null)
      setError("User not found 😒")
      return
    }
    setUser(await res.json())
    setError(null)

  }

  return (
    <main>
      <Search  getUser={getUser}/>
      
      {user && <UserCardInfo user={user} />}
      {error && (
        <div className="rounded-lg bg-red-500 text-white p-4 ">{error}</div>
      )}
    
    </main>
  )
}
