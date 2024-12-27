import { higlightListing } from "@/constants/highlights"
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image"

export default function HighlightItem({selectedYear}:{selectedYear: number}){

    const selectedHighlight = higlightListing.find(highlight => highlight.year === selectedYear)

    return(
        <AnimatePresence>
            {selectedHighlight &&
                <motion.div
                    className="text-center mx-auto space-y-5 w-full"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1}}
                    exit={{ y: 50, opacity: 0, transition: {duration: 0.1} }}
                    transition={{duration: 1 }}
                    key={selectedYear}
                >
                    <p className="max-w-[650px] mx-auto text-white text-lg font-gelica">{selectedHighlight?.writeup}</p>
                    <div className="flex items-center justify-center w-fit gap-1 mx-auto">
                        {selectedHighlight.images.map((image, index) => (
                            <div className="h-[300px] w-[70px] relative rounded-md overflow-hidden group hover:w-[300px] duration-300 ease-in-out cursor-pointer" key={index}>
                                <Image
                                    src={image}
                                    alt=""
                                    fill
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}