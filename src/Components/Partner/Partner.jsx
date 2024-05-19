import React, { useEffect } from 'react'
import "./Parter.css"
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Partner() {
    useEffect(() => {
        const cards = gsap.utils.toArray('.Card');

        gsap.set(cards, { yPercent: 100, autoAlpha: 0 });

        ScrollTrigger.batch(cards, {
            onEnter: batch => {
                gsap.to(cards[1], {
                    yPercent: 0,
                    autoAlpha: 1,
                    duration: .5,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.to([cards[0], cards[2]], {
                            yPercent: 0,
                            autoAlpha: 1,
                            stagger: 0.2,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    }
                });
            }
        });

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, { y: '-2rem', duration: 0.3, ease: 'power1.inOut' });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, { y: '0rem', duration: 0.3, ease: 'power1.inOut' });
            });
        });
    }, []);
    
    return (
        <>
            <div className='Partner lg:h-[110vh]  w-full bg-[#faf8f7]  grid lg:grid-cols-2 grid-row-2 sm:px-[4rem] items-center overflow-y-hidden'>
                {/* TEXT SECTION */}
                <div className=' flex flex-col lg:items-start items-center gap-10  sm:pt-0 pt-10 '>
                    <p className='xl:text-[100px] lg:text-[80px] hidden lg:flex font-bold tracking-tight leading-[100px]'>Partner <br /> in success stories</p>
                    <p className='sm:text-[70px] lg:hidden text-[2.5rem] font-bold tracking-tight text-center sm:leading-[100px]'>Partner in success stories</p>
                    <button className='bouncy-button w-[9em] h-[3rem] sm:text-[21px] text-[15px] font-semibold rounded-full  bg-[#d8ccb5]'>See our work</button>
                </div>
                {/* CARD SECTION */}
                <div className='Cards relative sm:top-0 sm:left-0 lg:h-0 md:h-[55vh] sm:h-[60vh] lg:pt-10 pt-[5rem]   '>
                    <div className='Card bg-[#deddd4] lg:w-[90%]  sm:w-[80%] w-[90%]  mx-auto  rounded-3xl grid grid-cols-2 gap-10 sm:p-5 p-2 sm:absolute lg:bottom-0 sm:left-24    ' >
                        <div className='lg:h-[17rem] sm:h-[16rem] h-[8rem] '>
                            <img src=".\Partner\Filling.jpg" alt="Filling" className='w-full h-full rounded-2xl border-[1px] border-[]' />
                        </div>
                        <div className=''>
                            <p className='xl:text-[60px] lg:text-[45px] sm:text-[40px] text-[30px] sm:leading-[60px] text-[#745338] font-bold'>Filling Pieces</p>
                        </div>
                    </div>

                    <div className='Card bg-[#f2bf25] lg:w-[90%] sm:w-[80%] w-[90%]   mx-auto  rounded-3xl grid grid-cols-2 gap-10 sm:p-5 p-2 sm:absolute  sm:left-24 sm:top-[10rem] lg:-top-[9rem] relative -top-[4rem]  ' >
                        <div className='lg:h-[17rem] sm:h-[16rem] h-[8rem]'>
                            <img src=".\Partner\mr-marvis.jpg" alt="Filling" className='w-full h-full rounded-2xl ' />
                        </div>
                        <div className=''>
                            <p className='xl:text-[60px] lg:text-[45px] sm:text-[40px] text-[30px] sm:leading-[60px] leading-8 text-[#010228] font-bold'>Mr Marvis</p>
                        </div>
                    </div>

                    <div className='Card bg-[#585f53] lg:w-[90%] sm:w-[80%] w-[90%] mx-auto rounded-3xl  grid grid-cols-2 gap-10 sm:p-5 p-2 absolute  sm:left-24  sm:top-[15rem] lg:-top-[2rem] top-[13rem] left-[1rem] ' >
                        <div className='lg:h-[17rem] sm:h-[16rem] h-[8rem]'>
                            <img src=".\Partner\denham.jpg" alt="Filling" className='w-full h-full rounded-2xl' />
                        </div>
                        <div className='flex flex-col  justify-between'>
                            <p className='xl:text-[60px] lg:text-[45px] sm:text-[40px] text-[30px] sm:leading-[60px] text-[#d6cabf] font-bold'>Denham</p>
                            <button className='w-[110px] h-[35px] rounded-full   bg-[#d6cabf]'>Headless</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
