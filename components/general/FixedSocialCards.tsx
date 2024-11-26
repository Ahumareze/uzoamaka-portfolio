import Link from "next/link"
import { FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { RiInstagramFill } from "react-icons/ri"
import { SiSubstack } from "react-icons/si"
import { TbMail } from "react-icons/tb"

export default function FixedSocialCards(){
    return(
        <div className="fixed top-[30%] left-0 z-[1000]">
            <Link href={'https://substack.com/for-bloggers'} target="_blank">
                <div className="h-[58px] w-[58px] flex items-center justify-center cursor-pointer bg-primary-white text-primary-black">
                    <SiSubstack size={22} />
                </div>
            </Link>
            <Link href={'https://x.com/uzoamaka_a1?s=21&t=Kf4Ot9_zpktg2pxUHVIIug'} target="_blank">
                <div className="h-[58px] w-[58px] flex items-center justify-center cursor-pointer bg-primary-white text-primary-black">
                    <FaXTwitter size={22}  />
                </div>
            </Link>
            <Link href={'https://www.instagram.com/uzoamaka_a?igsh=OGxjdXJkbnU5ZWhy'} target="_blank">
                <div className="h-[58px] w-[58px] flex items-center justify-center cursor-pointer bg-primary-white text-primary-black">
                    <RiInstagramFill size={25} />
                </div>
            </Link>
            <Link href={'mailto:hellouzoamaka@gmail.com'} target="_blank">
                <div className="h-[58px] w-[58px] flex items-center justify-center cursor-pointer bg-primary-white text-primary-black">
                    <TbMail size={22} />
                </div>
            </Link>
            <Link href={'https://www.linkedin.com/feed/'} target="_blank">
                <div className="h-[58px] w-[58px] flex items-center justify-center cursor-pointer bg-primary-white text-primary-black">
                    <FaLinkedin size={22} />
                </div>
            </Link>
        </div>
    )
}