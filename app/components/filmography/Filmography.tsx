import { StaticImageData } from "next/image";
import { useState } from "react";

export interface MovieItemProps {
    title: string, 
    platform: StaticImageData,
    
}

export default function Filmography(){
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const MovieItem = () => {
        return(
            <div>

            </div>
        )
    }

    return(
        <div className="w-full min-h-screen bg-primary-white px-[20px] md:px-[50px] py-10 md:py-20">
            <div className="flex items-center gap-5">
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                        <div className='h-[10px] w-[10px] rounded-full bg-[#696969]' />
                        <p className='text-[#696969] text-xl'>Appearances</p>
                    </div>
                    <h1 className="text-3xl md:text-[55px] font-bold text-[#444444] font-gelica leading-[120%]">UZOAMAKA'S FILMOGRAPHY</h1>
                </div>
                <p className="max-w-[350px] text-right font-gelica text-[#8E8E8E] text-lg">'there are years that ask questions and years that answer'~ <span className="text-[#B4B4B4]">zora neale hurston.</span></p>
            </div>
            <div className="w-full flex items-center gap-10 mt-10">
                <div className="h-[450px] w-[450px] bg-black/20 rounded-md">

                </div>
                <div className="flex-1 space-y-2">
                    <div className="grid grid-cols-[100px_200px_300px_">

                    </div>
                </div>
            </div>
        </div>
    )
}