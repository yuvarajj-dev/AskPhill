import React, { useEffect, useState } from 'react'
import Photocard from './Photocard/Photocard'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Shift() {
  const initializeScrollAnimation = (containerClass, scrollPercentage, direction) => {
    const container = document.querySelector(containerClass);

    gsap.to(container, {
      x: () => direction === 'right'
        ? `${container.scrollWidth - container.clientWidth}px`
        : `-${container.scrollWidth - container.clientWidth}px`,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: container,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: 1,
      
        onUpdate: self => {
          const progress = self.progress;
          const scrollAmount = (container.scrollWidth - container.clientWidth) * scrollPercentage * progress;

          container.scrollLeft = scrollAmount;
        }
      }
    });
  };

  useEffect(() => {
    initializeScrollAnimation('.roll-1', 20, 'right');
    initializeScrollAnimation('.roll-2', 0.2, 'left');
    initializeScrollAnimation('.roll-3', 0.1, 'right');
    initializeScrollAnimation('.roll-4', 0.2, 'left');
  }, []);


  return (
    <>
      <div className=' bg-[#faf8f7] overflow-hidden py-[5%] '>
        <div className='flex w-full roll-1 py-[.5rem] -ml-[25rem]'>
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <p className='lg:text-[max(18svh,8.75rem)] text-[9svh] md:leading-[8rem] tracking-tighter  font-bold'>Built</p>
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
        </div>
        <div className='flex  roll-2 py-[.5rem] -ml-[15rem] '>
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <p className='lg:text-[max(18svh,8.75rem)] text-[9svh] md:leading-[8rem] tracking-tighter  font-bold'>by</p>
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
        </div>
        <div className='flex  roll-3 py-[.5rem] -ml-[30rem]'>
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <p className='lg:text-[max(18svh,8.75rem)] text-[9svh] md:leading-[8rem] tracking-tighter  font-bold'>the</p>
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
        </div>
        <div className='flex  roll-4 py-[.5rem]'>
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
          <p className='lg:text-[max(18svh,8.75rem)] text-[9svh] md:leading-[8rem] tracking-tighter  font-bold'>ambitious</p>
          <Photocard link={".\\Shifiting\\diana.png"} />
          <Photocard link={".\\Shifiting\\diana.png"} />
        </div>
      </div>
    </>
  )
}
