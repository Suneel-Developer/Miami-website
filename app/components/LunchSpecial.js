"use client"
import React, { useState } from 'react'


const dataappetizers = [
    {
        name: 'NUSRET SPECIAL SALAD',
        description: 'GARDEN GREENS, WALNUTS, GOAT CHEESE, CHERRY TOMATOES BLACK RAISIN, POMEGRANATE MOLASSES  ',
        productImage: '/assets/appetizers-1.webp',
        productimages: ['/assets/6.svg', '/assets/1.svg']
    },

    {
        name: 'MEAT SUSHI',
        description: 'AVOCADO CREAM, CRISPY POTATO  ',
        productImage: '/assets/appetizers-2.webp',
        productimages: ['/assets/2.svg', '/assets/1.svg', '/assets/5.svg']
    },

    {
        name: 'SALMON TARTARE',
        description: 'QUINOA SALAD, CAPERS, SOUR AVOCADO, AJI AMARILLO AIOLE  ',
        productImage: '/assets/appetizers-3.webp',
        productimages: ['/assets/3.svg', '/assets/2.svg']
    },
    {
        name: 'BABY ARUGULA & AVOCADO SALAD',
        description: 'CHERRY TOMATOES, PARMESAN, PINE NUTS, ORANGE, BALSAMIC DRESSING  ',
        productImage: '/assets/appetizers-4.webp',
        productimages: ['/assets/1.svg', '/assets/6.svg']
    },
    {
        name: 'CAESAR SALAD',
        description: 'BABY ROMAINE LETTUCE, PARMESAN CHEESE, GARLIC CROUTON, DRESSING  ',
        productImage: '/assets/appetizers-5.webp',
        productimages: ['/assets/1.svg', '/assets/5.svg']
    },
    {
        name: 'STEAK TARTARE (Upgrade $14)',
        description: 'Dijon Mustard, Shallots, Capers, Chili Sauce, Cognac, Olive Oil & Crispy Potato',
        price: '$14.00',
        productImage: '/assets/appetizers-6.webp',
        productimages: ['/assets/1.svg', '/assets/3.svg', '/assets/4.svg', '/assets/2.svg']
    },
    {
        name: '6 PIECES OF MARKET OYSTERS (Upgrade $12)',
        description: 'Market Oysters with Cocktail sauce and Vinaigrette ',
        price: '$12 1/2 dozen.00',
        productImage: '/assets/appetizers-7.webp',
        productimages: ['/assets/2.svg']
    },
    {
        name: 'BURRATA (Upgrade $10)',
        description: 'Basil, Pesto, Arugula ',
        price: '$10.00',
        productImage: '/assets/appetizers-8.webp',
        productimages: ['/assets/1.svg', '/assets/6.svg']
    },

];

const maincourses = [
    {
        name: 'FAROE ISLAND SALMON',
        description: ' WITH STEAMED VEGETABLES ',
        productImage: '/assets/main-courses-1.webp',
    },

    {
        name: 'JUICY WAGYU BURGER 5OZ',
        description: ' WITH HERB CRUSTED FRIES ',
        productImage: '/assets/main-courses-2.webp',
    },

    {
        name: 'MEAT HEART WITH CHEESE',
        description: ' WITH HERB CRUSTED FRIES ',
        productImage: '/assets/main-courses-3.webp',
    },
    {
        name: 'USDA PRIME NEW YORK STEAK 5OZ',
        description: ' WITH SAUTEED MUSHROOM OR HOUSE-MADE YUKON MASHED POTATO ',
        productImage: '/assets/main-courses-7.webp',
    },
    {
        name: 'USDA PRIME FILET MIGNON 5OZ',
        description: 'WITH SAUTEED MUSHROOM OR HOUSE-MADE YUKON MASHED POTATO ',
        productImage: '/assets/main-courses-5.webp',
    },
    {
        name: 'ŞAŞLIK (Upgrade $22)',
        description: 'Buttermilk & Spice Marinated Wagyu Tenderloin Pieces, Shallots(9 Oz) ',
        price: '$22.00',
        productImage: '/assets/main-courses-6.webp',
    },
    {
        name: 'NEW YORK STRIPLOIN 10 OZ (Upgrade $21)',
        description: 'Thick Cut New York Steak (10 Oz) ',
        price: '$21.00 for per dozen',
        productImage: '/assets/main-courses-7.webp',
    },


];


