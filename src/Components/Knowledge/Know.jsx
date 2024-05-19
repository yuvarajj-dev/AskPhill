import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Know.css"
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);
export default function Know() {
    useEffect(() => {
        const applyParallax = () => {
            const handleResize = () => {
                if (window.innerWidth >= 1280) {
                    // Apply parallax animations for screens wider than 1280px
                    gsap.to("#scroll", {
                        y: "8.7rem",
                        ease: "none",
                        scrollTrigger: {
                            trigger: "#scroll",
                            start: "top 20%",
                            end: "bottom top",
                            scrub: true
                        }
                    });

                    gsap.to("#scroll2", {
                        y: "10em",
                        ease: "none",
                        scrollTrigger: {
                            trigger: "#scroll2",
                            start: "top 25%",
                            end: "bottom center",
                            scrub: true
                        }
                    });
                } else {
                    // Disable parallax animations for screens under 1280px
                    gsap.killTweensOf("#scroll"); // Clear existing animations for #scroll
                    gsap.killTweensOf("#scroll2"); // Clear existing animations for #scroll2
                }
            };

            // Call handleResize initially and on window resize
            handleResize();
            window.addEventListener("resize", handleResize);
        };

        // Call applyParallax to initiate the logic (optional)
        applyParallax();

        const homeanime = (selector) => {
            // Fetch elements using the selector
            const elements = document.querySelectorAll(selector);

            if (!elements.length) {
                // Handle the case where no elements are found
                console.warn(`No elements found for selector: "${selector}"`);
                return;
            }

            elements.forEach((element) => {
                // Create a new SplitType instance, ensuring library is loaded
                if (typeof SplitType !== 'undefined') {
                    const text = new SplitType(element, { type: "chars" });

                    // Animate the characters using GSAP
                    gsap.from(text.lines, {
                        y: '110%',
                        opacity: 0,
                        rotationZ: '10deg',
                        duration: 0.85,
                        ease: 'none.out', // Adjust ease function as needed
                        stagger: 0.3,
                        scrollTrigger: {
                            trigger: element, // Trigger animation on the element itself
                            start: 'top bottom', // Start animation when element reaches top center of viewport
                        },
                    });
                } else {
                    console.warn('SplitType library not found. Animation cannot be performed.');
                }
            });
        };

        // Call the animation with the desired selector
        homeanime(".Title");

    }, []);

    return (
        <>
            <div className='Know bg-[#faf8f7] overflow-hidden'>
                <div className='lg:py-20 py-10'>
                    <p animate className='text-[clamp(2.5rem,7vw,6.25rem)] Title sm:w-full w-[80%] mx-auto  font-bold text-center tracking-tighter leading-[1] py-5'>Knowledge</p>
                    <div className='flex justify-center items-center py-2'>
                        <button className=' bouncing-bg sm:w-[10em] sm:h-[3rem] w-[6rem] h-[2rem] sm:text-[21px] text-[13px]  font-semibold rounded-full bouncy-button  bg-[#d8ccb5]'>Discover all</button>
                    </div>
                </div>
                {/* Card div */}
                <div>
                    <div className='grid lg:grid-cols-2 max-w-[94%] gap-7 py-7 mx-auto'>
                        <div id='scroll' className='bg-[#4cacc8] xl:h-[80%] lg:h-[95%] sm:h-[100%] h-[20rem] rounded-2xl sm:px-11 px-5 sm:py-10 py-5 relative'>
                            {/* Heading */}
                            <div className='py-3'>
                                <button className='bouncing-bg sm:w-[6em] sm:h-[3rem] w-[6rem] h-[2rem] sm:text-[21px] text-[13px] font-semibold rounded-full text-[#4cacc8] bg-[#cbd7dd]'>Headless</button>
                            </div>
                            {/* Text */}
                            <div>
                                <p className='text-[clamp(2.125rem,5.4vw,4.875rem)] font-bold text-[#cbd7dd] leading-[1] tracking-tighter'>Rethinking Headless commerce</p>
                                <p className='sm:text-[1.3125rem] text-[12px] font-semibold text-[#8cc2d3] py-5'>Rediscovering Shopify's power</p>
                            </div>
                            {/* arrow */}
                            <div className='flex justify-end items-center pt-[3rem]  absolute sm:bottom-6 sm:right-6 bottom-4 right-4'>
                                <div className='sm:w-[4.5rem] sm:h-[4.5rem] w-[3rem] h-[3rem] flex justify-center items-center rounded-full bg-[#cbd7dd]'>
                                    <svg
                                        className={`size-7 lg:size-[2.25rem] text-[#4cacc8] [--rotate:-45deg] rotate-[--rotate] flex items-center justify-center overflow-hidden`}
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aspectratio="xMidYMid meet"
                                        data-target="ecommerce-insights-article.arrow-in"
                                        style={{
                                            transform: 'translateX(var(--motion-translateX)) translateY(var(--motion-translateY)) rotate(var(--motion-rotate))',
                                            '--motion-rotate': 'var(--rotate)',
                                            '--motion-translateY': '0%',
                                            '--motion-translateX': '0%'
                                        }}
                                    >
                                        <path
                                            d="M24.6287 48L19.1908 42.4936L33.3109 28.0728L0.0430466 27.8872L0 19.8396L33.2679 20.0252L18.9927 5.46982L24.372 0L48 24.1311L24.6287 48Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src=".\Knowledge\rethinking.jpg" alt="knowledge" className='rounded-2xl' />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 max-w-[94%]  gap-7 mx-auto'>
                        {/* image */}
                        <div className='max-h-[90%] lg:order-1 order-2  w-full'>
                            <img src="./Knowledge/d2c.webp" alt="knowledge" className='rounded-2xl h-[100%] w-full object-cover ' />
                        </div>
                        {/* Text */}
                        <div id="scroll2" className='bg-[#dead5d] lg:order-2 order-1 xl:h-[70%] lg:h-[95%] sm:h-[100%] h-[20rem] rounded-2xl sm:px-11 px-5 sm:py-10 py-5 relative'>
                            {/* Heading */}
                            <div className='py-3'>
                                <button className='bouncing-bg  w-[6rem] h-[2rem]  sm:w-[7em] sm:h-[3rem] sm:text-[21px] text-[13px] font-semibold rounded-full text-[#dead5d] bg-[#fff2db]'>D2C Summit</button>
                            </div>
                            {/* Text */}
                            <div>
                                <p className='text-[clamp(2.125rem,5.4vw,4.875rem)] font-bold text-[#fff2db] leading-[1] tracking-tighter'>Beyond the products</p>
                                <p className='sm:text-[1.3125rem] text-[12px] font-semibold text-[#eece99] py-5'>Ask Phill's take on the streetwear drop that's got everyone talking</p>
                            </div>
                            {/* arrow */}
                            <div className='flex justify-end items-center pt-[3rem] arrow-container absolute sm:bottom-6 sm:right-6 bottom-4 right-4 button'>
                                <div className='sm:w-[4.5rem] sm:h-[4.5rem] w-[3rem] h-[3rem] flex justify-center items-center rounded-full bg-[#fff2db]'>
                                    <svg
                                        className={`size-7 arrow-svg lg:size-[2.25rem] text-[#dead5d] [--rotate:-45deg] rotate-[--rotate] flex items-center justify-center overflow-hidden`}
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aspectratio="xMidYMid meet"
                                        data-target="ecommerce-insights-article.arrow-in"
                                        style={{
                                            transform: 'translateX(var(--motion-translateX)) translateY(var(--motion-translateY)) rotate(var(--motion-rotate))',
                                            '--motion-rotate': 'var(--rotate)',
                                            '--motion-translateY': '0%',
                                            '--motion-translateX': '0%'
                                        }}
                                    >
                                        <path
                                            d="M24.6287 48L19.1908 42.4936L33.3109 28.0728L0.0430466 27.8872L0 19.8396L33.2679 20.0252L18.9927 5.46982L24.372 0L48 24.1311L24.6287 48Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* LAST CARD */}
                <div className='max-w-[94%] mx-auto lg:h-[35rem] bg-[#d8ccb5] rounded-2xl w-full relative xl:-top-[1rem] flex lg:gap-10 flex-col justify-between mb-5 lg:py-5 '>
                    {/* heading */}
                    <div className='px-10 py-5 lg:py-5'>
                        <p className='text-[clamp(4.2rem,13.9vw,12.5rem)] font-bold tracking-tighter lg:leading-[200px] leading-[1]  '>Stay ahead</p>
                    </div>
                    {/* description */}
                    <div className='lg:px-10 px-5 lg:flex lg:justify-between items-end '>
                        {/* description */}
                        <div className='lg:w-[100%] w-[95%] lg:block flex justify-end'>
                            <p className='lg:text-[1.3125rem] text-[#767064] lg:w-[15rem] w-[75%]   font-semibold lg:text-start '>Subscribe to our newsletter for a roundup of the latest in ecommerce, straight to your inbox.</p>
                        </div>
                        {/* Eamil & Button */}
                        <div className='flex gap-2 my-5 '>
                            <div className='w-[100%]'>
                                <input className='lg:w-[25rem] w-full sm:h-[5rem] h-[3rem] rounded-full sm:px-10 sm:text-[25px] text-[15px] px-5 font-bold' type="email" name="" placeholder='Email' id="" />
                            </div>
                            <div className='flex justify-end items-center'>
                                <div className='sm:w-[4.5rem] bouncy-button sm:h-[4.5rem] w-[3rem] h-[3rem] flex justify-center items-center rounded-full bg-[#131313]'>
                                    <svg
                                        className={`size-7 lg:size-[2.25rem] text-[#faf8f7] [--rotate:-45deg] rotate-[--rotate] flex items-center justify-center overflow-hidden`}
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aspectratio="xMidYMid meet"
                                        data-target="ecommerce-insights-article.arrow-in"
                                        style={{
                                            transform: 'translateX(var(--motion-translateX)) translateY(var(--motion-translateY)) rotate(var(--motion-rotate))',
                                            '--motion-rotate': 'var(--rotate)',
                                            '--motion-translateY': '0%',
                                            '--motion-translateX': '0%'
                                        }}
                                    >
                                        <path
                                            d="M24.6287 48L19.1908 42.4936L33.3109 28.0728L0.0430466 27.8872L0 19.8396L33.2679 20.0252L18.9927 5.46982L24.372 0L48 24.1311L24.6287 48Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
