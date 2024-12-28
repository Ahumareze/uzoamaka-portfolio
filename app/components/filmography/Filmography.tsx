import { MOVIES } from "@/constants/moviesListing";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { MovieItem } from "./MovieItem";
import { AnimatePresence, motion } from "motion/react"

import quiteMondayPoster from '@/assets/images/movie-posters/quiteMonday-poster.png';
import wndc from '@/assets/images/posters/wdce.png';
import profileImage from '@/assets/images/profileImage.jpeg';
import night2005 from '@/assets/images/posters/2005Night.jpg';
import the_weekend from '@/assets/images/posters/the_weekend.jpg';
import phoenix_fury from '@/assets/images/posters/phoenix_fury.jpg';
import headless from '@/assets/images/posters/headless.jpg';

/* eslint-disable */
import love_notes from '@/assets/images/posters/love_notes.JPG';
import diche from '@/assets/images/posters/diche.JPG';
import ife from '@/assets/images/posters/ife.JPG';
/* eslint-enable */

import mami_wata from '@/assets/images/posters/mami_wata.jpg';
import domi from '@/assets/images/posters/domi.jpg';
import shapingus from '@/assets/images/posters/shapingus.jpeg';
import behindthescene from '@/assets/images/posters/behindthescene.jpeg';
import thirdStreet from '@/assets/images/posters/3rdStreet.jpeg';
import riona from '@/assets/images/posters/riona.jpg';
import amanzeandthezipman from '@/assets/images/posters/amanze&thezipman.jpeg';
import mtvshuga from '@/assets/images/posters/mtvshuga.jpeg';

import ponziPoster from '@/assets/images/movie-posters/ponzi-poster.png';
import loveLanguagePoster from '@/assets/images/movie-posters/loveLanguage-poster.png';

const movies = [
    quiteMondayPoster,
    profileImage,
    shapingus,
    night2005,
    wndc,
    the_weekend,
    phoenix_fury,
    headless,
    love_notes,
    domi,
    mami_wata,
    loveLanguagePoster,
    diche,
    profileImage,
    ponziPoster,
    behindthescene,
    amanzeandthezipman,
    ife,
    riona,
    mtvshuga,
    thirdStreet,
    profileImage,
    profileImage,
    profileImage,
    mtvshuga
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
        <section className="w-[100vw] min-h-screen bg-primary-white px-[20px] md:px-[50px] py-10 md:py-20 box-border" id="films">
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
                <div className="w-[420px] flex items-center justify-center sticky top-10 h-fit pt-10">
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
                                className="group-hover:scale-105 duration-300 ease-in-out bg-[#ddd] rounded-md"
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
        </section>
    )
}