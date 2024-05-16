import React from 'react';
import "./Expert.css";
import Accordian from './Accordian/Accordian';



export default function Expert() {
    return (
        <>
            <div className='bg-[#131313] text-[#faf8f7] '>
                <div className='py-[6rem]'>
                    <p className='text-[clamp(2.5rem,7vw,6.25rem)] text-center font-bold '>Our <span className='text-[#878685]'>expertise</span></p>
                </div>
                <div className='pb-10'>
                    <Accordian title={"Strategy"} description={`We're your strategic partner, deeply understanding your brand's essence with a dedicated product owner for each project, crafting personalized, data-informed strategies that put you ahead of the competition.`} />
                    <Accordian title={"Creative"} description={`From wireframe to post-launch optimisation, our designers are there every step of the way. We strive for a perfect balance between conversion and brand experience, all while prioritizing mobile-first design.`} />
                    <Accordian title={"Technology"} description={`As Europe's leading Shopify Plus partner, we excel in scalable commerce solutions. Our expertise encompasses everything from custom themes using our Ask Phill starter, to advanced headless development and efficient no-code theme implementations.`} />
                </div>
            </div>
        </>
    )
}