const datadesserts = [
    {
        name: 'AUTHENTIC PISTACHIO BAKLAVA (Upgrade $9)',
        description: 'Our Signature Baklava with Maraş Ice Cream, Enjoy the Show! ',
        price: "$9.00",
        productImage: '/assets/dessert-1.webp',
    },

    {
        name: 'AUTHENTIC BAKLAVA',
        description: ' WITH WALNUT ',
        productImage: '/assets/desserts-2.webp',
    },

    {
        name: 'TRADITIONAL TURKISH ICE CREAM',
        productImage: '/assets/desserts-3.webp',
    },


];

const beveragesWine = [
    {
        name: 'HOUSE WHITE WINE',
        price: "$14.00",
        productImage: '/assets/wine-1.webp',
    },

    {
        name: 'HOUSE RED WINE',
        price: "$14.00",
        productImage: '/assets/wine-2.webp',
    },

    {
        name: 'C ANTEEN WINE',
        description: "750ML",
        price: "$65.00",
        productImage: '/assets/wine-3.webp',
    },


];

const beveragesCocktails = [
    {
        name: 'APEROL SPRITZ',
        price: "$10.00",
        productImage: '/assets/cocktail-1.webp',
    },

    {
        name: 'LYCHEE MARTINI',
        price: "$10.00",
        productImage: '/assets/cocktail-2.webp',
    },

    {
        name: 'HOUSE LIQUOR',
        description: "WITH SINGLE MIX ",
        price: "$15.00",
        productImage: '/assets/cocktail-3.webp',
    },


];

const beveragesBeers = [
    {
        name: 'HEINEKEN',
        price: "$6.00",
        productImage: '/assets/beer-2.webp',
    },

    {
        name: 'STELLA ARTOIS',
        price: "$6.00",
        productImage: '/assets/beer-1.webp',
    },
];


const beveragesSoftDrinks = [
    {
        name: 'COKE',
        price: "$5.00",
        productImage: '/assets/softdrink-1.webp',
    },

    {
        name: 'DIET COKE',
        price: "$5.00",
        productImage: '/assets/softdrink-2.webp',
    },
    {
        name: 'SPRITE',
        price: "$5.00",
        productImage: '/assets/softdrink-3.webp',
    },
];
const beveragesHotCoffees = [
    {
        name: 'HOT COFFEES SELECTION',
        price: "$5.00",
        productImage: '/assets/hot-coffee-1.webp',
    },

];


