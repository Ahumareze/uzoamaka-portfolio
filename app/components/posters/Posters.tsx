import Image from 'next/image';

import ponziPoster from '@/assets/images/movie-posters/ponzi-poster.png';
import quiteMondayPoster from '@/assets/images/movie-posters/quiteMondayPoster.jpeg';
import aNightIn2005 from '@/assets/images/posters/2005Night.jpg';
//@ts-ignore
import and_the_zipman from '@/assets/images/posters/ananze and_the_zipman.JPG';
//@ts-ignore
import diche from '@/assets/images/posters/diche.JPG';
import headless from '@/assets/images/posters/headless.jpg';
//@ts-ignore
import ife from '@/assets/images/posters/ife.JPG';
import mami_wata from '@/assets/images/posters/mami_wata.jpg';
import riona from '@/assets/images/posters/riona.jpg';
import phoenix_fury from '@/assets/images/posters/phoenix_fury.jpg';
import the_weekend from '@/assets/images/posters/the_weekend.jpg';
import domi from '@/assets/images/posters/domi.jpg';
import wdce from '@/assets/images/posters/wdce.png';
//@ts-ignore
import love_notes from '@/assets/images/posters/love_notes.JPG';
//@ts-ignore
import venge from '@/assets/images/posters/venge.JPG';



export default function Posters(){
    return(
        <div className="min-h-screen w-[100vw] bg-[#2d2d33] flex flex-col items-center justify-center overflow-hidden py-20 overflow-hidden">
            {/* top contents */}
            <div className='grid grid-cols-[250px_250px_250px_250px_250px] w-full items-center justify-center'>
                <div className='relative h-[350px] w-[350px]'>
                    <Image
                        src={diche}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale scale-90 hover:scale-110 hover:z-[100] rotate-[-10deg] hover:rotate-[-4deg] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px]'>
                    <Image
                        src={wdce}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale rotate-[5deg] hover:rotate-0 hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px]'>
                    <Image
                        src={phoenix_fury}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale hover:scale-110 hover:rotate-3 hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px]'>
                    <Image
                        src={quiteMondayPoster}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale hover:rotate-[6deg] hover:scale-110 hover:z-[100] hover:grayscale-0 rotate-[15deg] duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px]'>
                    <Image
                        src={domi}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale hover:z-[100] hover:grayscale-0 rotate-[-5deg] hover:rotate-0 hover:scale-110 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
            </div>

            {/* middle contents */}
            <div className='grid grid-cols-[250px_250px_250px_250px_250px] w-full items-center justify-center relative top-[-100px]'>
                <div className='relative h-[350px] w-[350px]'>
                    <Image
                        src={the_weekend}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale scale-80 rotate-[10deg] hover:rotate-[5deg] hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px]'>
                    <Image
                        src={and_the_zipman}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale scale-110 hover:scale-125 rotate-[-7deg] hover:rotate-0 hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px]'>
                    <Image
                        src={ponziPoster}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale scale-110 hover:scale-125 hover:rotate-3 hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px]'>
                    <Image
                        src={mami_wata}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale scale-90 rotate-[-7deg] hover:rotate-[-3deg] hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px] right-10'>
                    <Image
                        src={riona}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale rotate-[10deg] hover:rotate-[4deg] hover:scale-110 hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
            </div>

            {/* bottom contents */}
            <div className='grid grid-cols-[250px_250px_250px_250px_250px] w-full items-center justify-center relative top-[-100px]'>
                <div className='relative h-[350px] w-[350px] right-10'>
                    <Image
                        src={headless}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale rotate-[-2deg] hover:rotate-[4deg] hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px] right-10'>
                    <Image
                        src={venge}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale rotate-[-2deg] hover:rotate-[4deg] hover:scale-125 hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px] right-10'>
                    <Image
                        src={ife}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale rotate-[-2deg] hover:rotate-[4deg] hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px] top-[-60px]'>
                    <Image
                        src={aNightIn2005}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale rotate-[10deg] hover:rotate-[4deg] hover:scale-125 hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
                <div className='relative h-[350px] w-[350px]'>
                    <Image
                        src={love_notes}
                        alt='quite moday movie poster'
                        objectFit='contain'
                        layout='fill'
                        className='grayscale rotate-[-12deg] hover:rotate-[-6deg] hover:scale-110 hover:z-[100] hover:grayscale-0 duration-300 ease-in-out hover:scale-105 rounded-lg'
                    />
                </div>
            </div>
        </div>
    )
}