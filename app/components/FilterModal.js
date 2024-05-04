"use client"
import React, { useState } from 'react';

const FilterModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [showFirstCourse, setShowFirstCourse] = useState(true);

    const toggleFirstCourse = () => {
        setShowFirstCourse(!showFirstCourse);
    };

    return (
        <div className='relative'>
            {/* button  */}
            <button type="button" onClick={() => setShowModal(true)} className="flex items-center justify-center gap-x-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="w-6 h-6 text-color-text-primary cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 14.5c-1.58 0-2.903 1.06-3.337 2.5H2v2h2.163c.434 1.44 1.757 2.5 3.337 2.5s2.903-1.06 3.337-2.5H22v-2H10.837c-.434-1.44-1.757-2.5-3.337-2.5zm0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5S9 17.173 9 18s-.673 1.5-1.5 1.5zm9-11c-1.58 0-2.903 1.06-3.337 2.5H2v2h11.163c.434 1.44 1.757 2.5 3.337 2.5s2.903-1.06 3.337-2.5H22v-2h-2.163c-.434-1.44-1.757-2.5-3.337-2.5zm0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"></path><path d="M12.837 5C12.403 3.56 11.08 2.5 9.5 2.5S6.597 3.56 6.163 5H2v2h4.163C6.597 8.44 7.92 9.5 9.5 9.5s2.903-1.06 3.337-2.5h9.288V5h-9.288zM9.5 7.5C8.673 7.5 8 6.827 8 6s.673-1.5 1.5-1.5S11 5.173 11 6s-.673 1.5-1.5 1.5z"></path></svg>
            </button>


            {/* Modal  */}
            {showModal && (
                <div className='fixed flex justify-center items-center inset-0 bg-opacity-60 bg-black' style={{ zIndex: "10000" }}>
                    <div class="my-0 flex w-full lg:w-[480px] lg:h-auto transform flex-col gap-2 overflow-hidden rounded-t-2xl lg:rounded-b-2xl text-left align-middle shadow-xl transition-all mx-0 bg-background-primary translate-y-0" style={{ maxHeight: "652px", minHeight: "unset" }}>
                        <div class="p-4 flex items-center justify-between gap-2 text-center">
                            <button class="underline text-start text-base text-color-primary font-semibold capitalize truncate">Clear All</button>
                            <p class="text-base font-semibold text-color-text-primary">Filter</p>
                            <img src="/assets/close-toggle.svg" alt="close" class="cursor-pointer" onClick={() => setShowModal(false)} />
                        </div>

                        <div class="overflow-auto scrollbar-hide p-4 lg:max-h-[664px]">
                            <div class="w-full flex flex-col items-start">
                                <div class="w-full flex flex-col items-start gap-y-2">
                                    <button class="w-full flex items-center justify-between gap-x-2 py-3" onClick={toggleFirstCourse}>
                                        <p class="text-color-text-primary text-start truncate font-bold text-base flex-auto">Ingredients</p>
                                        <div class="flex-none">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class={`h-6 w-6 text-color-text-primary font-bold  text-base transition-all ${!showFirstCourse ? 'rotate-180' : ''}`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg>
                                        </div>
                                    </button>
                                    {showFirstCourse && (
                                        <div className='flex flex-col gap-y-2'>
                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="alcohol" type="checkbox" name="alcohol" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="alcohol" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Alcohol</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="dairy" type="checkbox" name="dairy" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="dairy" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Dairy</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="egg" type="checkbox" name="egg" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="egg" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Egg</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="garlic" type="checkbox" name="garlic" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="garlic" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Garlic</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="gulten" type="checkbox" name="gulten" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="gulten" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Gutlten</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="mushroom" type="checkbox" name="mushroom" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="mushroom" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Mushroom</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="mustard" type="checkbox" name="mustard" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="mustard" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Mustard</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="nuts" type="checkbox" name="nuts" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="nuts" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Nuts</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="onion" type="checkbox" name="onion" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="onion" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Onion</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="raw" type="checkbox" name="raw" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="raw" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Raw</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="seafood" type="checkbox" name="seafood" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="seafood" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Seafood</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="sesame" type="checkbox" name="sesame" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="sesame" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Sesame</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="soybean" type="checkbox" name="soybean" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="soybean" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Soybean</span>
                                                </label>
                                            </div>

                                            <div class="flex items-start gap-x-3 w-full">
                                                <input id="oil" type="checkbox" name="oil" class="w-4 h-4 border border-solid rounded transition-all bg-transparent text-highlight_color border-input cursor-pointer active:scale-105 mt-1" value="false" />
                                                <label for="oil" class="text-sm font-semibold active:translate-y-1 transition-all text-color-text-primary cursor-pointer">
                                                    <span class="text-primary text-base font-normal">Truffle Oil</span>
                                                </label>
                                            </div>
                                        </div>

                                    )}

                                </div>
                            </div>
                        </div>
                        <div class="static bottom-0 w-full p-4 border-t border-color-text-primary border-opacity-10">
                            <button type="button" class="flex flex-row items-center justify-center gap-3 font-semibold active:scale-[.99] transition-all bg-color-primary text-background_color hocus:bg-highlight_color-900 py-3 px-6 h-12 text-base rounded-md w-full">Filter</button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default FilterModal