"use client"
// import { useEffect } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
gsap.registerPlugin()

function LargeText({text}: {text: string}) {

    useGSAP(() => {
        gsap.to('#large-text-element', {
            // color: '#ff0000',
            top: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.1,
            ease: "power1.out",
        })
    }, {})

    return (
        <div className='flex items-center gap-2'>
            {text.split('').map((i, idx) => (
                <div
                    key={idx}
                >
                    {i === ' ' ? <div className='w-[30px]' />
                    :
                    <h1 
                        className='text-white text-9xl font-extrabold m-0 p-0 font-gelica' 
                        id='large-text-element' 
                        key={idx}
                    >
                        {i}
                    </h1>
                    }
                </div>
            ))}
        </div>
    )
}

export default LargeText