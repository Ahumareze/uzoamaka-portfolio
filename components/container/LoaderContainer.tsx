"use client"

import React from "react";
import FixedSocialCards from "../general/FixedSocialCards";
import Loader from "../loader/Loader";
import { useLoaderStore } from "@/store/LoaderStore";

export default function LoaderContainer({children}:{children: React.ReactNode}){

    const { showLoader, setShowLoader } = useLoaderStore();

    return(
        <div className={`${showLoader && 'overflow-hidden h-screen'}`}>
            {showLoader && <Loader setShowLoader={setShowLoader} />}
            {!showLoader && <FixedSocialCards />}
            {children}
        </div>
    )
}