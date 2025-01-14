"use client"
import biographyImage from '@/assets/images/biographyImage.png';
import mobileBiographyImage from '@/assets/images/mobileBiographyImage.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Biography(){
    const containerRef = useRef(null);

    useGSAP(() => {
        let tl1 = gsap.timeline();
        let tl2 = gsap.timeline();

        tl1.to('#herStory', {
            scrollTrigger: {
                trigger: '#earlyLife',
                start: "top 100px",
                end: "top 50px",
                // markers: true,
                scrub: true
            },
            top: '-100vh',
        })

        tl2.to('#wins', {
            scrollTrigger: {
                trigger: '#herStory',
                start: "-50px bottom",
                end: "top bottom",
                // markers: true,
                scrub: true
            },
            top: '-190vh',
        })

    }, {scope: containerRef})

    return(
        <div className="w-full md:flex relative md:h-screen md:overflow-hidden overflow-x-hidden" ref={containerRef}>
            <div className='w-full md:w-[550px] md:sticky top-0 h-fit'>
                <Image
                    src={biographyImage}
                    alt='uzoamaka aniunoh'
                    className='w-full hidden md:flex'
                />
                <Image
                    src={mobileBiographyImage}
                    alt='uzoamaka aniunoh'
                    className='w-full md:hidden'
                />
            </div>
            <div className='flex-1 bg-[#F8F3F2] overflow-hidden' style={{ height: `calc(100vh + 200px)` }}>
                <div className='flex items-center gap-3 pt-10 px-10'>
                    <div className='h-[10px] w-[10px] rounded-full bg-[#696969]' />
                    <p className='text-[#696969] text-xl font-gelica'>Biography</p>
                </div>
                <div>
                    <div className='pt-5 px-10 h-screen' id='earlyLife'>
                        <h1 className='font-gelica text-5xl font-bold text-[#444444]'>Early Life</h1>
                        <div className='space-y-7 mt-5 text-base md:text-lg text-[#444444] font-eculid' data-aos="fade-up">
                            <p>Uzoamaka Aniunoh was born and raised in Onitsha, <span className='font-medium'>Nigeria</span>. Her early life and upbringing played a significant role in shaping her creative pursuits. Uzoamaka’s educational background laid the foundation for her future success. She pursued higher education at the <span className='font-medium'>University of Nigeria</span>, where she earned a degree in <span className='font-medium'>English and History.</span></p>

                            <p>Aniunoh further honed her writing skills by obtaining a Master's degree in <span className='font-medium'>Creative Writing</span> from the <span className='font-medium'>University of Birmingham.</span> This postgraduate degree helped her refine her writing style, explore different genres, and develop a unique voice. Her educational journey not only equipped her with the necessary skills but also fostered a deep appreciation for the creative arts.</p>

                            <p>Uzoamaka’s academic achievements and early life experiences paved the way for her future success as a <span className='font-medium'>writer, actress, and director.</span> Her strong educational foundation and passion for creative pursuits have been instrumental in shaping her career.</p>
                        </div>
                    </div>
                    {/* herstory */}
                    <div className='w-full h-screen bg-[#F5EDEB] rounded-t-[60px] border-8 border-white p-10 relative' id='herStory'>
                        <h1 className='font-gelica text-5xl font-bold text-[#444444]'>From Writing to Acting </h1>
                        <div className='space-y-7 mt-5 text-base md:text-lg text-[#444444] font-eculid'>
                            <p>Aniunoh's creative journey began as a published fiction writer. Her work has been featured in various literary platforms, including <span className='font-medium'>Brittle Paper,</span> which published her stories "Tea Glass: An African Story" and "Mama Junior and Rush Green." An excerpt from her work "Balcony" was edited and published by renowned Nigerian writer Chimamanda Ngozi Adichie.</p>

                            <p>Aniunoh's transition to acting began in 2017 when she attended open auditions for <span className='font-medium'>MTV Shuga</span> and landed the role of Cynthia. She went on to star in the series from 2018 to 2019 and reprised her role in the 2020 special edition mini-series <span className='font-medium'>"MTV Shuga Alone Together."</span> This breakthrough role marked the beginning of her successful acting career, showcasing her talent and versatility as a performer.</p>

                            <p>As Aniunoh's acting career progressed, she took on more challenging roles, collaborating with prominent directors and actors in the Nigerian film industry. Her performances have been met with critical acclaim, earning her numerous award nominations and recognition within the industry.</p>
                        </div>
                    </div>
                    {/* wins */}
                    <div className='w-full bg-[#EEE1DD] rounded-t-[60px] border-8 border-white p-10 relative' id='wins' style={{ height: `calc(100vh + 200px)` }}>
                        <h1 className='font-gelica text-5xl font-bold text-[#444444]'>Wins, Directing...</h1>
                        <div className='space-y-7 mt-5 text-base md:text-lg text-[#444444] font-eculid'>
                            <p>Aniunoh's acting career has been marked by notable successes. She received the <span className='font-medium'>Kim Renders Memorial Award</span> for Outstanding Performance from the <span className='font-medium'>Reelout Film Festival</span> in 2021 for her role in the LGBT love story "Ife."</p>

                            <p>In 2022, Aniunoh starred in the Nigerian thriller <span className='font-medium'>"Diiche,"</span> Showmax's first Nigerian original limited series, which received seven nominations at the <span className='font-medium'>2023 Africa Magic Viewers' Choice Awards.</span> Her performance in the 2024 thriller <span className='font-medium'>"The Weekend"</span> earned her a Best Actress nomination at the 20th edition of the Africa Movie Academy Awards. These nominations and awards demonstrate her growth as an actress and her ability to excel in a variety of roles.</p>

                            <p>In addition to her acting accomplishments, Aniunoh has also ventured into directing. She made her directorial debut in 2023 with the short film <span className='font-medium'>"Love Language,"</span> which she also wrote and starred in.  As Aniunoh continues to grow and evolve as a creative professional, her future projects are eagerly anticipated by fans and industry insiders alike.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}