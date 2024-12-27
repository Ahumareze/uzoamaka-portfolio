import { AnimatePresence, motion } from "motion/react";

export default function StickDivider({selectedYear}:{selectedYear: number}){
    return(
        <div className="relative h-20 mx-auto overflow-hidden w-[20px]">
        <AnimatePresence>
            <motion.div 
                className="mx-auto h-20 w-[20px] border-b-[2px] border-white absolute top-0 left-0"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 100}}
                transition={{duration: 1 }}
                key={selectedYear}
            >
                <div className="h-20 w-[2px] mx-auto bg-white" />
            </motion.div>
        </AnimatePresence>
        </div>
    )
}