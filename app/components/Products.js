"use client"
import { useState, useEffect, useRef } from 'react';
import LunchSpecial from './LunchSpecial';
import { Link } from "react-scroll";

const Products = () => {

    // categories and products
    const data = [
        // STARTERS & SALADS Data 
        {
            category: 'STARTERS & SALADS',
            categoryimage: "/assets/starters-and-salads.webp",
            mainimage: '/assets/starter-salad-main-img.webp',
            products: [
                {
                    name: 'Beef Carpaccio',
                    description: 'Arugula, Fresh Parmigiano-Reggiano, Olive Oil, 12-year Aged Balsamic Vinegar, Mustard, Salt and Pepper.',
                    price: '$32.00',
                    productImage: '/assets/starters-and-salads-1.webp',
                    productimages: ['/assets/1.svg', '/assets/2.svg']
                },
                {
                    name: 'Steak Tartare',
                    description: 'Dijon Mustard, Shallots, Capers, Chili Sauce, Cognac, Olive Oil & Crispy Potato',
                    price: '$28.00',
                    productImage: '/assets/starters-and-salads-2.webp',
                    productimages: ['/assets/1.svg', '/assets/3.svg', '/assets/4.svg', '/assets/2.svg']
                },

                {
                    name: 'Meat Sushi',
                    description: 'Thin Sliced New York Strip, Sushi Rice, Fresh Parmigiano-Reggiano, Avocado Cream  and Crispy Potato.',
                    price: '$28.00',
                    productImage: '/assets/starters-and-salads-3.webp',
                    productimages: ['/assets/1.svg', '/assets/5.svg']
                },

                {
                    name: 'Nusr-Et Special Salad',
                    description: 'Our Signature Salad! Garden Greens, Walnut, Green apple, Local Goat Cheese, Black Raisin, Tomato, Pomegranate Seed, Lemon Vinaigrette and Pomegranate Molasses Dressing.',
                    price: '$23.00',
                    productImage: '/assets/starters-and-salads-4.webp',
                    productimages: ['/assets/6.svg', '/assets/1.svg']
                },
                {
                    name: 'Tomato Walnut Salad',
                    description: 'Tomato Walnut Salad',
                    price: '$21.00',
                    productImage: '/assets/starters-and-salads-5.webp',
                    productimages: ['/assets/6.svg']
                },
                {
                    name: 'Baby Arugula & Avocado Salad ',
                    description: 'Cherry Tomatoes, Parmesan, Avocado, Pine nuts, Orange, Arugula & Balsamic Dressing',
                    price: '$21.00',
                    productImage: '/assets/starters-and-salads-6.webp',
                    productimages: ['/assets/1.svg', '/assets/6.svg']
                },
                {
                    name: 'Caesar Salad',
                    description: 'Baby Romaine Lettuce, Parmesan Cheese, Garlic Crouton, Dressing (Anchovy is optional)',
                    price: '$21.00',
                    productImage: '/assets/starters-and-salads-7.webp',
                    productimages: ['/assets/1.svg', '/assets/5.svg']
                },
                {
                    name: 'Burrata',
                    description: 'Basil, Pesto, Arugula ',
                    price: '$28.00',
                    productImage: '/assets/starters-and-salads-8.webp',
                    productimages: ['/assets/6.svg', '/assets/1.svg']
                },
            ]
        },

        // SEAFOOD STARTERS Data 
        {
            category: 'SEAFOOD STARTERS',
            categoryimage: '/assets/seafood-starters.webp',
            mainimage: "/assets/seafood-starters-main.webp",
            products: [
                {
                    name: 'Market Oysters',
                    description: 'Market Oysters with Cocktail sauce and Vinaigrette ',
                    price: '$32.00 - $64.00',
                    productImage: "/assets/seafood-starters-1.webp",
                    productimages: ['/assets/2.svg']
                },
                {
                    name: 'Salmon Tartare',
                    description: 'Quinoa Salad,Capers,Sour Avocado,Aji Amarillo Aiole ',
                    price: '$26.00',
                    productImage: "/assets/seafood-starters-2.webp",
                    productimages: ['/assets/3.svg', '/assets/2.svg']
                },
                {
                    name: 'Seafood Platter',
                    description: 'Cocktail Shrimp,Market Oysters,Salmon Sashimi,Crab Meat served with house sauce ',
                    price: '$115.00',
                    productImage: "/assets/seafood-starters-3.webp",
                    productimages: ['/assets/2.svg', '/assets/7.svg', '/assets/1.svg']
                },
                {
                    name: 'Grilled Prawn',
                    description: '3 Jumbo Char-Grilled prawn served with Tropical Salsa ',
                    price: '$51.00',
                    productImage: "/assets/seafood-starters-4.webp",
                    productimages: ['/assets/7.svg', '/assets/2.svg']
                },
                {
                    name: 'Alaskan King Crab Legs Two Ways',
                    description: 'Chilled King Crab Leg, Siracha Aioli King Crab Salad, Fresh Guacamole and Tortilla Chips.',
                    price: '$69.00',
                    productImage: "/assets/seafood-starters-5.webp",
                    productimages: ['/assets/5.svg', '/assets/2.svg', '/assets/1.svg']
                },

            ]
        },

        // FROM THE CHAR-GRILL Data 
        {
            category: 'FROM THE CHAR-GRILL',
            categoryimage: '/assets/from-the-char-grillform.webp',
            mainimage: "/assets/from-the-char-grillform-main.webp",
            products: [
                {
                    name: 'Spaghetti ',
                    description: 'Thinly Sliced Wagyu Striploin(7 Oz) ',
                    price: '$75.00',
                    productImage: "/assets/char-grillform-1.webp",
                },

                {
                    name: 'Lokum',
                    description: 'Sliced Wagyu Tenderloin(7 Oz) ',
                    price: '$80.00',
                    productImage: "/assets/char-grillform-2.webp",
                },
                {
                    name: 'Şaşlık ',
                    description: 'Buttermilk & Spice Marinated Tenderloin Pieces, Shallots(9 Oz) ',
                    price: '$70.00',
                    productImage: "/assets/char-grillform-3.webp",
                    productimages: ['/assets/8.svg', '/assets/1.svg']
                },
                {
                    name: 'Meatball with Cheese ',
                    description: 'Char-grilled meatball with cheese Served with French Fries (10 Oz)  ',
                    price: '$45.00',
                    productImage: "/assets/char-grillform-4.webp",
                    productimages: ['/assets/5.svg', '/assets/9.svg', '/assets/1.svg', '/assets/10.svg']
                },
                {
                    name: 'Saltbae Wagyu Burger',
                    description: 'Caramelized Onion, Cheese and French Fries (7 Oz) ',
                    price: '$35.00 Saltbae Wagyu Burger',
                    productImage: "/assets/char-grillform-5.webp",
                    productimages: ['/assets/5.svg', '/assets/9.svg', '/assets/8.svg', '/assets/1.svg', '/assets/10.svg', '/assets/11.svg']
                },
                {
                    name: 'Amor (SALTBAE’S Private Reserve Cut) ',
                    description: 'Mustard Marinated Wagyu Rib Cap.  For 2 (21Oz)For 3 (32Oz)For 4 (42 Oz)',
                    price: '$350.00 - $590.00',
                    productImage: "/assets/char-grillform-6.webp",
                    productimages: ['/assets/3.svg']
                },
                {
                    name: 'Saltbae Tomahawk',
                    description: 'Highly Marbled, Mustard Marinated Wagyu Bone in Rib-eye.(32 Oz) ',
                    price: '$275.00',
                    productImage: "/assets/char-grillform-7.webp",
                    productimages: ['/assets/3.svg']
                },
                {
                    name: 'Family Style Tomahawk',
                    description: 'Highly marbled char-grilled Wagyu Tomahawk(4LB)',
                    price: '$550.00',
                    productImage: "/assets/char-grillform-8.webp",
                },
                {
                    name: 'WOW Wagyu Steak',
                    description: 'Thick Cut Wagyu New York Steak (10 Oz, 20 Oz, 30 Oz) ',
                    price: '$95.00 - $285.00',
                    productImage: "/assets/char-grillform-9.webp",
                },
                {
                    name: 'Family Style New York Steak',
                    description: 'Highly Marbled Wagyu New York Steak(4LB) ',
                    price: '$550.00',
                    productImage: "/assets/char-grillform-10.webp",
                },
                {
                    name: 'Sirt',
                    description: 'Mustard Marinated Wagyu Tenderloin. Share Cıtır Cıtır!. For 2 (14 Oz)For 3 (21 Oz)',
                    price: '$180.00 - $245.00',
                    productImage: "/assets/char-grillform-11.webp",
                    productimages: ['/assets/3.svg']
                },
                {
                    name: 'Nusr-et Special',
                    description: 'Tenderloin Sliced and Griddled On a Hot Plate With Butter For 2 (14 Oz)For 3 (21 Oz)For 4 (28 Oz)',
                    price: '$190.00 - $380.00',
                    productImage: "/assets/char-grillform-12.webp",
                    productimages: ['/assets/1.svg', '/assets/2.svg', '/assets/5.svg']
                },
                {
                    name: 'Rack of Lamb',
                    description: 'Whole Rack of Lamb. ',
                    price: '$179.00',
                    productImage: "/assets/char-grillform-13.webp",
                    productimages: ['/assets/2.svg']
                },
                {
                    name: '8 Hours Roasted Asado Short Ribs',
                    description: '8-hours Roasted,Juicy and Tender Short Ribs. Share to Woaww!. ',
                    price: '$140.00 - $350.00',
                    productImage: "/assets/char-grillform-14.webp",
                },
                {
                    name: 'Surf & Turf Rib-Eye Cab',
                    description: 'Wagyu Rib-eye cab served with 2 grilled shrimps (10 Oz) ',
                    price: '$195.00 for one person',
                    productImage: "/assets/char-grillform-15.webp",
                },
                {
                    name: 'Prime Filet Mignon',
                    description: 'Prime Filet-Mignon,Mushroom Glaze with Onion Crisps (10 Oz) ',
                    price: '$72.00',
                    productImage: "/assets/char-grillform-16.webp",
                },
                {
                    name: 'Prime New York Strip',
                    description: 'Thick Sliced Striploin (14 Oz) ',
                    price: '$77.00',
                    productImage: "/assets/char-grillform-17.webp",
                },
                {
                    name: 'Prime Tomahawk',
                    description: 'Mustard-marinated Thick Cut Bone in Rib Eye.(32 Oz) ',
                    price: '$169.00',
                    productImage: "/assets/char-grillform-18.webp",
                    productimages: ['/assets/3.svg']
                },
            ]
        },

        // GOLDEN EXPERIENCE Data 
        {
            category: 'GOLDEN EXPERIENCE',
            categoryimage: '/assets/golden-experience.webp',
            mainimage: "/assets/golden-experience-main.webp",
            products: [
                {
                    name: 'Golden Tomahawk',
                    description: '24 Carat Gold Coated, Highly Marbled Wagyu Tomahawk. (32 Oz) ',
                    price: '$950.00',
                    productImage: "/assets/golden-experience-1.webp",
                },
                {
                    name: 'Golden New York Steak',
                    description: '24 Carat Gold Coated Wagyu New York Steak. (15 Oz) ',
                    price: '$650.00 14oz',
                    productImage: "/assets/golden-experience-2.webp",
                },
                {
                    name: 'Golden Rack of Lamb',
                    description: '24 Carat Gold Coated Whole Rack of Lamb. ',
                    price: '$800.00',
                    productImage: "/assets/golden-experience-3.webp",
                },
                {
                    name: 'Golden Sırt',
                    description: '24 Carat Gold Coated and Juicy. Share the Ultimate Experience! (21 Oz) ',
                    price: '$750.00',
                    productImage: "/assets/golden-experience-4.webp",
                },
                {
                    name: 'Golden Asado',
                    description: '24 Carat Gold Coated, 8-hour Roasted. Juicy and Tender Short Ribs ',
                    price: '$600.00',
                    productImage: "/assets/golden-experience-5.webp",
                },
                {
                    name: 'Golden Burger',
                    description: 'You Know... This is not a Burger! (10 Oz) ',
                    price: '$180.00',
                    productImage: "/assets/golden-experience-6.webp",
                },
                {
                    name: 'Golden Amor',
                    description: '24 Carat Gold Wrapped house marinated Wagyu Rib-Cap (32 Oz) ',
                    price: '$1500.00',
                    productImage: "/assets/golden-experience-7.webp",
                },
                {
                    name: 'Golden Baklava',
                    description: '24 Carat Gold Coated Signature Baklava with Maras Ice Cream. ',
                    price: '$60.00',
                    productImage: "/assets/golden-experience-8.webp",
                },
                {
                    name: 'Golden Cappucino',
                    description: 'Cappuciiiinooooo',
                    price: '$49.00',
                    productImage: "/assets/golden-experience-9.webp",
                },

            ]
        },

        // MAINS Data 
        {
            category: 'MAINS',
            categoryimage: '/assets/mains.webp',
            mainimage: "/assets/mains-main.webp",
            products: [
                {
                    name: 'GRILLED SALMON ',
                    description: 'Garlic Parmesan,Parsley Crusted Salmon with Vegetables and Spinach, Lemon Herb Sauce ',
                    price: '$55.00',
                    productImage: "/assets/mains-1.webp",
                    productimages: ['/assets/7.svg', '/assets/2.svg', '/assets/1.svg', '/assets/13.svg']
                },
                {
                    name: 'BUTTER POACHED LOBSTER',
                    description: 'Lobster Tail,Bearnaise potato crisps,Passion Fruit Burr Blanc,Chives,Edible Flowers,Tarragon ',
                    price: '$75.00',
                    productImage: "/assets/mains-2.webp",
                },
            ]
        },

        // SIDES Data 
        {
            category: 'SIDES',
            categoryimage: '/assets/sides.webp',
            mainimage: "/assets/sides-main.webp",
            products: [
                {
                    name: 'SAUTÉED  MUSHROOMS ',
                    description: 'Cremini Mushrooms, Oyster Mushrooms, Shiitake Mushrooms Sautee with Olive Oil and Thyme',
                    price: '$16.00',
                    productImage: "/assets/sides-1.webp",
                    productimages: ['/assets/14.svg', '/assets/1.svg']
                },

                {
                    name: 'ONION FLOWER ',
                    description: 'Spanish Onion battered with Milk, Eggs, Flour & Bread Crumbs',
                    price: '$16.00',
                    productImage: "/assets/sides-2.webp",
                    productimages: ['/assets/5.svg', '/assets/10.svg', '/assets/1.svg', '/assets/11.svg']
                },

                {
                    name: 'HERB CRUSTED  FRIES ',
                    description: 'House-Seasoned Or Plain',
                    price: '$12.00',
                    productImage: "/assets/sides-3.webp",
                    productimages: ['/assets/5.svg']
                },
                {
                    name: 'SWEET CORN ',
                    description: 'Corn seasoned with Butter, Garlic, Lime, Yuzu Pest & Paprika',
                    price: '$15.00',
                    productImage: "/assets/sides-4.webp",
                    productimages: ['/assets/1.svg', '/assets/13.svg']
                },
                {
                    name: 'MASHED POTATO ',
                    description: 'Yukon Potatoes, Butter, Cream, Kosher Salt, Cracked Pepper & Topped With Chives',
                    price: '$14.00',
                    productImage: "/assets/sides-5.webp",
                    productimages: ['/assets/1.svg']
                },
                {
                    name: 'LOBSTER MAC & CHEESE ',
                    description: 'Creamy Mac & Cheese with Cheddar, Swiss and Lobster Add Beef Bacon $5.00',
                    price: '$39.00',
                    productImage: "/assets/sides-6.webp",
                },
                {
                    name: 'ASPARAGUS WITH GARLIC BUTTER ',
                    description: 'Asparagus with Garlic Butter & Topped with Micro Greens',
                    price: '$15.00',
                    productImage: "/assets/sides-7.webp",
                    productimages: ['/assets/1.svg', '/assets/13.svg']
                },
                {
                    name: 'CREAMY SPINACH ',
                    description: 'Spinach prepared with Cream, Onion, Parmigiano-Reggiano, Kosher Salt & Cracked Pepper .',
                    price: '$16.00',
                    productImage: "/assets/sides-8.webp",
                    productimages: ['/assets/1.svg', '/assets/12.svg']
                },

                {
                    name: 'TRUFFLE MAC & CHEESE ',
                    description: 'Creamy Mac & Cheese with Cheddar, Swiss and Truffle oil. Add Beef Bacon $5.00 ',
                    price: '$5.00 - $16.00',
                    productImage: "/assets/sides-9.webp",
                    productimages: ['/assets/1.svg', '/assets/5.svg', '/assets/15.svg']
                },
                {
                    name: 'TRUFFLE FRIES ',
                    description: 'French Fries With White Truffle Oil and Chives',
                    price: '$24.00',
                    productImage: "/assets/sides-10.webp",
                    productimages: ['/assets/5.svg', '/assets/15.svg']
                },
                {
                    name: 'GRILLED JALAPENOS ',
                    description: 'Char-Grilled Jalapenos House Seasoning',
                    price: '$10.00',
                    productImage: "/assets/sides-11.webp",
                },

                {
                    name: 'BEEF BACON ',
                    price: '$5.00 Beef Bacon',
                    productImage: "/assets/sides-1.webp",
                },

            ]
        },

        // DESSERT Data 
        {
            category: 'DESSERT',
            categoryimage: '/assets/dessert.webp',
            mainimage: "/assets/dessert-main.webp",
            products: [
                {
                    name: 'Baklava',
                    description: 'Our Signature Baklava with Maraş Ice Cream, Enjoy the Show! ',
                    price: '$25.00',
                    productImage: "/assets/dessert-1.webp",
                    productimages: ['/assets/5.svg', '/assets/6.svg', '/assets/1.svg']
                },
                {
                    name: 'GOLDEN BAKLAVA',
                    description: '24 Carat golden wrapped Baklava with Maraş Ice cream ',
                    price: '$60.00',
                    productImage: "/assets/dessert-2.webp",
                },
            ]
        },


        // MERCHANDISE Data 
        {
            category: 'MERCHANDISE',
            categoryimage: '/assets/merchandise.webp',
            mainimage: "/assets/merchandise-main.webp",
            products: [
                {
                    name: 'KNIFE (2 PIECES OF SET)',
                    price: '$130.00',
                    productImage: "/assets/merchandise-1.webp",
                },

                {
                    name: 'KNIFE (4 PIECES OF SET)',
                    price: '$250.00',
                    productImage: "/assets/merchandise-2.webp",
                },

                {
                    name: 'BLUE KNIFE BIG',
                    price: '$105.00',
                    productImage: "/assets/merchandise-3.webp",
                },

                {
                    name: 'RED APRON',
                    price: '$49.00',
                    productImage: "/assets/merchandise-4.webp",
                },

                {
                    name: 'BABY BIBS',
                    price: '$10.00',
                    productImage: "/assets/merchandise-5.webp",
                },

            ]
        },
    ];

    const [activeCategory, setActiveCategory] = useState(null);
    const [isFixed, setIsFixed] = useState(false);

    // Refs to store category sections and category buttons container
    const categoryRefs = useRef({});
    const categoryButtonsRef = useRef(null);

    // Function to handle scroll
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    // Function to scroll to category products
    const scrollToCategory = (category) => {
        const element = categoryRefs.current[category];
        if (element) {
            window.scrollTo({
                top: element.offsetTop - (categoryButtonsRef.current?.clientHeight || 0),
                behavior: 'smooth'
            });
            setActiveCategory(category);
        }
    };

    // Effect to handle scroll event
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle click on category image button
    const handleCategoryImageClick = (category) => {
        scrollToCategory(category);
    };

    // Function to handle click on fixed category button
    const handleFixedCategoryButtonClick = (category) => {
        scrollToCategory(category);
    };

    const handleScrollRight = () => {
        const container = document.querySelector('.flex.overflow-x-auto');
        if (container) {
            container.scrollBy({
                top: 0,
                left: 200,
                behavior: 'smooth'
            });
        }
    };


    return (
        <div>
            <div className="relative w-full">
                {/* Fixed Category Buttons */}
                {isFixed && (
                    <div
                        ref={categoryButtonsRef}
                        className="w-full flex items-stretch fixed top-0 shadow gap-2 px-4 bg-background-primary z-50 p-4 overflow-x-auto overflow-y-hidden animate-slideInDown lg:!fixed lg:!w-[30%]"
                    >
                        {data.map((item) => (
                            <button
                                key={item.category}
                                type="button"
                                className={`text-sm text-color-primary whitespace-nowrap font-semibold px-4 py-2 rounded border border-solid border-color-primary border-opacity-90 transition-[background] duration-500 bg-highlight_color !text-background_color ${activeCategory === item.category ? 'bg-color-primary text-black' : 'text-color-primary border border-solid border-color-primary'}`}
                                onClick={() => handleFixedCategoryButtonClick(item.category)}
                            >
                                {item.category}
                            </button>
                        ))}

                        <Link to="lunchSpecial"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-sm cursor-pointer text-color-primary whitespace-nowrap font-semibold px-4 py-2 rounded border border-solid border-color-primary border-opacity-90 transition-[background] duration-500 bg-highlight_color !text-background_color"
                        >
                            LUNCH SPECIAL
                        </Link>
                    </div>
                )}


                {/* Category Image  Buttons */}
                <div className="flex items-stretch gap-2 p-4 bg-primary z-40 overflow-x-auto overflow-y-hidden">
                    {data.map((item) => (
                        <button
                            key={item.category}
                            type="button"
                            className={`flex flex-col gap-y-1 w-[104px] items-center justify-between rounded-md animate-fadeInDown ${activeCategory === item.category ? 'active' : ''}`}
                            onClick={() => handleCategoryImageClick(item.category)}
                        >
                            {/* Category Image */}
                            <img
                                src={item.categoryimage}
                                alt={item.category}
                                className={`object-cover w-[104px] h-[78px] max-w-[104px] max-h-[78px] rounded-md border-solid border ${activeCategory === item.category ? 'border-color-primary border-2' : 'border-color-text-primary border-opacity-10'}`}
                            />
                            {/* Category Name */}
                            <span className={`line-clamp-1 text-sm break-all font-bold ${activeCategory === item.category ? 'text-color-primary' : 'text-color-text-primary'}`}>
                                {item.category}
                            </span>
                        </button>

                    ))}

                    <Link to="lunchSpecial"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="flex cursor-pointer flex-col gap-y-1 w-[104px] items-center justify-between rounded-md animate-fadeInDown"
                    >
                        {/* Category Image */}
                        <img
                            src="/assets/lunch-special.webp"
                            className="object-cover w-[104px] h-[78px] max-w-[104px] max-h-[78px] rounded-md border-solid border "
                        />
                        {/* Category Name */}
                        <span className="line-clamp-1 text-sm break-all font-bold text-color-text-primary">
                            LUNCH SPECIAL
                        </span>
                    </Link>

                    {/* Right Arrow  */}
                    <div class="w-20 absolute hidden lg:flex justify-end items-center inset-y-0 end-0 pe-2 transition-all duration-500 bg-black bg-opacity-5 h-[118px]">
                        <button type="button" onClick={handleScrollRight}>
                            <img src="/assets/up-dropdwon-arrow.svg" alt="" className=' rotate-180' />
                        </button>
                    </div>
                </div>

                {/* Category Product Sections */}
                <div className="w-full flex flex-col bg-background-secondary">
                    {data.map((item) => (
                        <div key={item.category} ref={(el) => (categoryRefs.current[item.category] = el)}
                            id={item.category}
                            className="w-full flex flex-col items-center justify-start gap-1 p-4">
                            {/* Category Image and Name */}
                            <img
                                src={item.mainimage}
                                alt={item.category}
                                className="w-full rounded-md mb-3 aspect-[3/1] object-cover"
                                loading="lazy"
                            />
                            <span className="text-xl font-bold text-center text-color-text-primary">{item.category}</span>

                            {/* Render Products for the Category */}

                            {item.products.map((product, index) => (
                                <div key={index} class="flex cursor-pointer flex-col items-center justify-center gap-4 pt-3 w-full">
                                    <div class="w-full relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px] bg-[#212121]" style={{ boxShadow: "0_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0_2px_4px_-2px_rgba(0,_0,_0,_0.05)" }}>
                                        <div class="my-3 mr-3 ml-3">
                                            <div class="w-full flex gap-2 min-h-16">
                                                <div class="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2">
                                                    <span class="text-color-text-primary text-base font-bold line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{product.name}</span>
                                                    <span class="text-color-text-primary text-base font-normal line-clamp-2 text-start" style={{ wordBreak: "break-word" }}>{product.description}</span>
                                                    <span class="items-center text-color-primary text-base font-semibold line-clamp-2 break-words text-start">{product.price}</span>
                                                    <div>
                                                        {product.productimages && product.productimages.length > 0 && (
                                                            <ul className="flex flex-wrap gap-2">
                                                                {product.productimages.map((image, index) => (
                                                                    <li key={index}>
                                                                        <img src={image} alt={`Thumbnail ${index}`} />
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>

                                                <div class="flex flex-col flex-grow-0 justify-between items-end gap-2 p-0">
                                                    <div class="relative">
                                                        <img src={product.productImage} alt="" width="100" height="100" class="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded" loading="lazy" />
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="absolute z-[2] top-0 end-0 flex items-start justify-end gap-x-0.5 m-4">
                                                <button type="button" class="flex items-center justify-center p-1 gap-x-0.5 rounded-xl bg-background-primary" style={{ boxShadow: "0px_1.2px_2.4px_-1.2px_rgba(0,0,0,0.05),0px_2.4px_3.6px_-0.6px_rgba(0,0,0,0.10)" }}>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="min-w-[14px] min-h-[14px] text-color-text-primary" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <LunchSpecial id="lunchSpecial" />
            </div>
        </div>
    )
}

export default Products