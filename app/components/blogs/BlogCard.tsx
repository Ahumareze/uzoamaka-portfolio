import Image, { StaticImageData } from "next/image"
import { SiSubstack } from "react-icons/si";
import avatar from '@/assets/images/avatar.png';

export interface BlogCardType {
    image: StaticImageData,
    title: string,
    details: string,
    readMinute: string,
    date: string
}

export default function BlogCard({image, title, details, readMinute, date}: BlogCardType){
    return(
        <div className="h-[600px] min-w-[600px] bg-black/20 rounded-xl bg-center bg-cover bg-no-repeat flex flex-col overflow-hidden" style={{backgroundImage: `url(${image.src})`}}>
            <div className="flex items-center gap-3 p-5">
                <Image
                    src={avatar}
                    height={50}
                    width={50}
                    alt="uzoamaka avatar"
                />
                <div className="font-gelica text-white">
                    <h3 className="text-2xl">Uzoamaka A.</h3>
                    <div className="flex items-center gap-3">
                        <p>{date}</p>
                        <div className="w-[7px] h-[7px] bg-[#E8E8E8] rounded-full" />
                        <p>{readMinute}</p>
                    </div>
                </div>
            </div>
            <div className="flex-1" />
            <div className="flex items-end p-5 bg-gradient-to-b from-black/0 to-black/90 pt-20">
                <div className="flex-1 space-y-2 text-white font-gelica">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-xl">{details}</p>
                </div>
                <SiSubstack className="text-white" size={40} />
            </div>
        </div>
    )
}