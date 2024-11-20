"use client"
import heroSectionBgImage from '@/assets/images/hero-main-image.png';
import { heroImages } from '@/constants/heroCoursel';
import Image, { StaticImageData } from 'next/image';
import classes from './styles.module.css';
import LargeText from '@/components/texts/HeroTitle';

export default function Hero(){

    const CourselCard = ({image}: {image: StaticImageData}) => {
        return(
            <div className='w-[200px] px-[10px] py-[10px] pb-[30px] bg-white rounded'>
                <Image
                    src={image}
                    alt='uzoamaka aniunoh movie'
                    className='w-full object-cover'
                />
            </div>
        )
    }
    
    return(
        <div className="h-screen w-full bg-[#d6c7c4] bg-center bg-cover bg-no-repeat flex gap-10 px-[20px] md:px-[50px]" style={{backgroundImage: `url(${heroSectionBgImage.src})`}}>
            <div className='flex-1 flex items-end h-full overflow-hidden py-[20px]'>
                <h1 className='text-white text-9xl font-extrabold m-0 p-0 font-gelica'>UZOAMAKA<br />ANIUNOH.</h1>
                {/* <LargeText
                    text='UZOAMAKA'
                /> */}
            </div>
            <div className='h-full overflow-hidden w-[200px]'>
                <div className={`${classes.scroll_container} h-full flex flex-col gap-5`}>
                    {heroImages.map((image, index) => (
                        <CourselCard
                            key={index}
                            image={image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}