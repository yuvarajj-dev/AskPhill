import React, { useEffect } from 'react';
import "./Commerse.css";
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Commerse() {
    useEffect(() => {
        const movableElements = document.querySelectorAll('.movable');
        const movableElements2 = document.querySelectorAll('.movable2');
        const allMovableElements = document.querySelectorAll('.movable');
        gsap.utils.toArray(allMovableElements).forEach(movable => {
            gsap.fromTo(
                movable,
                { opacity: 0, scale: 0.5 },
                {
                    opacity: 1,
                    scale: 1,
                    stagger: 0.15,
                    scrollTrigger: {
                        once: true,
                        trigger: movable,
                        start: 'top 100%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });
        const mouseMoveHandler = (e) => {
            movableElements.forEach((movableElement) => {
                const boundingRect = movableElement.getBoundingClientRect();
                const elementCenterX = boundingRect.left + boundingRect.width / 2;
                const elementCenterY = boundingRect.top + boundingRect.height / 2;

                const mouseX = e.clientX;
                const mouseY = e.clientY;

                const moveX = (mouseX - elementCenterX) / 20;
                const moveY = (mouseY - elementCenterY) / 20;

                gsap.to(movableElement, { x: moveX, y: moveY, duration: 0.3 });
            });

            movableElements2.forEach((movableElement) => {
                const boundingRect = movableElement.getBoundingClientRect();
                const elementCenterX = boundingRect.left + boundingRect.width / 2;
                const elementCenterY = boundingRect.top + boundingRect.height / 2;

                const mouseX = e.clientX;
                const mouseY = e.clientY;

                const moveX = (elementCenterX - mouseX) / 20;
                const moveY = (elementCenterY - mouseY) / 20;

                gsap.to(movableElement, { x: moveX, y: moveY, duration: 0.3 });
            });
        };

        document.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);


    return (
        <>
            <div className='w-full lg:py-20 py-10 Commerse'>

                <div className='flex justify-between items-center lg:pl-36 lg:pr-20 py-20 pl-2 '>
                    {/* FIRST BOX */}
                    <div className='conversion movable cursor-pointer lg:w-[19rem] md:w-[38%] w-[48%] h-full  bg-[#faf8f7] p-3'>
                        <p className='lg:text-[21px] md:text-[18px] text-[15px] font-semibold text-start'>Conversion rate increase</p>
                        <p className='lg:text-[60px] md:text-[40px] text-[30px] font-bold text-start'>+12%</p>
                        <div className='grid grid-cols-4  con-items items-end lg:gap-2 gap-1 lg:pt-2 pt-8'>
                            <div className='lg:w-[4rem]   w-[100%] lg:h-[3.5rem] h-[2rem]  bg-[#d8ccb5]' ></div>
                            <div className='lg:w-[4rem]   w-[100%] lg:h-[6.5rem] h-[3.5rem] bg-[#d8ccb5]' ></div>
                            <div className='lg:w-[4rem]   w-[100%] lg:h-[5rem] h-[2.8rem] bg-[#d8ccb5]' ></div>
                            <div className='lg:w-[4rem]   w-[100%] lg:h-[9.5rem] h-[5rem] bg-[#b09769]' ></div>
                        </div>
                    </div>
                    {/* SECOND BOX */}
                    <div className='Brand  movable cursor-pointer lg:w-[28.9rem] md:w-[38%] w-[47%] relative top-28 bg-[#faf8f7] p-3 md:pt-5 '>
                        <div className="flex justify-between items-center w-full ">
                            <p className='lg:text-[21px] md:text-[18px] text-[15px] font-semibold '>Brands moved to Shopify</p>
                            <img src=".\Second Section\Arrow.jpg" alt="arrow" className='arrow' />
                        </div>
                        <p className='lg:text-[60px] text-[30px] font-bold  text-start'>150+</p>
                    </div>
                </div>

                {/* MIDDLE WORKD */}
                <div className='lg:w-[60%] md:w-[70%] w-[55%] movable2 mx-auto relative top-0 left-0 -z-[10px] text-center build-mid' >
                    <p className='xl:text-[100px] md:text-[80px] sm:text-[50px] text-[30px] leading-10 font-bold'>We build <span className='text-white'>the next</span> in commerce.</p>
                </div>


                <div className='lg:pt-16 pt-28  flex  justify-between lg:gap-2 gap-4 lg:px-20 lg:py-24 pl-2 py-20'>
                    {/* THIRD BOX */}
                    <div className='conversion move movable beyond cursor-pointer md:order-1 order-2  lg:w-[20rem] lg:h-[20rem] md:w-[30%] sm:w-[30%] w-[48%]   bg-[#faf8f7] text-white lg:p-6 p-3  '>
                        <div className='relative lg:top-[9rem] md:top-[50%] top-[4rem]'>
                            <p className='lg:text-[21px] md:text-[18px] text-[15px] '>Beyond Headless</p>
                            <p className='lg:text-[33px] md:text-[28px] text-[17] font-semibold '>Shopify</p>
                            <p className='lg:text-[33px] md:text-[28px] text-[17] font-semibold '>Simplified</p>
                        </div>
                    </div>
                    {/* FOURTH BOX */}
                    <div className='conversion move movable relative md:top-16 -top-20 md:order-2  order-1 cursor-pointer lg:w-[22rem] sm:w-[30%]  w-[9.5rem] bg-[#faf8f7] text-black lg:px-5 px-2  pt-2'>
                        <p className='lg:text-[40px] md:text-[30px] text-[20px] font-bold'>Brand stories</p>
                        <div className='shoe-div'>
                            <img src="./Second Section/shoe.png" alt="shoe" className='shoe' />
                        </div>
                        <div className='flex  justify-between  relative -top-2 '>
                            <p className='lg:text-[21px] md:text-[18px] text-[13px] font-semibold' >Listen to our podcast</p>
                            <svg class="w-3 lg:w-4 overflow-hidden" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aspectratio="xMidYMid meet">
                                <path d="M24.6287 48L19.1908 42.4936L33.3109 28.0728L0.0430466 27.8872L0 19.8396L33.2679 20.0252L18.9927 5.46982L24.372 0L48 24.1311L24.6287 48Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
