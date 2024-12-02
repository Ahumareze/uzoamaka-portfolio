import Image from "next/image";
// @ts-ignore
import loadingTextLogo from '@/assets/icons/loadingTextLogo.GIF';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LoaderImage(){

    useGSAP(() => {
        let tl1 = gsap.timeline();

        tl1.to('#loader-text-animation', {
            delay: 5,
            duration: 2,
            ease: "power1.inOut",
            top: 500,
        })
    }, {})


    return(
        <div className="flex items-center justify-center w-full overflow-hidden">
            <Image
                src={loadingTextLogo}
                alt='loader text'
                className='h-[300px] relative'
                style={{objectFit: "contain"}}
                id='loader-text-animation'
            />
        </div>
    )
}