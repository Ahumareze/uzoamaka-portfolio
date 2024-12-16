import Link from "next/link"
import React from "react"
import { FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { RiInstagramFill } from "react-icons/ri"
import { SiSubstack } from "react-icons/si"
import { TbMail } from "react-icons/tb"
import { motion } from "motion/react"

export default function FixedSocialCards(){

    const SocialCardItem = ({children, link, title}:{children: React.ReactNode, link: string, title: string}) => {
        const titleArr = title.split('');

        return(
            <Link href={link} target="_blank">
                <div className="h-[58px] hover:h-fit hover:py-2 w-[58px] flex items-center justify-center cursor-pointer bg-primary-white text-primary-black group hover:bg-primary-black hover:text-primary-white duration-300 ease-in-out">
                    <div className="group-hover:hidden">{children}</div>

                    <div className="hidden group-hover:flex items-center justify-center flex-col gap-[-2px]">
                        {titleArr.reverse().map((item, index) => (
                            <p 
                                className="text-white capitalize text-sm font-gelica font-extrabold rotate-[-90deg]" 
                                key={index}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                    
                </div>
            </Link>
        )
    }

    return(
        <div className="fixed top-0 left-0 z-[1000] flex items-center h-screen">
            <motion.div 
                className=""
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0}}
            >
                <SocialCardItem
                    link='https://www.instagram.com/uzoamaka_a?igsh=OGxjdXJkbnU5ZWhy'
                    title="Instagram"
                    children={<RiInstagramFill size={25} />}
                />
                <SocialCardItem
                    link='https://x.com/uzoamaka_a1?s=21&t=Kf4Ot9_zpktg2pxUHVIIug'
                    title="Twitter"
                    children={<FaXTwitter size={22}  />}
                />
                <SocialCardItem
                    link='https://substack.com/for-bloggers'
                    title="Substack"
                    children={<SiSubstack size={22} />}
                />
                <SocialCardItem
                    link='https://www.linkedin.com/feed/'
                    title="Linkedin"
                    children={<FaLinkedin size={22} />}
                />
                <SocialCardItem
                    link='mailto:hellouzoamaka@gmail.com'
                    title="Mail"
                    children={<TbMail size={22} />}
                />
            </motion.div>
        </div>
    )
}