import {GlobeEuropeAfricaIcon, MapPinIcon, LinkIcon} from '@heroicons/react/24/solid'


const UserCardInfo = () => {
    return (
                
        <section className=" rounded-xl  p-8  bg-[#1F2A48] grid grid-cols-3 lg:grid-cols-5  md:grid-cols-5 grid-rows-[100px_minmax(100px,_1fr)_100px]">
            <div className=" grid grid-cols-1   place-content-center  -mt-2">
                <GlobeEuropeAfricaIcon className='rounded-full'/>
            {/* <GithubIcon className="relative top-2 h-full w-full" /> */}
            </div>
            <div className="section-title col-span-2 lg:col-span-4 relative lg:mr-10 space-x-6 md:col-span-6">
            <h2 className="text-2xl font-bold  font-mono ml-3">The Octocat</h2>
            <p className="text-xs font-mono my-4 text-blue-400">@yaquiel</p>
            <p className="text-xs font-mono my-4 text-gray-300   lg:absolute lg:-top-2 lg:right-0">Joined 25 Jan 2011</p>
            </div>
        
            <p className=" col-span-3 font-mono text-base lg:col-start-2 lg:col-end-6 mt-4 lg:mt-1 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto odio sapiente qui ipsam tempora error vel maxime facilis dignissimos!      </p>
        
        <section className="flex    bg-slate-900 col-span-3 rounded-lg items-center justify-around lg:col-start-2 lg:col-end-6 ">
            <article>
                <p>Repos</p>
                <p>8</p>
            </article>
            <article>
                <p>Followers</p>
                <p>3938</p>
            </article>
            <article>
                <p>followings</p>
                <p>9</p>
            </article>
        </section>

        <section className="col-span-3    md:flex  lg:col-start-2 lg:col-end-6 lg:space-x-20  text-sm  col-start-1 col-end-6 md:space-x-12">
            <div className=" mt-6 lg:space-y-4 space-y-5">
                <article className="flex gap-4 ">
                    <MapPinIcon className="w-6 h-6 "/>
                    <p> San Francisco</p>
                </article>
                <article className="flex gap-4 ">
                    <LinkIcon className="w-6 h-6 "/>
                    <p> https://github.blog</p>
                </article>
            </div>

            <div className=" mt-6 lg:space-y-4  space-y-5">
                <article className="flex gap-4 ">
                    <MapPinIcon className="w-6 h-6 "/>
                    <p> San Francisco</p>
                </article>
                <article className="flex gap-4">
                    <LinkIcon className="w-6 h-6 "/>
                    <p> https://github.blog</p>
                </article>
            </div>
            
        </section>
        
    </section>
    )
}

export default UserCardInfo