import React, { useState, useEffect } from 'react';
import "./Expert.css";
import Accordian from './Accordian/Accordian';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);
export default function Expert() {
    useEffect(() => {
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
        homeanime(".expert");
    }, []);

    const [openAccordionId, setOpenAccordionId] = useState(1); // Open the first accordion by default

    const handleToggleAccordion = (id) => {
        if (openAccordionId === id) {
            setOpenAccordionId(null); // Close the accordion if it's already open
        } else {
            setOpenAccordionId(id); // Open the clicked accordion
        }
    };

    return (
        <>
            <div className='bg-[#131313] '>
                <div className='py-[6rem] max-w-full'>
                    <p className='text-[clamp(2.5rem,7vw,6.25rem)] expert text-center text-[#faf8f7] font-bold w-full overflow-hidden'>
                        Our <span className='text-[#878685]'>expertise</span>
                    </p>
                </div>
                <div className='pb-10'>
                    <Accordian
                        id={1}
                        title={"Strategy"}
                        description={`We're your strategic partner, deeply understanding your brand's essence with a dedicated product owner for each project, crafting personalized, data-informed strategies that put you ahead of the competition.`}
                        isOpen={openAccordionId === 1}
                        toggleAccordion={handleToggleAccordion}
                    />
                    <Accordian
                        id={2}
                        title={"Creative"}
                        description={`From wireframe to post-launch optimisation, our designers are there every step of the way. We strive for a perfect balance between conversion and brand experience, all while prioritizing mobile-first design.`}
                        isOpen={openAccordionId === 2}
                        toggleAccordion={handleToggleAccordion}
                    />
                    <Accordian
                        id={3}
                        title={"Technology"}
                        description={`As Europe's leading Shopify Plus partner, we excel in scalable commerce solutions. Our expertise encompasses everything from custom themes using our Ask Phill starter, to advanced headless development and efficient no-code theme implementations.`}
                        isOpen={openAccordionId === 3}
                        toggleAccordion={handleToggleAccordion}
                    />
                </div>
            </div>
        </>
    );
}
