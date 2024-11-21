import Header from "@/components/general/Header";
// import Loader from "@/components/loader/Loader";
import Hero from "./components/hero/Hero";
import { FaArrowRight } from "react-icons/fa";
import Biography from "./components/biography/Biography";

export default function Home() {
  return (
    <main className="bg-primary-white">
      {/* <Loader /> */}
      <Header />
      <Hero />
      <div className="w-full px-[20px] md:px-[50px] py-12 bg-primary-white flex gap-10 flex-col lg:flex-row">
        <div className="flex-1">
          <p className="max-w-[550px] text-lg leading-[140%] font-gelica">Uzoamaka Aniunoh is a vibrant and dynamic Nigerian actor, writer and director, renowned for her captivating presence on digital platforms.</p>
        </div>
        <div className="flex items-center w-fit bg-[#222229] text-primary-white h-[70px] px-[20px] rounded-md gap-5 cursor-pointer">
          <p className="text-xl font-extrabold font-gelica">HELLOUZOAMAKA@GMAIL.COM</p>
          <FaArrowRight size={25} />
        </div>
      </div>
      <Biography />
    </main>
  );
}
