"use client"
import loaderBackdrop from '@/assets/images/loader-backdrop.png';
// @ts-ignore
import loadingTextLogo from '@/assets/icons/loadingTextLogo.GIF';
import Image from 'next/image';
import RecordingText from '../animations/RecordingText';
import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import logoMain from '@/assets/icons/logo-main.png';

export default function Loader(){
    const [animateLogo, setAnimateLogo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateLogo(false)
            return
        }, 200);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [])

    useGSAP(() => {
        let tl1 = gsap.timeline();

        tl1.to('#loader-text-animation', {
            delay: 2,
            duration: 2,
            ease: "power1.inOut",
            top: 20,
            translateX: 50,
            left: 50,
            translateY: 20,
            maxHeight: 150
        })

    }, {})

    return(
        <div className="w-full h-screen bg-red-500 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${loaderBackdrop.src})`}}>
            <div className='bg-[#222229F5] h-full w-full flex flex-col px-[20px] md:px-[50px] py-[20px]'>
                {/* top content */}
                <div className='flex items-center gap-5'>
                    {/* logo container */}
                    <div className='flex items-center'>
                        {animateLogo && <RecordingText />}
                        <Image
                            src={animateLogo ? loadingTextLogo : loadingTextLogo}
                            alt='loader text'
                            className='max-h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                            style={{objectFit: "contain"}}
                            id='loader-text-animation'
                        />
                    </div>
                    <div className='flex-1 h-[20px] flex items-center justify-end text-white gap-5 font-medium'>
                        <p>iso : 100</p>
                        <div className='flex items-center gap-3 px-5 border-l border-white/50'>
                            <p>Menu +</p>
                        </div>
                    </div>
                </div>
                {/* middle content */}
                <div className='flex-1 w-full'>
                    {/* <Image
                        src={loadingTextLogo}
                        alt='loader text'
                        className='max-h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        style={{objectFit: "contain"}}
                    /> */}
                </div>
                {/* bottom content */}
                <div className='flex items-end gap-5'>
                    <div className='flex-1 space-y-2'>
                        <div className='flex items-center gap-5 text-white/70'>
                            <p>[Actor]</p>
                            <p>[Director]</p>
                            <p>[Photographer]</p>
                        </div>
                        <p className='text-white font-semibold text-xl'>Heading To The Oscar</p>
                    </div>
                    <div className='flex-1 flex items-center justify-end gap-2'>
                        {[1,2,3].map(i => (
                            <div className='h-[20px] w-[10px] bg-white' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}