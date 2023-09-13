import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <Navbar />
            <div className="mt-16 w-20 fixed hidden md:flex flex-col inset-y-0">
                <Sidebar isPro={true} />
            </div>
            <main className="md:pt-20 pt-16 h-full">{children}</main>
        </div>
    );
};

export default RootLayout;
