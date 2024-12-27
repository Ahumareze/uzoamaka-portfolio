"use client"

import React, { useState } from 'react';
import HighlightItem from './HighlightItem';
import gsap from 'gsap';
import StickDivider from './StickDivider';

const years = [
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
    2024
]

export default function HighlightsComponent(){
    const [selectedYear, setSelectedYear] = useState<number>(2018);

    const handleClick = (year: number, index: number) => {
        if(year === selectedYear) return

        setSelectedYear(year);
        let offsetAmount = index - 1

        if(index < 1){
            handleAnimation(1, 'backward')
        }else{
            handleAnimation(offsetAmount, 'forward')
        }

        

        return        
    };

    const handleAnimation = (offset: number, postition: 'forward' | 'backward') => {
        let tl = gsap.timeline();

        console.log(offset, postition)

        let width = (window.innerWidth/3) * offset

        tl.to('#years-listing', {
            right: postition === 'forward' ? width : -width,
            duration: 1,
            ease: 'power1.inOut'
        });

        return
    }
    
    const YearsListing = ({year, isSelected, index}:{year: number, isSelected: boolean, index: number}) => {
        return(
            <div className={`w-[calc(100vw/3)] text-center font-eculid text-xl font-medium ${isSelected ? 'text-white' : 'text-[#8B8B8B]'} group`}>
                <p className='group-hover:text-white duration-300 ease-in-out'>{year}</p>
                <div className={`h-[20px] w-[20px] mx-auto rounded-full ${isSelected ? 'bg-white' : 'bg-[#8B8B8B]'} cursor-pointer relative top-[10px] group-hover:bg-white duration-300 ease-in-out`} onClick={() => handleClick(year, index)} />
            </div>
        )
    }

    return(
        <div className='w-full pt-20 h-fit'>
            <div className='w-full border-b border-[#8B8B8B]'>
                <div className='flex items-center w-fit relative' id='years-listing'>
                    {years.map((year, index) => (
                        <YearsListing
                            year={year}
                            isSelected={selectedYear === year}
                            key={index}
                            index={index}
                        />
                    ))}
                </div>
            </div>
            <div className='w-full'>
                <StickDivider selectedYear={selectedYear} />
                <div className='relative mt-5'>
                    <HighlightItem selectedYear={selectedYear} />
                </div>
            </div>
        </div>
    )
}