"use client"
import { heroImages } from '@/constants/heroCoursel';
import Image, { StaticImageData } from 'next/image';
import classes from './styles.module.css';
import LargeText from '@/components/texts/HeroTitle';
import HeroBackdrop from './HeroBackdrop';

export default function Hero(){

    const CourselCard = ({image}: {image: StaticImageData}) => {
        return(
            <div className='w-[200px] px-[10px] py-[10px] pb-[30px] bg-primary-white rounded'>
                <Image
                    src={image}
                    alt='uzoamaka aniunoh movie'
                    className='w-full object-cover'
                />
            </div>
        )
    }
    
    return(
        <section className='h-screen relative'>
            <HeroBackdrop />
            <div className="h-screen overflow-hidden w-full bg-center bg-cover bg-no-repeat flex md:flex-row flex-col gap-2 md:gap-10 md:px-[50px] pb-5 md:pb-0 absolute top-0">
                <div className='flex-1 flex items-end h-full overflow-hidden py-[20px] px-[20px] md:px-0'>
                    <h1 className='text-primary-white text-6xl md:text-7xl lg:text-9xl font-extrabold m-0 p-0 font-gelica' data-aos="fade-up">UZOAMAKA<br />ANIUNOH.</h1>
                </div>
                <div className='h-[200px] md:h-screen overflow-hidden w-fukk md:w-[200px] relative'>
                    <div className={`${classes.scroll_container} h-full flex flex-row md:flex-col gap-5`}>
                        {heroImages.map((image, index) => (
                            <CourselCard
                                key={index}
                                image={image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}