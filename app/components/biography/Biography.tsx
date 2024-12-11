"use client"
import biographyImage from '@/assets/images/biographyImage.png';
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
        <div className="w-full flex relative " style={{ height: `calc(100vh + 200px)` }}  ref={containerRef}>
            <div className='w-[550px] sticky top-0 h-fit'>
                <Image
                    src={biographyImage}
                    alt='uzoamaka aniunoh'
                    className='w-full'
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
                        <div className='space-y-7 mt-5 text-base md:text-lg text-[#222229] font-eculid' data-aos="fade-up">
                            <p>Uzoamaka Aniunoh was born on August 25, 1990, in Lagos, Nigeria. Her early life was marked by a strong emphasis on education and the arts, with her parents providing unwavering support. Born into a family that valued creative expression, Uzoamaka's innate talent and passion for acting were nurtured from a young age.</p>

                            <p>Her family relocated to the United States during her childhood, exposing her to diverse cultural experiences that would later influence her acting career. Uzoamaka attended high school in the US before proceeding to study at the prestigious New York Film Academy, laying the groundwork for her professional acting career.</p>

                            <p>Growing up, Uzoamaka drew inspiration from renowned Nigerian actresses like Genevieve Nnaji, Omotola Jalade-Ekeinde, and Joke Silva. These screen icons motivated her to pursue her dreams in the entertainment industry. Her formative years were characterized by dedication, perseverance, and a burning passion for storytelling, shaping her unique perspective and paving the way for her rise to prominence in the Nigerian film industry.</p>
                        </div>
                    </div>
                    {/* herstory */}
                    <div className='w-full h-screen bg-[#F5EDEB] rounded-t-[60px] border-8 border-white p-10 relative' id='herStory'>
                        <h1 className='font-gelica text-5xl font-bold text-[#444444]'>From Writing to Acting </h1>
                        <div className='space-y-7 mt-5 text-base md:text-lg text-[#222229] font-eculid'>
                            <p>Uzoamaka Aniunoh was born on August 25, 1990, in Lagos, Nigeria. Her early life was marked by a strong emphasis on education and the arts, with her parents providing unwavering support. Born into a family that valued creative expression, Uzoamaka's innate talent and passion for acting were nurtured from a young age.</p>

                            <p>Her family relocated to the United States during her childhood, exposing her to diverse cultural experiences that would later influence her acting career. Uzoamaka attended high school in the US before proceeding to study at the prestigious New York Film Academy, laying the groundwork for her professional acting career.</p>

                            <p>Growing up, Uzoamaka drew inspiration from renowned Nigerian actresses like Genevieve Nnaji, Omotola Jalade-Ekeinde, and Joke Silva. These screen icons motivated her to pursue her dreams in the entertainment industry. Her formative years were characterized by dedication, perseverance, and a burning passion for storytelling, shaping her unique perspective and paving the way for her rise to prominence in the Nigerian film industry.</p>
                        </div>
                    </div>
                    {/* wins */}
                    <div className='w-full h-screen bg-[#EEE1DD] rounded-t-[60px] border-8 border-white p-10 relative' id='wins'>
                        <h1 className='font-gelica text-5xl font-bold text-[#444444]'>Wins, Directing...</h1>
                        <div className='space-y-7 mt-5 text-base md:text-lg text-[#222229] font-eculid'>
                            <p>Uzoamaka Aniunoh was born on August 25, 1990, in Lagos, Nigeria. Her early life was marked by a strong emphasis on education and the arts, with her parents providing unwavering support. Born into a family that valued creative expression, Uzoamaka's innate talent and passion for acting were nurtured from a young age.</p>

                            <p>Her family relocated to the United States during her childhood, exposing her to diverse cultural experiences that would later influence her acting career. Uzoamaka attended high school in the US before proceeding to study at the prestigious New York Film Academy, laying the groundwork for her professional acting career.</p>

                            <p>Growing up, Uzoamaka drew inspiration from renowned Nigerian actresses like Genevieve Nnaji, Omotola Jalade-Ekeinde, and Joke Silva. These screen icons motivated her to pursue her dreams in the entertainment industry. Her formative years were characterized by dedication, perseverance, and a burning passion for storytelling, shaping her unique perspective and paving the way for her rise to prominence in the Nigerian film industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}