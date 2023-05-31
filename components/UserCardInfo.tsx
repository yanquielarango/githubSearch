'use client'

import {GlobeEuropeAfricaIcon, MapPinIcon, LinkIcon, BuildingOfficeIcon} from '@heroicons/react/24/solid'
import Image from 'next/image'


interface Props {
    user: User 
}

function valideURL(url: string) {
    // Verificar si la URL comienza con "http://" o "https://"
    if (!/^https?:\/\//i.test(url)) {
      // Agregar "https://" al principio de la URL
        url = "https://" + url;
    }
    return url;
}


const UserCardInfo = ({user}: Props) => {
    return (
                
        <section className=" rounded-xl  p-8  bg-[#1F2A48] grid grid-cols-3 md:grid-cols-5  grid-rows-[100px_minmax(0px,_1fr)_100px]">
            <div className="  overflow-hidden grid grid-cols-1  p-1  place-content-center    w-24 h-24 rounded-full bg-gray-200">
                <Image  
                    src={user?.avatar_url} 
                    width={92}
                    height={92}
                    alt={`profile img user ${user?.name}`}
                    className="rounded-full "
                
                />

            </div>
            <div className=" col-start-2 col-end-6  lg:col-span-4 relative lg:mr-10 space-x-6 md:col-span-4 ">
                <h2 className="text-2xl font-bold  font-mono ml-3">{user?.name}</h2>
                <p className="text-xs font-mono my-4 text-blue-400">@{user?.login}</p>
                <p className="text-xs font-mono my-4 text-gray-300   lg:absolute lg:-top-2 lg:right-0">{ new Date(user?.created_at || "").toLocaleDateString("en", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}</p>
            </div>
        
            <p className=" col-span-full font-mono text-xs md:text-base  lg:col-start-2 lg:col-end-6  mt-5 md:mt-7 lg:mt-1 mb-4">{user?.bio || "This profile has no bio"}      </p>
        
        <section className="flex  font-mono  bg-slate-900 rounded-lg items-center justify-around  col-span-full  lg:col-start-2 lg:col-end-6 ">
            <article>
                <p>Repos</p>
                <p>{user?.public_repos}</p>
            </article>
            <article>
                <p>Followers</p>
                <p>{user?.followers}</p>
            </article>
            <article>
                <p>followings</p>
                <p>{user?.following}</p>
            </article>
        </section>

        <section className="col-span-3    md:flex  lg:col-start-2  lg:col-end-6    text-sm  col-start-1  col-end-6  md:space-x-8">
            <div className=" mt-6 lg:space-y-4 space-y-5">
                <article className="flex gap-4 ">
                    <MapPinIcon className="w-6 h-6 "/>
                    <p>{user?.location}</p>
                </article>
                <article className="flex gap-4 ">
                    <LinkIcon className="w-6 h-6 "/>
                    <a href={`https://www.twitter.com/${user?.twitter_username}`}>
                        {user?.twitter_username}
                    </a>
                </article>
            </div>

            <div className=" mt-6 lg:space-y-4  space-y-5">
                <article className="flex gap-4 ">
                    <LinkIcon className="w-6 h-6 "/>
                    <a
                        href={valideURL(user.blog)}
                        className="truncate"
                            >
                        {user?.blog || "not information"}
                    </a>
                </article>
                <article className="flex gap-4">
                    <BuildingOfficeIcon className="w-6 h-6 "/>
                    <p> {user?.company || "not information"} </p>
                </article>
            </div>
            
        </section>
        
    </section>
    )
}

export default UserCardInfo