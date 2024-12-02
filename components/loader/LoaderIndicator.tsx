import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function LoaderIndicator(){

    useGSAP(() => {
        let tl  = gsap.timeline();

        tl.to('#loader-indicator', {
            width: '100%',
            duration: 10,
            ease: 'power1.inOut'
        })
    }, {})

    return(
        <div className="w-[300px] h-[6px] bg-white/30 rounded-xl">
            <div className="h-full w-[5%] bg-white rounded-full" id="loader-indicator" />
        </div>
    )
}