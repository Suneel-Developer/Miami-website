import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const ScrollTopArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check the current scroll position
            const scrollPosition = window.scrollY;

            // Determine visibility based on scroll position
            if (scrollPosition >= window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Link to='top' spy={true}
            smooth={true}
            offset={-70}
            duration={500} className={`fixed cursor-pointer bottom-10 w-12 h-12 rounded-full bg-color-primary flex justify-center items-center z-30 right-3 lg:right-[calc(70vw+12px)] animate-fadeInRight ${isVisible ? 'block' : 'hidden'}`}>
            <button type="button" onClick={scrollToTop} className="flex justify-center items-center">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
                </svg>
            </button>
        </Link>
    );
};

export default ScrollTopArrow;