const LunchSpecial = () => {

    const [showFirstCourse, setShowFirstCourse] = useState(false);
    const [showSecondCourse, setShowSecondCourse] = useState(false);
    const [showThirdCourse, setShowThirdCourse] = useState(false);
    const [showFourthCourse, setShowFourthCourse] = useState(false);
    const [showWine, setShowWine] = useState(false);
    const [showCocktail, setShowCocktail] = useState(false);
    const [showBeer, setShowBeer] = useState(false);
    const [showSoftDrink, setShowSoftDrink] = useState(false);
    const [showHotCoffess, setShowHotCoffess] = useState(false);

    const toggleFirstCourse = () => {
        setShowFirstCourse(!showFirstCourse);
    };

    const toggleSecondCourse = () => {
        setShowSecondCourse(!showSecondCourse);
    };

    const toggleThirdCourse = () => {
        setShowThirdCourse(!showThirdCourse);
    };

    const toggleFourthCourse = () => {
        setShowFourthCourse(!showFourthCourse);
    };

    const toggleWine = () => {
        setShowWine(!showWine);
    };

    const toggleCockTail = () => {
        setShowCocktail(!showCocktail);
    };

    const toggleBeer = () => {
        setShowBeer(!showBeer);
    };
    const toggleSoftDrink = () => {
        setShowSoftDrink(!showSoftDrink);
    };
    const toggleHotCoffee = () => {
        setShowHotCoffess(!showHotCoffess);
    };
    return (
        <div id='lunchSpecial'>
            <div className='bg-background-secondary w-full flex flex-col p-4 pb-20'>
                <img
                    src="/assets/lunch-special-main.webp"
                    alt="Lunch Special"
                    className="w-full rounded-md mb-3 aspect-[3/1] object-cover"
                    loading="lazy"
                />
                <span className="text-xl font-bold text-center text-color-text-primary">LUNCH SPECIAL</span>


                {/* 1. APPETIZERS 1.Course  */}
                <div class={`w-full flex flex-col mt-4 gap-2 ${showFirstCourse ? ' border border-color-primary rounded-lg px-2 pt-3 pb-6' : ''}`}>
                    {/* button  */}
                    <button onClick={toggleFirstCourse} class={`w-full flex bg-background-primary items-center justify-between border border-solid rounded-lg transition-all gap-2 py-3 px-4 active:translate-y-[4px] hocus:translate-y-[4px] border-input-border-color ${showFirstCourse ? ' border-color-primary border-opacity-30' : ' border-opacity-10'}`}>
                        <span class={`text-start text-lg font-semibold line-clamp-1 break-words ${showFirstCourse ? ' text-color-primary' : 'text-color-text-primary'}`}>APPETIZERS 1.Course</span>
                        <img src={`/assets/${showFirstCourse ? 'up-dropdwon-arrow' : 'down-arrow'}.svg`} className={` ${showFirstCourse ? ' rotate-90' : ''}`} alt="" />
                    </button>

                    {/* Show that products  */}
                    {showFirstCourse && (
                        <div className='flex items-center justify-center flex-col gap-2'>
                            <span class="text-base font-normal text-color-text-primary text-center pb-4">Choose one only</span>
                            {dataappetizers.map((appetizersitem, index) => (
                                <div key={index} className="w-full cursor-pointer relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px] bg-[#212121]" style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)" }}>
                                    <div className="my-3 mr-3 ml-3">
                                        <div className="w-full flex gap-2 min-h-16">
                                            <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2">
                                                <span className="text-color-text-primary text-base font-bold line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{appetizersitem.name}</span>
                                                <span className="text-color-text-primary text-base font-normal line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{appetizersitem.description}</span>
                                                <span className="items-center text-color-primary text-base font-semibold line-clamp-2 break-words text-start">{appetizersitem.price}</span>

                                                <div className='flex flex-wrap gap-2'>
                                                    {appetizersitem.productimages.map((image, idx) => (
                                                        <img key={idx} src={image} alt={`Product Image ${idx}`} className="object-cover rounded" />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-grow-0 justify-between items-end gap-2 p-0">
                                                <div className="relative">
                                                    <img src={appetizersitem.productImage} alt="" width="100" height="100" className="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute z-[2] top-0 end-0 flex items-start justify-end gap-x-0.5 m-4">
                                            <button type="button" className="flex items-center justify-center p-1 gap-x-0.5 rounded-xl bg-background-primary" style={{ boxShadow: "0px 1.2px 2.4px -1.2px rgba(0, 0, 0, 0.05), 0px 2.4px 3.6px -0.6px rgba(0, 0, 0, 0.10)" }}>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="min-w-[14px] min-h-[14px] text-color-text-primary" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* 2. MAIN COURSES 2.Course  */}
                <div class={`w-full flex flex-col mt-4 gap-2 ${showSecondCourse ? ' border border-color-primary rounded-lg px-2 pt-3 pb-6' : ''}`}>
                    {/* button  */}
                    <button onClick={toggleSecondCourse} class={`w-full flex bg-background-primary items-center justify-between border border-solid rounded-lg transition-all gap-2 py-3 px-4 active:translate-y-[4px] hocus:translate-y-[4px] border-input-border-color ${showSecondCourse ? ' border-color-primary border-opacity-30' : ' border-opacity-10'}`}>
                        <span class={`text-start text-lg font-semibold line-clamp-1 break-words ${showSecondCourse ? ' text-color-primary' : 'text-color-text-primary'}`}>MAIN COURSES 2.Course</span>
                        <img src={`/assets/${showSecondCourse ? 'up-dropdwon-arrow' : 'down-arrow'}.svg`} className={` ${showSecondCourse ? ' rotate-90' : ''}`} alt="" />
                    </button>

                    {/* Show that products  */}
                    {showSecondCourse && (
                        <div className='flex items-center justify-center flex-col gap-2'>
                            <span class="text-base font-normal text-color-text-primary text-center pb-4">Choose one only</span>
                            {maincourses.map((maincourses, index) => (
                                <div key={index} className="w-full cursor-pointer relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px] bg-[#212121]" style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)" }}>
                                    <div className="my-3 mr-3 ml-3">
                                        <div className="w-full flex gap-2 min-h-16">
                                            <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2">
                                                <span className="text-color-text-primary text-base font-bold line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{maincourses.name}</span>
                                                <span className="text-color-text-primary text-base font-normal line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{maincourses.description}</span>
                                                <span className="items-center text-color-primary text-base font-semibold line-clamp-2 break-words text-start">{maincourses.price}</span>

                                            </div>
                                            <div className="flex flex-col flex-grow-0 justify-between items-end gap-2 p-0">
                                                <div className="relative">
                                                    <img src={maincourses.productImage} alt="" width="100" height="100" className="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute z-[2] top-0 end-0 flex items-start justify-end gap-x-0.5 m-4">
                                            <button type="button" className="flex items-center justify-center p-1 gap-x-0.5 rounded-xl bg-background-primary" style={{ boxShadow: "0px 1.2px 2.4px -1.2px rgba(0, 0, 0, 0.05), 0px 2.4px 3.6px -0.6px rgba(0, 0, 0, 0.10)" }}>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="min-w-[14px] min-h-[14px] text-color-text-primary" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* 3. DESSERTS 3.Course  */}
                <div class={`w-full flex flex-col mt-4 gap-2 ${showThirdCourse ? ' border border-color-primary rounded-lg px-2 pt-3 pb-6' : ''}`}>
                    {/* button  */}
                    <button onClick={toggleThirdCourse} class={`w-full flex bg-background-primary items-center justify-between border border-solid rounded-lg transition-all gap-2 py-3 px-4 active:translate-y-[4px] hocus:translate-y-[4px] border-input-border-color ${showThirdCourse ? ' border-color-primary border-opacity-30' : ' border-opacity-10'}`}>
                        <span class={`text-start text-lg font-semibold line-clamp-1 break-words ${showThirdCourse ? ' text-color-primary' : 'text-color-text-primary'}`}>DESSERTS 3.Course</span>
                        <img src={`/assets/${showThirdCourse ? 'up-dropdwon-arrow' : 'down-arrow'}.svg`} className={` ${showThirdCourse ? ' rotate-90' : ''}`} alt="" />
                    </button>

                    {/* Show that products  */}
                    {showThirdCourse && (
                        <div className='flex items-center justify-center flex-col gap-2'>
                            <span class="text-base font-normal text-color-text-primary text-center pb-4">Choose one only</span>
                            {datadesserts.map((datadesserts, index) => (
                                <div key={index} className="w-full cursor-pointer relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px] bg-[#212121]" style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)" }}>
                                    <div className="my-3 mr-3 ml-3">
                                        <div className="w-full flex gap-2 min-h-16">
                                            <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2">
                                                <span className="text-color-text-primary text-base font-bold line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{datadesserts.name}</span>
                                                <span className="text-color-text-primary text-base font-normal line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{datadesserts.description}</span>
                                                <span className="items-center text-color-primary text-base font-semibold line-clamp-2 break-words text-start">{datadesserts.price}</span>
                                            </div>
                                            <div className="flex flex-col flex-grow-0 justify-between items-end gap-2 p-0">
                                                <div className="relative">
                                                    <img src={datadesserts.productImage} alt="" width="100" height="100" className="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute z-[2] top-0 end-0 flex items-start justify-end gap-x-0.5 m-4">
                                            <button type="button" className="flex items-center justify-center p-1 gap-x-0.5 rounded-xl bg-background-primary" style={{ boxShadow: "0px 1.2px 2.4px -1.2px rgba(0, 0, 0, 0.05), 0px 2.4px 3.6px -0.6px rgba(0, 0, 0, 0.10)" }}>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="min-w-[14px] min-h-[14px] text-color-text-primary" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>


                {/* 4. BEVERAGES  */}
                <div class={`w-full flex flex-col mt-4 gap-2 ${showFourthCourse ? ' border border-color-primary rounded-lg px-2 pt-3 pb-6' : ''}`}>
                    {/* button  */}
                    <button onClick={toggleFourthCourse} class={`w-full flex bg-background-primary items-center justify-between border border-solid rounded-lg transition-all gap-2 py-3 px-4 active:translate-y-[4px] hocus:translate-y-[4px] border-input-border-color ${showFourthCourse ? ' border-color-primary border-opacity-30' : ' border-opacity-10'}`}>
                        <span class={`text-start text-lg font-semibold line-clamp-1 break-words ${showFourthCourse ? ' text-color-primary' : 'text-color-text-primary'}`}>BEVERAGES</span>
                        <img src={`/assets/${showFourthCourse ? 'up-dropdwon-arrow' : 'down-arrow'}.svg`} className={` ${showFourthCourse ? ' rotate-90' : ''}`} alt="" />
                    </button>

                    {/* Show that products  */}
                    {showFourthCourse && (
                        <div className='flex items-center justify-center flex-col'>

                            {/* Wine  */}
                            <div class={`w-full flex flex-col mt-4 gap-2 ${showWine ? ' border border-color-primary rounded-lg px-2 pt-3 pb-6' : ''}`}>
                                {/* button  */}
                                <button onClick={toggleWine} class={`w-full flex bg-background-primary items-center justify-between border border-solid rounded-lg transition-all gap-2 py-3 px-4 active:translate-y-[4px] hocus:translate-y-[4px] border-input-border-color ${showWine ? ' border-color-primary border-opacity-30' : ' border-opacity-10'}`}>
                                    <span class={`text-start text-lg font-semibold line-clamp-1 break-words ${showWine ? ' text-color-primary' : 'text-color-text-primary'}`}>WINE</span>
                                    <img src={`/assets/${showWine ? 'up-dropdwon-arrow' : 'down-arrow'}.svg`} className={` ${showWine ? ' rotate-90' : ''}`} alt="" />
                                </button>

                                {/* Show that products  */}
                                {showWine && (
                                    <div className='flex items-center justify-center flex-col gap-2'>
                                        {beveragesWine.map((beveragesWine, index) => (
                                            <div key={index} className="w-full cursor-pointer relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px] bg-[#212121]" style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)" }}>
                                                <div className="my-3 mr-3 ml-3">
                                                    <div className="w-full flex gap-2 min-h-16">
                                                        <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2">
                                                            <span className="text-color-text-primary text-base font-bold line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{beveragesWine.name}</span>
                                                            <span className="text-color-text-primary text-base font-normal line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{beveragesWine.description}</span>
                                                            <span className="items-center text-color-primary text-base font-semibold line-clamp-2 break-words text-start">{beveragesWine.price}</span>
                                                        </div>
                                                        <div className="flex flex-col flex-grow-0 justify-between items-end gap-2 p-0">
                                                            <div className="relative">
                                                                <img src={beveragesWine.productImage} alt="" width="100" height="100" className="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded" loading="lazy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute z-[2] top-0 end-0 flex items-start justify-end gap-x-0.5 m-4">
                                                        <button type="button" className="flex items-center justify-center p-1 gap-x-0.5 rounded-xl bg-background-primary" style={{ boxShadow: "0px 1.2px 2.4px -1.2px rgba(0, 0, 0, 0.05), 0px 2.4px 3.6px -0.6px rgba(0, 0, 0, 0.10)" }}>
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="min-w-[14px] min-h-[14px] text-color-text-primary" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Cocktail  */}
                            <div class={`w-full flex flex-col mt-4 gap-2 ${showCocktail ? ' border border-color-primary rounded-lg px-2 pt-3 pb-6' : ''}`}>
                                {/* button  */}
                                <button onClick={toggleCockTail} class={`w-full flex bg-background-primary items-center justify-between border border-solid rounded-lg transition-all gap-2 py-3 px-4 active:translate-y-[4px] hocus:translate-y-[4px] border-input-border-color ${showCocktail ? ' border-color-primary border-opacity-30' : ' border-opacity-10'}`}>
                                    <span class={`text-start text-lg font-semibold line-clamp-1 break-words ${showCocktail ? ' text-color-primary' : 'text-color-text-primary'}`}>COCKTAIL</span>
                                    <img src={`/assets/${showCocktail ? 'up-dropdwon-arrow' : 'down-arrow'}.svg`} className={` ${showCocktail ? ' rotate-90' : ''}`} alt="" />
                                </button>

                                {/* Show that products  */}
                                {showCocktail && (
                                    <div className='flex items-center justify-center flex-col gap-2'>
                                        {beveragesCocktails.map((beveragesCocktails, index) => (
                                            <div key={index} className="w-full cursor-pointer relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px] bg-[#212121]" style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)" }}>
                                                <div className="my-3 mr-3 ml-3">
                                                    <div className="w-full flex gap-2 min-h-16">
                                                        <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2">
                                                            <span className="text-color-text-primary text-base font-bold line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{beveragesCocktails.name}</span>
                                                            <span className="text-color-text-primary text-base font-normal line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{beveragesCocktails.description}</span>
                                                            <span className="items-center text-color-primary text-base font-semibold line-clamp-2 break-words text-start">{beveragesCocktails.price}</span>
                                                        </div>
                                                        <div className="flex flex-col flex-grow-0 justify-between items-end gap-2 p-0">
                                                            <div className="relative">
                                                                <img src={beveragesCocktails.productImage} alt="" width="100" height="100" className="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded" loading="lazy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute z-[2] top-0 end-0 flex items-start justify-end gap-x-0.5 m-4">
                                                        <button type="button" className="flex items-center justify-center p-1 gap-x-0.5 rounded-xl bg-background-primary" style={{ boxShadow: "0px 1.2px 2.4px -1.2px rgba(0, 0, 0, 0.05), 0px 2.4px 3.6px -0.6px rgba(0, 0, 0, 0.10)" }}>
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="min-w-[14px] min-h-[14px] text-color-text-primary" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Beer  */}
                            <div class={`w-full flex flex-col mt-4 gap-2 ${showBeer ? ' border border-color-primary rounded-lg px-2 pt-3 pb-6' : ''}`}>
                                {/* button  */}
                                <button onClick={toggleBeer} class={`w-full flex bg-background-primary items-center justify-between border border-solid rounded-lg transition-all gap-2 py-3 px-4 active:translate-y-[4px] hocus:translate-y-[4px] border-input-border-color ${showBeer ? ' border-color-primary border-opacity-30' : ' border-opacity-10'}`}>
                                    <span class={`text-start text-lg font-semibold line-clamp-1 break-words ${showBeer ? ' text-color-primary' : 'text-color-text-primary'}`}>BEER</span>
                                    <img src={`/assets/${showBeer ? 'up-dropdwon-arrow' : 'down-arrow'}.svg`} className={` ${showBeer ? ' rotate-90' : ''}`} alt="" />
                                </button>

                                {/* Show that products  */}
                                {showBeer && (
                                    <div className='flex items-center justify-center flex-col gap-2'>
                                        {beveragesBeers.map((beveragesBeers, index) => (
                                            <div key={index} className="w-full cursor-pointer relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px] bg-[#212121]" style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)" }}>
                                                <div className="my-3 mr-3 ml-3">
                                                    <div className="w-full flex gap-2 min-h-16">
                                                        <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2">
                                                            <span className="text-color-text-primary text-base font-bold line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{beveragesBeers.name}</span>
                                                            <span className="items-center text-color-primary text-base font-semibold line-clamp-2 break-words text-start">{beveragesBeers.price}</span>
                                                        </div>
                                                        <div className="flex flex-col flex-grow-0 justify-between items-end gap-2 p-0">
                                                            <div className="relative">
                                                                <img src={beveragesBeers.productImage} alt="" width="100" height="100" className="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded" loading="lazy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute z-[2] top-0 end-0 flex items-start justify-end gap-x-0.5 m-4">
                                                        <button type="button" className="flex items-center justify-center p-1 gap-x-0.5 rounded-xl bg-background-primary" style={{ boxShadow: "0px 1.2px 2.4px -1.2px rgba(0, 0, 0, 0.05), 0px 2.4px 3.6px -0.6px rgba(0, 0, 0, 0.10)" }}>
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="min-w-[14px] min-h-[14px] text-color-text-primary" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* SoftDrink  */}
                            <div class={`w-full flex flex-col mt-4 gap-2 ${showSoftDrink ? ' border border-color-primary rounded-lg px-2 pt-3 pb-6' : ''}`}>
                                {/* button  */}
                                <button onClick={toggleSoftDrink} class={`w-full flex bg-background-primary items-center justify-between border border-solid rounded-lg transition-all gap-2 py-3 px-4 active:translate-y-[4px] hocus:translate-y-[4px] border-input-border-color ${showSoftDrink ? ' border-color-primary border-opacity-30' : ' border-opacity-10'}`}>
                                    <span class={`text-start text-lg font-semibold line-clamp-1 break-words ${showSoftDrink ? ' text-color-primary' : 'text-color-text-primary'}`}>SOFT DRINK</span>
                                    <img src={`/assets/${showSoftDrink ? 'up-dropdwon-arrow' : 'down-arrow'}.svg`} className={` ${showSoftDrink ? ' rotate-90' : ''}`} alt="" />
                                </button>

                                {/* Show that products  */}
                                {showSoftDrink && (
                                    <div className='flex items-center justify-center flex-col gap-2'>
                                        {beveragesSoftDrinks.map((beveragesSoftDrinks, index) => (
                                            <div key={index} className="w-full cursor-pointer relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px] bg-[#212121]" style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)" }}>
                                                <div className="my-3 mr-3 ml-3">
                                                    <div className="w-full flex gap-2 min-h-16">
                                                        <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2">
                                                            <span className="text-color-text-primary text-base font-bold line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{beveragesSoftDrinks.name}</span>
                                                            <span className="items-center text-color-primary text-base font-semibold line-clamp-2 break-words text-start">{beveragesSoftDrinks.price}</span>
                                                        </div>
                                                        <div className="flex flex-col flex-grow-0 justify-between items-end gap-2 p-0">
                                                            <div className="relative">
                                                                <img src={beveragesSoftDrinks.productImage} alt="" width="100" height="100" className="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded" loading="lazy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute z-[2] top-0 end-0 flex items-start justify-end gap-x-0.5 m-4">
                                                        <button type="button" className="flex items-center justify-center p-1 gap-x-0.5 rounded-xl bg-background-primary" style={{ boxShadow: "0px 1.2px 2.4px -1.2px rgba(0, 0, 0, 0.05), 0px 2.4px 3.6px -0.6px rgba(0, 0, 0, 0.10)" }}>
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="min-w-[14px] min-h-[14px] text-color-text-primary" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* HotCoffee */}
                            <div class={`w-full flex flex-col mt-4 gap-2 ${showHotCoffess ? ' border border-color-primary rounded-lg px-2 pt-3 pb-6' : ''}`}>
                                {/* button  */}
                                <button onClick={toggleHotCoffee} class={`w-full flex bg-background-primary items-center justify-between border border-solid rounded-lg transition-all gap-2 py-3 px-4 active:translate-y-[4px] hocus:translate-y-[4px] border-input-border-color ${showHotCoffess ? ' border-color-primary border-opacity-30' : ' border-opacity-10'}`}>
                                    <span class={`text-start text-lg font-semibold line-clamp-1 break-words ${showHotCoffess ? ' text-color-primary' : 'text-color-text-primary'}`}>HOT COFFEES SELECTION</span>
                                    <img src={`/assets/${showHotCoffess ? 'up-dropdwon-arrow' : 'down-arrow'}.svg`} className={` ${showHotCoffess ? ' rotate-90' : ''}`} alt="" />
                                </button>

                                {/* Show that products  */}
                                {showHotCoffess && (
                                    <div className='flex items-center justify-center flex-col gap-2'>
                                        {beveragesHotCoffees.map((beveragesHotCoffees, index) => (
                                            <div key={index} className="w-full cursor-pointer relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px] bg-[#212121]" style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)" }}>
                                                <div className="my-3 mr-3 ml-3">
                                                    <div className="w-full flex gap-2 min-h-16">
                                                        <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2">
                                                            <span className="text-color-text-primary text-base font-bold line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{beveragesHotCoffees.name}</span>
                                                            <span className="items-center text-color-primary text-base font-semibold line-clamp-2 break-words text-start">{beveragesHotCoffees.price}</span>
                                                        </div>
                                                        <div className="flex flex-col flex-grow-0 justify-between items-end gap-2 p-0">
                                                            <div className="relative">
                                                                <img src={beveragesHotCoffees.productImage} alt="" width="100" height="100" className="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded" loading="lazy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute z-[2] top-0 end-0 flex items-start justify-end gap-x-0.5 m-4">
                                                        <button type="button" className="flex items-center justify-center p-1 gap-x-0.5 rounded-xl bg-background-primary" style={{ boxShadow: "0px 1.2px 2.4px -1.2px rgba(0, 0, 0, 0.05), 0px 2.4px 3.6px -0.6px rgba(0, 0, 0, 0.10)" }}>
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="min-w-[14px] min-h-[14px] text-color-text-primary" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LunchSpecial