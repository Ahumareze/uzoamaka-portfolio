import HighlightsComponent from "@/components/highlights/Highlights";
import noiseLayer from '@/assets/images/noise-layer.png';

export default function Highlights(){

    const StatItem = ({number, title, details}: {number: string, title: string, details: string}) => {
        return(
            <div className="text-center space-y-5 w-full">
                <h1 className="font-gelica text-7xl md:text-[140px] font-bold text-white" data-aos="fade-up">{number}</h1>
                <div className="mt-5">
                    <p className="text-3xl font-medium text-[#FAFAFA] font-gelica" data-aos="fade-up" data-aos-duration="500">{title}</p>
                    <p className="text-[#D3D3D3] mt-2 font-eculid" data-aos="fade-up" data-aos-duration="500">{details}</p>
                </div>
            </div>
        )
    }

    return(
        <section className="w-[100vw] overflow-x-hidden min-h-screen bg-[#2d2d33] " id="highlights">
            <div className="w-full py-10 md:py-20 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${noiseLayer.src})`}}>
                <div className="px-[20px] md:px-[50px]">
                    <div className="flex items-center gap-3">
                        <div className='h-[10px] w-[10px] rounded-full bg-[#D3D3D3]' />
                        <p className='text-[#D3D3D3] text-xl font-gelica'>Highlights</p>
                    </div>
                    <h3 className="text-4xl font-gelica text-[#F1F1F1] mt-3 font-base" data-aos="fade-up">At first, uzoamaka’s interests were in telling simple stories that mirror her world. with an intent to explore acting in the future. </h3>
                    <div className="flex items-center gap-5 mt-5">
                        <div className="flex-1 h-[1px] bg-[#8B8B8B] hidden md:flex" />
                        <p className="text-[#8B8B8B] md:max-w-[280px] text-right text-xl font-eculid" data-aos="fade-left">Her love for nollywood has led to her boasting...</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 mt-10">
                        <StatItem
                            number="20+"
                            title="Film  appearances"
                            details="Cinema, Netflix, Prime etc"
                        />
                        <StatItem
                            number="10+"
                            title="Award Nominations"
                            details="She has been in her 'bag'"
                        />
                        <StatItem
                            number="5"
                            title="Award Wins"
                            details="Resume - Doings"
                        />
                    </div>
                </div>
                <HighlightsComponent />
            </div>
        </section>
    )
}