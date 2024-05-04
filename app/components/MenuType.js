"use client"
import React, { useState, useEffect } from 'react';


const MenuType = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('Main Menu');

    const handleMenuSelect = (menu) => {
        setSelectedMenu(menu);
        setShowModal(false);
        localStorage.setItem('selectedMenu', menu); // Save selected menu to local storage
    };

    useEffect(() => {
        // Retrieve selected menu from local storage on component mount
        const storedMenu = localStorage.getItem('selectedMenu');
        if (storedMenu) {
            setSelectedMenu(storedMenu);
        }
    }, []); // Run only on component mount

    const menuOptions = [
        { label: 'Main Menu', value: 'Main Menu' },
        { label: 'Wine Selection', value: 'Wine Selection' },
        { label: 'Bar Menu', value: 'Bar Menu' },
        { label: 'Non-Alcoholic & Other Beverages', value: 'Non-Alcoholic & Other Beverages' },
    ];

    return (
        <div className='relative'>
            {/* button  */}
            <button type="button" onClick={() => setShowModal(true)} className="flex items-center justify-center gap-x-1">
                <span className="text-xl text-center font-bold text-color-text-primary">{selectedMenu}</span>

                <span className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-center font-bold text-color-text-primary w-6 h-6"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </span>
            </button>


            {/* Modal  */}
            {showModal && (
                <div className='fixed flex justify-center items-center inset-0 bg-opacity-60 bg-black' style={{ zIndex: "10000" }}>
                    <div className="my-0 flex w-full lg:w-[480px] lg:h-auto transform flex-col gap-2 overflow-hidden rounded-t-2xl lg:rounded-b-2xl text-left align-middle shadow-xl transition-all mx-0 bg-background-primary opacity-100 translate-y-0" style={{ maxHeight: "652px", minHeight: "unset" }}>
                        <div className="p-4 flex items-center justify-between space-x-2 text-center text-lg font-medium leading-6 text-primary">
                            <div className="flex flex-1"></div>

                            <p className="text-base font-semibold justify-center flex grow text-color-text-primary">Select a Menu</p>

                            {/* close modal  */}
                            <span className="flex justify-end flex-1 shrink cursor-pointer" >
                                <img src="/assets/close-toggle.svg" alt="close" onClick={() => setShowModal(false)} />
                            </span>
                        </div>
                        <div className="overflow-auto scrollbar-hide p-4 lg:max-h-[664px]">
                            <div className="w-full grid grid-cols-1 divide-y divide-solid divide-color-text-primary divide-opacity-10">
                                {menuOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        className="flex justify-between items-center py-4 transition-all duration-300 sm:hover:font-semibold"
                                        onClick={() => handleMenuSelect(option.value)}
                                    >
                                        <div className="flex items-center">
                                            <p className="text-color-text-primary text-left">{option.label}</p>
                                        </div>
                                        <div className="flex">
                                            <img src="/assets/right-arrow-white.svg" alt="right-arrow" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default MenuType