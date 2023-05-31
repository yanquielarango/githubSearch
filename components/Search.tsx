'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'


interface Props {
    getUser: (username: string) => Promise<void>
}


const Search = ({getUser}: Props) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username = e.currentTarget.username.value
        if(!username) return
        await getUser(username)
    }



    return (
        <form className="flex flex-wrap items-center gap-2 rounded-lg bg-[#1F2A48] p-2 mb-6" onSubmit={handleSubmit}>
            <MagnifyingGlassIcon  className="w-8 h-8 ml-2 text-blue-600"/>
            <input  className="flex flex-1 p-2 rounded bg-transparent placeholder:text-slate-50/30 placeholder:text-xs md:placeholder:text-xl  outline-none w-24" type="text" placeholder="Search GitHub username..." name="username"/>
            <button className="p-2 bg-blue-600 rounded-lg" type="submit">Search</button>
        </form>
    )
}

export default Search