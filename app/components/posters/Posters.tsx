import ponziPoster from '@/assets/images/movie-posters/ponzi-poster.png';
import quiteMondayPoster from '@/assets/images/movie-posters/quiteMondayPoster.jpeg';
import Image from 'next/image';

export default function Posters(){
    return(
        <div className="min-h-screen w-full bg-[#2d2d33] flex items-center justify-center overflow-hidden ">
            <div className='relative h-[350px] w-[350px] z-10 hover:z-50'>
                <Image
                    src={ponziPoster}
                    alt='ponzi movie poster'
                    objectFit='contain'
                    layout='fill'
                    className='grayscale scale-80 rotate-3 hover:rotate-0 hover:grayscale-0 duration-300 ease-in-out hover:scale-105'
                />
            </div>
            <div className='relative h-[350px] w-[350px] left-[-100px] z-20'>
                <Image
                    src={quiteMondayPoster}
                    alt='quite moday movie poster'
                    objectFit='contain'
                    layout='fill'
                    className='grayscale scale-80 rotate-[-10deg] hover:rotate-0 hover:grayscale-0 duration-300 ease-in-out hover:scale-105'
                />
            </div>
        </div>
    )
}