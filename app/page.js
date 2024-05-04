"use client"
import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
import ScrollTopArrow from './components/ScrollTopArrow';
import MenuType from './components/MenuType';
import FilterModal from './components/FilterModal';


export default function Home() {


  return (
    <main class="flex h-full min-h-screen animate-fadeIn">


      {/* Left Side  */}
      <div className="w-full max-w-full lg:max-w-[30%] min-h-screen lg:h-screen lg:min-h-screen relative flex flex-col justify-start flex-1 md:border-r md:border-solid md:border-r-[#0000004D] lg:border-r lg:border-solid lg:border-r-[#0000004D]">


        {/* Navbar  */}

        <Navbar id="top" />

        {/* Main Menu */}
        <div class="w-full flex flex-col items-center">
          <div class="w-full px-6 py-8 flex flex-col items-center justify-start gap-y-4">
            <div class="w-full flex flex-col items-center justify-center gap-y-[3px]">
              <MenuType />
              <span class="text-center text-color-text-primary">WIFI PASSWORD: 999ilovesaltbae</span>
              <span class="text-sm text-center text-color-text-primary opacity-50">All prices are in $. For your convenience an 18% service charge will be added to your final bill and will be distributed to the entire team.</span>
            </div>
          </div>
        </div>

        {/* Search bar  */}
        <div class="w-full relative flex justify-between items-center gap-x-4 px-4 pt-4">
          <div class="group relative w-full">
            <div class="absolute inset-y-0 flex items-center pointer-events-none left-0 pl-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-color-text-primary text-opacity-50 h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
            </div>
            <input type="search" name="name" placeholder="Search" autocomplete="off" class="w-full h-10 py-2 pl-10 pr-10 rounded-[26px] border border-solid border-opacity-50 border-input-border-color outline-none bg-transparent text-color-text-primary text-base placeholder:placeholder-color-text-primary" value="" />
          </div>
          <FilterModal/>
        </div>

        <Products />

        <Footer />

        <ScrollTopArrow />
      </div>



      {/* Right Side  */}
      <div class="flex-col items-center justify-center hidden lg:flex w-full max-w-[70%] select-none border border-solid border-transparent">
        <div class="flex flex-col items-center fixed">
          <div class="mb-1.5 text-center">
            <img src="/assets/logo.webp" alt="logo" height="100" class="object-contain max-w-full h-[100px]" />
          </div>
          <div class="w-full h-px bg-color-primary max-w-[400px] my-2.5"></div>
          <p class="font-semibold text-[22px] leading-[30px] text-color-text-primary">Miami Nusr-Et Steakhouse</p>
        </div>
      </div>


    </main>
  );
}
