"use client"

import React, { useState } from "react";
import FixedSocialCards from "../general/FixedSocialCards";
import Loader from "../loader/Loader";
import { useGeneralStore } from "@/store/generalStore";
import Header from "../general/Header";
import NewsLetter from "../newsLetter/NewsLetter";
import Menu from "./Menu";

export default function LoaderContainer({children}:{children: React.ReactNode}){
    const [closeMenu, setCloseMenu] = useState(false);

    const { showLoader, setShowLoader, showHeader, setShowHeader } = useGeneralStore();

    const handleMenuClick = (event: boolean) => {
        console.log(event)
        if(event){
            setShowHeader(event);
            setCloseMenu(false)
        }else{
            setCloseMenu(true)
        }
    }
    

    return(
        <div className={`${(showLoader) && 'h-screen'} ${(showHeader || showLoader) && 'overflow-hidden'}`}>
            {showLoader && <Loader setShowLoader={setShowLoader} />}
            {showHeader && <Menu closeMenu={closeMenu} />}
            <Header handleMenuClick={handleMenuClick} />
            {!showLoader && <NewsLetter />}
            {!showLoader && <FixedSocialCards />}
            {children}
        </div>
    )
}