import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import menuIcon from '@/assets/icons/menu-icon.svg';
import Image from "next/image";

export default function Header(){

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.to('#header-title', {
            top: 0,
            delay: 8.5,
            ease: 'power1.inOut',
            duration: 0.8
        });

        tl.to('#header-nav-item', {
            top: 0,
            duration: 0.7,
            stagger: 0.1,
            opacity: 1,
            ease: 'power1.inOut'
        })

    }, {})

    return(
        <div className="w-full px-[20px] md:px-[50px] py-[30px] flex items-center text-white fixed top-0 left-0 z-[1000]">
            <div className="md:w-[250px]">
                <Link href='/' className="flex-wrap">
                    <h1 className="font-autography text-xl md:text-3xl text-white relative top-[-200px]" id="header-title">Uzoamaka Anuoah</h1>
                </Link>
            </div>
            <div className="flex-1 flex items-center justify-center gap-20 font-gelica font-bold text-lg text-primary-white">
                <p className="cursor-pointer top-[50px] opacity-0 relative" id="header-nav-item">PROFILE</p>
                <p className="cursor-pointer top-[50px] opacity-0 relative" id="header-nav-item">FILMS</p>
                <p className="cursor-pointer top-[50px] opacity-0 relative" id="header-nav-item">BLOGS</p>
                <p className="cursor-pointer top-[50px] opacity-0 relative" id="header-nav-item">HIGHLIGHTS</p>
            </div>
            <div className="md:w-[250px] flex items-center justify-end">
                <div className="flex items-center justify-end gap-2 cursor-pointer top-[50px] opacity-0 relative" id="header-nav-item">
                    <p className="font-eculid font-medium text-lg">Menu</p>
                    <Image src={menuIcon} alt="" className="h-[28px] w-[47px]" />
                </div>
            </div>
        </div>
    )
}