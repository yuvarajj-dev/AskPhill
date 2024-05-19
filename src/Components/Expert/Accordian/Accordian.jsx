import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Accordian({ id, title, description, isOpen, toggleAccordion }) {
    useEffect(() => {
        const element = document.querySelector(`.accordion-content-${id}`);
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
    }, [isOpen, id]);

    return (
        <div onClick={() => toggleAccordion(id)} className='cursor-pointer'>
            <div className={`lg:w-[92%] w-[95%] lg:h-auto md:rounded-3xl sm:rounded-2xl rounded-xl mx-auto ${isOpen ? 'bg-[#fff]' : 'bg-[#191919]'} text-[${isOpen ? '#191919' : '#fff'}] ${isOpen ? '' : ' hover:bg-[#292929]'} lg:grid lg:grid-cols-2 items-start lg:py-0 py-5 my-10 px-5`}>
                <div className='lg:py-9 lg:px-16'>
                    <p className='lg:text-[50px] sm:text-[40px] text-[30px] font-bold'>{title}</p>
                </div>
                <div className={`bg-${isOpen ? '#faf8f7' : '#191919'} text-${isOpen ? '#191919' : '#faf8f7'} accordion-content accordion-content-${id}`} style={{ height: 0, overflow: 'hidden' }}>
                    <div className='lg:py-16 xl:w-[85%] w-[95%]'>
                        <p className='lg:text-[20px] sm:text-[17px] text-[15px] font-semibold'>{description}</p>
                        <button className='lg:my-5 bouncy-button mt-3 bg-[#131313] sm:h-[3rem] h-[2.5rem] w-[7rem] lg:w-[30%] sm:w-[18%] text-[#faf8f7] lg:text-[20px] sm:text-[17px] text-[14px] text-center self-center sm:rounded-full rounded-3xl font-semibold cursor-pointer'>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
