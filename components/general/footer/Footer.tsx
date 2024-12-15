import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SiSubstack } from "react-icons/si";

export default function Footer(){

    function SocialCard({icon, name, link, isLight}: {icon: React.ReactNode, name: string, link: string, isLight?: boolean}){
        return(
            <Link href={link} target="_blank">
                <div className="relative w-[190px] h-[150px] flex flex-col gap-0 cursor-pointer group/item overflow-hidden">
                    <div className={`flex-1 w-full flex items-center justify-center text-5xl ${isLight ? 'text-primary-black bg-primary-white' : 'bg-primary-black text-primary-white'}`}>
                        <div className="relative group-hover/item:pb-10 group-hover/item:scale-90 duration-500 ease-in-out">
                            {icon}
                        </div>
                    </div>
                    <div className={`absolute bottom-[-50px] group-hover/item:bottom-0 duration-300 ease-in-out py-2 w-full ${isLight ? 'bg-primary-black text-primary-white' : 'bg-primary-white text-primary-black'}`}>
                        <p className="w-full text-center font-gelica text-sm">
                            {name}
                        </p>
                    </div>
                </div>
            </Link>
        )
    }

    return(
        <section className="w-full px-[20px] md:px-[50px] bg-primary-white">
            <div className="flex items-center">
                <div className="flex-1 flex items-center">
                    <Link href={'mailto:hellouzoamaka@gmail.com'} target="_blank">
                        <h1 className="flex-1 text-5xl font-bold font-gelica text-primary-black hover:underline duration-300 ease-in-out">hellouzoamaka@gmail.com</h1>
                    </Link>
                </div>
                <div className="flex items-center">
                    <SocialCard
                        icon={<SiSubstack />}
                        link=""
                        name="Writings by Uzoamaka"
                    />
                    <SocialCard
                        icon={<RiInstagramFill />}
                        link="https://www.instagram.com/uzoamaka_a?igsh=OGxjdXJkbnU5ZWhy"
                        name="Life updates"
                        isLight
                    />
                    <SocialCard
                        icon={<FaXTwitter />}
                        link="https://x.com/uzoamaka_a1?s=21&t=Kf4Ot9_zpktg2pxUHVIIug"
                        name="Movie rants and vibes"
                    />
                </div>
            </div>
            <div className="border-t border-[#B4B4B4] w-full flex items-center py-10">
                <div className="flex-1 text-sm text-[#696969] font-eculid">
                    <Link href={'/'} target="_blank" className="underline">Adesewa</Link> served Design, <Link href={'/'} target="_blank" className="underline">Gideon</Link> served motion, <Link href={'/'} target="_blank" className="underline">Ifeanyi</Link> served code.🍽️
                </div>
                <p className="text-sm text-[#696969] font-eculid">© 2024 All Rights Reserved. All beauty to Uzoamaka.</p>
            </div>
        </section>
    )
}