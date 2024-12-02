"use client"
import loaderBackdrop from '@/assets/images/loader-backdrop.png';

import Image from 'next/image';
import RecordingText from '../animations/RecordingText';
import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import logoMain from '@/assets/icons/logo-main.png';
import LoaderIndicator from './LoaderIndicator';
import LoaderImage from './LoaderImage';

export default function Loader({setShowLoader}:{setShowLoader: (value: boolean) => void}){
    const [animateLogo, setAnimateLogo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateLogo(false)
            return
        }, 200);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [])

    return(
        <div className="w-full h-screen bg-black bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${loaderBackdrop.src})`}}>
            <div className='bg-[#222229F5] h-full w-full flex flex-col px-[20px] md:px-[50px] py-[20px]'>
                {/* middle content */}
                <div className='flex-1 w-full flex flex-col items-center justify-center'>
                    {/* <Image
                        src={loadingTextLogo}
                        alt='loader text'
                        className='max-h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        style={{objectFit: "contain"}}
                    /> */}
                    <LoaderImage />
                    <LoaderIndicator />
                </div>
                {/* bottom content */}
                <div className='flex items-end gap-5'>
                    <div className='flex-1 space-y-2'>
                        <div className='flex items-center gap-5 text-white/90'>
                            <p>[ACTOR]</p>
                            <p>[WRITER]</p>
                            <p>[DIRECTOR]</p>
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