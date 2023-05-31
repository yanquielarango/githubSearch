import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = () => {
    return (
        <div className="flex flex-wrap items-center gap-2 rounded-lg bg-[#1F2A48] p-2 mb-6">
            <MagnifyingGlassIcon  className="w-8 h-8 ml-2 text-blue-600"/>
            <input  className="flex flex-1 p-2 rounded bg-transparent placeholder:text-slate-50 outline-none" type="text" placeholder="Search GitHub username..."/>
            <button className="p-2 bg-blue-600 rounded-lg">Search</button>
        </div>
    )
}

export default Search