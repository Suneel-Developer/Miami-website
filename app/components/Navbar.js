"use client"
import React, { useState } from 'react'

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    return (
        <div class="w-full" id="top">
            <div class="h-12 w-full py-3 px-4 z-[1050] flex items-center justify-between gap-3 top-0 inset-x-0 animate-fadeInDown bg-color-primary" style={{ boxShadow: "0_3px_3px_0_rgba(0,_0,_0,_0.1)" }}>
                <div class="min-w-[60px] h-6">
                    <button type="button">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="min-w-[24px] min-h-[24px] cursor-pointer text-background_color transition-[transform] duration-300 active:-translate-x-1.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                </div>

                <span class="text-background-primary text-base font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden">Miami Nusr-Et Steakhouse</span>

                <div class="min-w-[60px] h-6 flex justify-end gap-x-3">

                    {/* toggle btn  */}
                    <button type="button" onClick={toggleSidebar}>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="min-w-[24px] min-h-[24px] text-background_color" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>


            {/* Side bar  */}
            <div className={`fixed inset-0 w-full h-full bg-black bg-opacity-60 z-50 flex flex-col transform gap-2 overflow-hidden shadow-xl transition-al ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='max-w-[384px] w-full bg-background-primary h-full'>
                    <div class="w-full h-12 flex items-center justify-between py-3 px-4 sticky top-0 inset-x-0 text-center text-lg font-medium leading-6 text-primary">
                        <div class="h-6 w-6" onClick={closeSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="cursor-pointer text-color-primary"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div class="overflow-auto scrollbar-hide flex flex-col justify-between gap-y-6 pt-2 flex-grow animate-fadeIn">
                        <div class="w-full flex flex-col gap-y-8">
                            <div class="w-full flex items-center justify-center text-center">
                                <img src='/assets/logo.webp' alt="" class="object-contain w-full max-w-[210px] h-[118px] aspect-video" />
                            </div>
                            <div class="w-full flex flex-col px-6 gap-y-6">
                                <button type="button" class="w-max mb-5 text-lg font-semibold text-color-text-primary">Language (EN)</button>
                                <button type="button" class="w-max text-lg font-semibold text-color-text-primary">
                                    <div class="w-full flex items-center justify-center gap-x-2">
                                        <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-color-text-primary h-6 w-6 transition-[transform]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m13 16 5-4-5-4v3H4v2h9z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg></span>
                                        <span class="text-lg font-semibold text-color-text-primary">Login</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar





