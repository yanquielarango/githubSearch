'use client'


import { useState } from 'react'
import {SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [theme, setTheme] = useState<boolean>(false)

    const toggleTheme = () => {
        setTheme(!theme)
    }


    return (
        <div className="flex justify-between items-center mb-10">
            <h1 className="text-lg">devfinder</h1>
            <div className="flex gap-4">
                <h2 className="text-xs">{theme ? "dark" : "light"}</h2>
                {
                    theme ? <MoonIcon className="h-4 w-4" onClick={toggleTheme} /> : <SunIcon className="h-4 w-4" onClick={toggleTheme} />
                }
            
            </div>
        </div>
    )
}

export default Navbar