import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

export default function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const element = document.querySelector(`.accordion-content-${props.id}`);
        if (isOpen) {
            gsap.to(element, {
                height: 'auto',
                duration: 0.3,
                ease: 'power2.inOut',
                onStart: () => {
                    element.style.height = `${element.scrollHeight}px`;
                },
                onComplete: () => {
                    element.style.height = 'auto';
                }
            });
        } else {
            gsap.to(element, {
                height: 0,
                duration: 0.5,
                ease: 'power2.inOut'
            });
        }
    }, [isOpen, props.id]);

    return (
        <div onClick={toggleAccordion} className='cursor-pointer'>
            <div className={`lg:w-[92%] w-[95%] lg:h-auto md:rounded-3xl sm:rounded-2xl rounded-xl mx-auto bg-[${isOpen ? '#faf8f7' : '#191919'}] text-[${isOpen ? '#191919' : '#faf8f7'}] ${isOpen ? "": `hover:bg-[#292929]`} lg:grid lg:grid-cols-2 items-start lg:py-0 py-5 my-10 px-5`}>
                <div className='lg:py-9 lg:px-16'>
                    <p className='lg:text-[50px] sm:text-[40px] text-[30px] font-bold'>{props.title}</p>
                </div>
                <div className={`bg-${isOpen ? '#faf8f7' : '#191919'} text-${isOpen ? '#191919' : '#faf8f7'} accordion-content accordion-content-${props.id}`} style={{ height: 0, overflow: 'hidden' }}>
                    <div className='lg:py-16 xl:w-[85%] w-[95%]'>
                        <p className='lg:text-[20px] sm:text-[17px] text-[15px] font-semibold'>{props.description}</p>
                        <button className='lg:my-5 bouncing-bg mt-3 bg-[#131313] sm:h-[3rem] h-[2.5rem] w-[7rem] lg:w-[30%] sm:w-[18%] text-[#faf8f7] lg:text-[20px] sm:text-[17px] text-[14px] text-center self-center sm:rounded-full rounded-3xl font-semibold cursor-pointer'>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
