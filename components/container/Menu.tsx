"use client"
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import profileImage from '@/assets/images/profileImage.jpeg';
import highlightsImage from '@/assets/images/highlightsImage.jpeg';
import ifePoster from '@/assets/images/ife_poster.png';
import blogsPoster from '@/assets/images/detailsUzoamaka.jpeg';
import { AnimatePresence, motion } from "motion/react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useGeneralStore } from "@/store/generalStore";
import Link from "next/link";
// import { useRouter } from "next/router";


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

export default function Menu({closeMenu}: {closeMenu: boolean}){
    // const router = useRouter()
    const [selected, setSelected] = useState<number | null>(null);

    const { setShowHeader } = useGeneralStore();

    useGSAP(() => {
        let tl  = gsap.timeline();
        let tl2 = gsap.timeline();

        tl.to('#menu-main-container', {
            height: '100vh',
            duration: 1.2,
            ease: 'power1.inOut',
        })

        tl2.to('#menu-link', {
            delay: 0.6,
            top: 0,
            opacity: 1,
            stagger: 0.07,
            ease: "power1.inOut"
        })
    }, {});

    useEffect(() => {
        if(closeMenu){
            closeAnimation();
        }
    }, [closeMenu])

    const closeAnimation = () => {
        let tl = gsap.timeline();
        let tl2 = gsap.timeline();

        tl2.to('#menu-link', {
            top: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "power1.inOut"
        })

        
        tl.to('#menu-main-container', {
            delay: 0.4,
            height: 0,
            duration: 1.2,
            ease: 'power1.inOut',
            top: -200,
            onComplete: () => setShowHeader(false),
        })
    };

    const handleSelect = (id: string) => {
        closeAnimation()
    }

    return(
        <div className='h-screen w-full fixed top-0 z-[1002] bg-transparent'>
            <div className="h-0 w-full bg-primary-black px-[40px] md:px-10 pt-[100px] pb-5 flex flex-col box-border overflow-hidden relative" id="menu-main-container">
                <div className="flex flex-wrap gap-2 text-primary-white font-extrabold text-3xl md:text-9xl font-gelica gap-5">
                    {links.map(({
                        title, 
                        id
                    }, index) => (
                        <div className="top-[70px] relative opacity-0" id="menu-link" key={index}>
                            <Link
                                className={`cursor-pointer  ${(selected === index || selected === null) ? 'opacity-100' : 'opacity-20'}`}
                                onMouseEnter={() => setSelected(index)}
                                onClick={() => handleSelect(id)}
                                href={id}
                            >
                                {title}
                            </Link>
                        </div>
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
                    <div className="absolute w-[270px] right-10 bottom-5">
                        {selected !== null &&
                            <AnimatePresence>
                                <motion.div 
                                    key={selected}
                                    initial={{ scale: 0.9, opacity: 0}}
                                    animate={{ scale: 1, opacity: 1}}
                                >
                                    <Image
                                        src={links[selected].image}
                                        alt=""
                                        className="w-[300px] relative"
                                        id="menu-link"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}