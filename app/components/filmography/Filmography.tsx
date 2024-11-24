import { MOVIES } from "@/constants/moviesListing";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export interface MovieItemProps {
    title: string, 
    platform: StaticImageData,
    year: string,
    role: string,
    link: string,
    directors: string
}

export default function Filmography(){
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const MovieItem = ({title, platform, year, role, link, directors}: MovieItemProps) => {
        return(
            <Link href={link} target="_blank">
            <div className="cursor-pointer group/movie grid items-center grid-cols-[100px_170px_150px_1fr_150px] text-sm text-[#1E1E1E] gap-2 px-5 py-5 border-b border-[#B4B4B4]">
                <p className="text-[#8E8E8E]">{year}</p>
                <p>{title}</p>
                <p>{role}</p>
                <p className="text-[#8E8E8E]">{directors}</p>
                <div className="w-full flex items-center">
                    <div className="flex-1">
                        <Image
                            src={platform}
                            alt={title}
                            className="w-[60px]"
                        />
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full group-hover/movie:bg-[#f5f5f5] flex items-center justify-center">
                        <GoArrowUpRight size={20} />
                    </div>
                </div>
            </div>
            </Link>
        )
    }

    return(
        <div className="w-full min-h-screen bg-primary-white px-[20px] md:px-[50px] py-10 md:py-20">
            <div className="flex items-center gap-5">
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                        <div className='h-[10px] w-[10px] rounded-full bg-[#696969]' />
                        <p className='text-[#696969] text-xl'>Appearances</p>
                    </div>
                    <h1 className="text-3xl md:text-[55px] font-bold text-[#444444] font-gelica leading-[120%]">UZOAMAKA'S FILMOGRAPHY</h1>
                </div>
                <p className="max-w-[350px] text-right font-gelica text-[#8E8E8E] text-lg">'there are years that ask questions and years that answer'~ <span className="text-[#B4B4B4]">zora neale hurston.</span></p>
            </div>
            <div className="w-full flex items-center gap-10 md:gap-20 mt-10">
                <div className="h-[450px] min-w-[420px] bg-black/20 rounded-md">

                </div>
                <div className="flex-1">
                    <div className="grid grid-cols-[100px_170px_150px_1fr_150px] text-sm text-[#444444] gap-2 px-5 py-5 border-b border-[#B4B4B4]">
                        <p>Year</p>
                        <p>Title</p>
                        <p>Role</p>
                        <p>Director(s)</p>
                        <p>Platform</p>
                    </div>
                    {MOVIES.map(({
                        title,
                        platform,
                        year,
                        directors,
                        role,
                        link
                    }, index) => (
                        <MovieItem
                            role={role}
                            year={year}
                            platform={platform}
                            title={title}
                            directors={directors}
                            key={index}
                            link={link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}