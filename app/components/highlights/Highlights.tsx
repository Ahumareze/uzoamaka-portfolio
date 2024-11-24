export default function Highlights(){

    const StatItem = ({number, title, details}: {number: string, title: string, details: string}) => {
        return(
            <div className="flex-1 text-center space-y-5">
                <h1 className="font-gelica text-7xl md:text-[140px] font-bold text-white">{number}</h1>
                <div className="mt-5">
                    <p className="text-3xl font-medium text-[#FAFAFA] font-gelica">{title}</p>
                    <p className="text-[#D3D3D3] font-gelica mt-2">{details}</p>
                </div>
            </div>
        )
    }

    return(
        <div className="w-full min-h-screen bg-[#2d2d33] py-10 md:py-20">
            <div className="px-[20px] md:px-[50px]">
                <div className="flex items-center gap-3">
                    <div className='h-[10px] w-[10px] rounded-full bg-[#D3D3D3]' />
                    <p className='text-[#D3D3D3] text-xl font-gelica'>Highlights</p>
                </div>
                <h3 className="text-4xl font-gelica text-[#F1F1F1] mt-3 font-base">At first, uzoamaka’s interests were in telling simple stories that mirror her world. with an intent to explore acting in the future. </h3>
                <div className="flex items-center gap-5 mt-5">
                    <div className="flex-1 h-[1px] bg-[#8B8B8B]" />
                    <p className="text-[#8B8B8B] max-w-[280px] text-right text-xl">Her love for nollywood has led to her boasting...</p>
                </div>
                <div className="flex items-center gap-10 md:gap-20 mt-10">
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
                        details="#D3D3D3"
                    />
                    
                </div>
            </div>
        </div>
    )
}