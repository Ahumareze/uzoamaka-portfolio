import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import profileImage from '@/assets/images/profileImage.jpeg';
import highlightsImage from '@/assets/images/highlightImage.png';
import ifePoster from '@/assets/images/ife_poster.png';
import blogsPoster from '@/assets/images/blogs_menu_poster.png';


const links: {title: string, id: string, image: StaticImageData}[] = [
    {
        title: 'PROFILE,',
        id: '#profile',
        image: profileImage
    },
    {
        title: 'BLOGS,',
        id: '#blogs',
        image: blogsPoster
    },
    {
        title: 'HIGHLIGHTS,',
        id: '#highlights',
        image: highlightsImage
    },
    {
        title: 'FILMS.',
        id: '#films',
        image: ifePoster
    }
]

export default function Menu(){
    const [selected, setSelected] = useState<string | null>(null);

    return(
        <div className='h-screen w-full absolute top-0 z-[1002] bg-transparent'>
            <div className="h-screen w-full bg-primary-black px-[40px] md:px-10 pt-[120px] pb-5 flex flex-col box-border">
                <div className="flex flex-wrap gap-2 text-primary-white font-extrabold text-9xl font-gelica gap-5">
                    {links.map(({
                        title, 
                        id
                    }, index) => (
                        <p 
                            className={`cursor-pointer ${(selected === title || selected === null) ? 'opacity-100' : 'opacity-20'}`}
                            key={index}
                            onMouseEnter={() => setSelected(title)}

                        >
                            {title}
                        </p>
                    ))}
                </div>
                <div className="flex-1 w-full flex gap-2 items-end relative">
                    <div className='flex-1 space-y-2 text-white/20'>
                        <div className='flex items-center gap-5 text-lg font-gelica'>
                            <p>[ACTOR]</p>
                            <p>[WRITER]</p>
                            <p>[DIRECTOR]</p>
                        </div>
                        <p className='text-3xl font-gelica'>HEADING TO THE OSCARS!</p>
                    </div>
                    <div className="absolute w-[270px] bg-red-500 right-10 bottom-5">
                        <Image
                            src={links[0].image}
                            alt=""
                            className="w-[300px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}