"use client"
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { motion } from 'motion/react'

export default function NewsLetter(){
    const [showNewsLetter, setShowNewsLetter] = useState(false);

    useEffect(() => {
        const isShown = localStorage.getItem('newsLetter');

        if(!isShown){
            setTimeout(() => {
                setShowNewsLetter(true)
            }, 15000);
        } 
    }, []);

    const handleClose = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('newsLetter', 'shown');
        }

        setShowNewsLetter(false);
    }

    if(showNewsLetter)
    return(
        <div className="h-screen w-full bg-black/70 fixed top-0 left-0 z-[1005] pt-5 box-border px-5">
            <motion.div 
                className="max-w-[1000px] rounded-2xl bg-primary-black px-5 py-5 mx-auto relative"
                animate={{scale: 1, opacity: 1, top: 0, transition: { duration: 0.5 }}}
                initial={{scale: 0.9, opacity: 0.6, top: 200}}
            >
                <div className="flex justify-end w-full">
                    <div className="h-[40px] w-[40px] rounded-full bg-white/10 flex items-center justify-center cursor-pointer" onClick={handleClose}>
                        <FiX className="text-white text-xl" />
                    </div>
                </div>
                <div className="w-full">
                    <div className="max-w-[450px] border-box bg-primary-white rounded-t-2xl p-5 mx-auto">
                        <p className="font-autography text-primary-black text-xl">Uzoamaka Aniunoh</p>
                        <p className="font-eculid text-primary-black">The Uzoamaka Power.</p>
                        <div className="pt-5 mt-5 border-t border-primary-black border-dashed">
                            <h3 className="font-gelica text-xl font-medium text-primary-black">Hello Darling,</h3>
                            <div className="space-y-3 mt-3 text-[#696969] font-eculid text-sm">
                                <p>I just published an exclusive new article on my Medium and it’s just for you.</p>
                                <p>Fictional stories is what i’m used to writing but this came from emotions I didn’t know I had.. A fictional story is what i’m used to writing but this came from emotions I didn’t know I had..</p>
                                <p>A fictional story is what i’m used to writing but this came from emotions I didn’t know I had..</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[650px] border-box bg-primary-white rounded-2xl p-5 mx-auto">
                        <div className="max-w-[400px] mx-auto">
                            <h3 className="text-center font-gelica text-2xl font-bold">Join the Newsletter!</h3>
                            <div className="text-center space-y-3 mt-3 text-[#696969] max-w-[390px] mx-auto text-sm font-eculid">
                                <p>Be one of the first to get uzoamaka’s writings, articles, feature film trailers and many more inside gists.</p>
                                <p>If you’d like to contact uzoamaka, send an email to hellouzoamaka@gmail.com 📬</p>
                            </div>
                            <div className="max-w-[390px] mx-auto mt-5 space-y-2 font-eculid">
                                <div className="w-full h-[50px] rounded-full px-[15px] border border-[#D0D5DD] box-border">
                                    <input className="h-full w-full box-border focus:outline-none border-none bg-transparent" type="text" placeholder="Enter your name" />
                                </div>
                                <div className="w-full h-[50px] px-[5px] rounded-full border border-[#D0D5DD] box-border flex items-center">
                                    <input className="px-[10px] h-full box-border focus:outline-none border-none bg-transparent flex-1" type="email" placeholder="Enter email address" />
                                    <button className="h-[40px] w-[40px] rounded-full bg-primary-black flex items-center justify-center cursor-pointer">
                                        <FiArrowUpRight className="text-2xl text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}