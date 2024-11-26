import Link from "next/link";
import BlogCard from "./BlogCard";
import { FaArrowRight } from "react-icons/fa";
import { BLOGS } from "@/constants/blogsListing";
import classes from './styles.module.css';

export default function Blogs(){
    return(
        <div className="w-full space-y-10 pb-10 md:pb-20 overflow-x-hidden">
            <div className="flex flex-col md:flex-row items-center gap-5 px-[20px] md:px-[50px]">
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                        <div className='h-[10px] w-[10px] rounded-full bg-[#696969]' />
                        <p className='text-[#696969] text-xl'>Blogs</p>
                    </div>
                    <h1 className="text-3xl md:text-[55px] font-bold text-[#444444] font-gelica leading-[120%]" data-aos="fade-up">UZOAMAKA'S WORDS <br />AND THOUGHTS.</h1>
                </div>
                <div>
                    <Link href={''} className="flex items-center gap-3 text-[#595959]" data-aos="fade-right">
                        <p className="text-2xl font-gelica">Read all blogs</p>
                        <FaArrowRight size={24} />
                    </Link>
                </div>
            </div>
            <div className="h-[600px]">
                <div className={` w-full flex items-center gap-5 px-5`}>
                    {BLOGS.map(({
                        image,
                        title,
                        details,
                        readMinute,
                        date
                    }, index) => (
                        <BlogCard
                            key={index}
                            image={image}
                            title={title}
                            details={details}
                            readMinute={readMinute}
                            date={date}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}