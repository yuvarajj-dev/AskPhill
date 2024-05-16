import React, { useEffect, useState } from 'react'
import Photocard from './Photocard/Photocard'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Shift() {
  const initializeScrollAnimation = (containerClass, scrollPercentage, direction) => {
    const container = document.querySelector(containerClass);

    const maxScroll = container.scrollWidth - container.clientWidth;
    const scrollAmount = maxScroll * scrollPercentage;

    gsap.to(container, {
      x: () => direction === 'right'
        ? `-${scrollAmount}px`
        : `${scrollAmount}px`,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: container,
        start: 'top 95%',
        end: 'bottom 5%',
        scrub: 1,
      }
    });
  };

  useEffect(() => {
    initializeScrollAnimation('.roll-1', .2, 'left');
    initializeScrollAnimation('.roll-2', .2, 'right');
    initializeScrollAnimation('.roll-3', 0.4, 'left');
    initializeScrollAnimation('.roll-4', 0.4, 'right');
  }, []);


  return (
    <>
      <div className=' bg-[#faf8f7] overflow-hidden py-[5%] '>
        <div className='flex w-full roll-1 py-[.5rem] lg:-ml-[25rem] sm:-ml-[10rem] md:-ml-[40rem] -ml-[26rem]'>
          <Photocard link={".\\Shifiting\\kelly.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <p className='lg:text-[max(18svh,8.75rem)] md:text-[max(18svh,2rem)] text-[10svh] md:leading-[8rem] tracking-tighter  font-bold'>Built</p>
          <Photocard link={".\\Shifiting\\nicolas.png"} />
          <Photocard link={".\\Shifiting\\jaap.png"} />
          <Photocard link={".\\Shifiting\\jamal.png"} />
        </div>
        <div className='flex  roll-2 py-[.5rem] lg:-ml-[5rem] sm:-ml-[15rem] md:-ml-[30rem] -ml-[25rem] '>
          <Photocard link={".\\Shifiting\\wiebe.png"} />
          <Photocard link={".\\Shifiting\\kelly.png"} />
          <Photocard link={".\\Shifiting\\gordon.png"} />
          <p className='lg:text-[max(18svh,8.75rem)] md:text-[max(18svh,2rem)] text-[10svh] md:leading-[8rem] tracking-tighter  font-bold'>by</p>
          <Photocard link={".\\Shifiting\\yasmin.png"} />
          <Photocard link={".\\Shifiting\\malcolm.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
        </div>
        <div className='flex  roll-3 py-[.5rem] lg:-ml-[35rem] sm:-ml-[10rem] md:-ml-[50rem] -ml-[35rem]'>
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\jamal.png"} />
          <p className='lg:text-[max(18svh,8.75rem)] md:text-[max(18svh,2rem)] text-[10svh] md:leading-[8rem] tracking-tighter  font-bold'>the</p>
          <Photocard link={".\\Shifiting\\zena.png"} />
          <Photocard link={".\\Shifiting\\wiebe.png"} />
          <Photocard link={".\\Shifiting\\kelly.png"} />
        </div>
        <div className='flex  roll-4 py-[.5rem] lg:-ml-[0] -ml-[10rem] sm:-ml-[1rem]'>
          <Photocard link={".\\Shifiting\\malcolm.png"} />
          <Photocard link={".\\Shifiting\\ines.png"} />
          <p className='lg:text-[max(18svh,8.75rem)] md:text-[max(18svh,2rem)] text-[10svh] md:leading-[8rem] tracking-tighter  font-bold'>ambitious</p>
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\jaap.png"} />
        </div>
      </div>
    </>
  )
}
