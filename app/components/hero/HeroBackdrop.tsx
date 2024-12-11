import Image, { StaticImageData } from "next/image";

import hero1 from '@/assets/images/hero-images/hero-1.png';
import hero2 from '@/assets/images/hero-images/hero-2.png';
import hero3 from '@/assets/images/hero-images/hero-3.png';
import hero4 from '@/assets/images/hero-images/hero-4.png';
import hero5 from '@/assets/images/hero-images/hero-5.png';
import hero6 from '@/assets/images/hero-images/hero-6.png';
import { useState } from "react";

const images : StaticImageData[] = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6
]

export default function HeroBackdrop(){
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return(
        <div className='h-screen w-full bg-[#d6c7c4] bg-red-500'>
            <Image
                className='h-full w-full object-cover'
                src={images[currentIndex]}
                alt='Banner images'
            />
        </div>
    )
}