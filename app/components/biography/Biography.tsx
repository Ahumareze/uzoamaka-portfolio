import biographyImage from '@/assets/images/biographyImage.png';
import Image from 'next/image';

export default function Biography(){
    return(
        <div className="w-full h-screen flex">
            <div className='w-[450px]'>
                <Image
                    src={biographyImage}
                    alt='uzoamaka aniunoh'
                    className='w-full'
                />
            </div>
            <div className='flex-1 bg-[#F8F3F2] p-10'>
                <div className='flex items-center gap-3'>
                    <div className='h-[10px] w-[10px] rounded-full bg-[#696969]' />
                    <p className='text-[#696969] text-xl'>Biography</p>
                </div>
                <div>
                    <h1 className='font-gelica text-5xl font-bold text-[#444444]'>Early Life</h1>
                </div>
            </div>
        </div>
    )
}