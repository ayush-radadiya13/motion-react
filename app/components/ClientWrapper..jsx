"use client"

import React, { useState } from "react"
import LoadingOverlay from "@/app/components/PageTransition";
import {Header} from "@/app/components/header";

export function ClientWrapper({ children }) {
    const [loading, setLoading] = useState(false)

    return (
        <>
            <LoadingOverlay setLoading={setLoading} />
            {!loading && <Header />}
            {!loading && children}
        </>
    )
}
