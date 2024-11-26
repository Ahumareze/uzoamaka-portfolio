import Image from "next/image"
import highlightImage from '@/assets/images/highlightImage.png';

export default function HighlightYears(){

    const YearItem = ({year, isSelected}: {year: string, isSelected: boolean}) => {
        return(
            <div className="cursor-pointer h-fit w-[200px]">
                <p className="text-xl font-eculid text-[#8B8B8B] text-center">{year}</p>
                <div className="h-[24px] w-[24px] rounded-full bg-[#8B8B8B] mx-auto" />
            </div>
        )
    }

    return(
        <div className="w-full h-[800px] relative overflow-hidden">
            <div className="h-full overflow-hidden flex justify-center mt-20">
                {/* <div className="flex justify-center gap-20">
                    {yearsListing.map((year, index) => (
                        <YearItem
                            year={year}
                            key={index}
                            isSelected
                        />
                    ))}
                </div> */}
                <div className="absolute w-[1800px] h-[1800px] rounded-full border-2 border-[#8B8B8B] mt-[43px] flex items-start justify-center">
                    <div className="max-w-[900px] pt-20 mt-10 text-center">
                        <p className="text-xl font-gelica text-[#FFFDF2] text-center max-w-[500px]" data-aos="fade-up">Uzoamaka’s featured film won Uzoamaka’s featured film won Uzoamaka’s featured film won Uzoamaka’s featured film won Uzoamaka’s featured film won Uzoamaka’s featured film won....</p>
                        <img src={highlightImage.src} alt="" className="mx-auto mt-10 max-h-[350px]" data-aos="fade-up" />
                    </div>
                </div>
            </div>
        </div>
    )
}