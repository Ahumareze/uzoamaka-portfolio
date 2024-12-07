"use client"

import React from "react";
import FixedSocialCards from "../general/FixedSocialCards";
import Loader from "../loader/Loader";
import { useLoaderStore } from "@/store/LoaderStore";
import Header from "../general/Header";

export default function LoaderContainer({children}:{children: React.ReactNode}){

    const { showLoader, setShowLoader } = useLoaderStore();

    return(
        <div className={`${showLoader && 'overflow-hidden h-screen'}`}>
            {showLoader && <Loader setShowLoader={setShowLoader} />}
            <Header />
            {!showLoader && <FixedSocialCards />}
            {children}
        </div>
    )
}