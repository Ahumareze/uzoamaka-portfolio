"use client"

import React from "react";
import FixedSocialCards from "../general/FixedSocialCards";
import Loader from "../loader/Loader";
import { useGeneralStore } from "@/store/generalStore";
import Header from "../general/Header";
import NewsLetter from "../newsLetter/NewsLetter";
import Menu from "./Menu";

export default function LoaderContainer({children}:{children: React.ReactNode}){

    const { showLoader, setShowLoader, showHeader } = useGeneralStore();

    return(
        <div className={`${(showLoader || showHeader) && 'overflow-hidden h-screen'}`}>
            {showLoader && <Loader setShowLoader={setShowLoader} />}
            {showHeader && <Menu />}
            <Header />
            {!showLoader && <NewsLetter />}
            {!showLoader && <FixedSocialCards />}
            {children}
        </div>
    )
}