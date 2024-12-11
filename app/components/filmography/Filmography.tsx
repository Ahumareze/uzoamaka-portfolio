import { MOVIES } from "@/constants/moviesListing";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MovieItem } from "./MovieItem";
import { AnimatePresence, motion } from "motion/react"

import quiteMondayPoster from '@/assets/images/movie-posters/quiteMonday-poster.png';
import ponziPoster from '@/assets/images/movie-posters/ponzi-poster.png';
import loveLanguagePoster from '@/assets/images/movie-posters/loveLanguage-poster.png';

const movies = [
    quiteMondayPoster,
    ponziPoster,
    loveLanguagePoster
]

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

    return(
        <div className="w-full min-h-screen bg-primary-white px-[20px] md:px-[50px] py-10 md:py-20">
            <div className="flex items-center gap-5">
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                        <div className='h-[10px] w-[10px] rounded-full bg-[#696969]' />
                        <p className='text-[#696969] text-xl font-gelica'>Appearances</p>
                    </div>
                    <h1 className="text-3xl md:text-[55px] font-bold text-[#444444] font-gelica leading-[120%]" data-aos="fade-up">UZOAMAKA'S FILMOGRAPHY</h1>
                </div>
                <p className="max-w-[350px] text-right font-gelica text-[#8E8E8E] text-lg" data-aos="fade-left">'there are years that ask questions and years that answer'~ <span className="text-[#B4B4B4]">zora neale hurston.</span></p>
            </div>
            <div className="w-full flex gap-10 md:gap-20 mt-10 relative">
                <div className="w-[420px] flex items-center justify-center sticky top-5 h-fit">
                    <AnimatePresence>
                        <motion.div 
                            key={selectedIndex}
                            initial={{ scale: 0.8, opacity: 0}}
                            animate={{ scale: 1, opacity: 1}}
                            // exit={{ scale: 0.8, opacity: 0}}
                            className="max-h-[450px] pt-10 min-w-[420px] max-w-[420px] rounded-md flex items-center justify-center relative group cursor-pointer"
                        >
                            <Image
                                src={movies[selectedIndex]}
                                alt=''
                                className="group-hover:scale-105 duration-300 ease-in-out"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="flex-1">
                    <div className="font-eculid grid grid-cols-[100px_170px_150px_1fr_150px] text-sm text-[#444444] gap-2 px-5 py-5 border-b border-[#B4B4B4]">
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
                            index={index}
                            handleHover={setSelectedIndex}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}