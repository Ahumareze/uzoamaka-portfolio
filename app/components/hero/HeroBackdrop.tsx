import Image from "next/image";

import heroSectionBgImage from '@/assets/images/hero-main-image.png';

export default function HeroBackdrop(){
    return(
        <div className='h-screen w-full bg-[#d6c7c4] bg-red-500'>
            <Image
                className='h-full w-full object-cover'
                src={heroSectionBgImage}
                alt='Banner images'
            />
        </div>
    )
}