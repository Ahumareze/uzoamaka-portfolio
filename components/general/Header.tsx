export default function Header(){
    return(
        <div className="w-full px-[20px] md:px-[50px] py-[30px] flex items-center text-white fixed top-0 left-0">
            <div>

            </div>
            <div className="flex-1 flex items-center justify-center gap-20 font-gelica font-bold text-lg text-primary-white">
                <p className="cursor-pointer">PROFILE</p>
                <p className="cursor-pointer">FILMS</p>
                <p className="cursor-pointer">BLOGS</p>
                <p className="cursor-pointer">HIGHLIGHTS</p>
            </div>
            <div>
                <p>Menu</p>
            </div>
        </div>
    )
}