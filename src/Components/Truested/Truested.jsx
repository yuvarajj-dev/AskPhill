import React, { useEffect } from 'react'
import Card from "./Card/Card";
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Truested() {
    useEffect(() => {
        const allCards = document.querySelectorAll('.D-card1, .D-card2, .D-card3, .D-card4, .D-card5');

       
        allCards.forEach((card, index) => {
            let initialPositions = {
                card1: { x: '140%', y: '0%', },
                card2: { x: '20%', y: '0%', },
                card3: { x: '-120%', y: '0%',  },
                card4: { x: '100%', y: '-30%',  },
                card5: { x: '-50%', y: '-40%',  }
            };

            gsap.fromTo(
                card,
                { opacity: 0, scale: 0.5, x: initialPositions[`card${index + 1}`].x, y: initialPositions[`card${index + 1}`].y, rotation: initialPositions[`card${index + 1}`].rotation, transformOrigin: 'center' },
                {
                    opacity: 1,
                    scale: 1,     
                    duration: 0.5,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 100%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                        once: true,
                    },
                    onComplete: () => {
                        gsap.to(card, { x: 0, y: 0, duration: 0.5 }); 
                    },
                }
            );
        });
        const mouseMoveHandler = (e) => {
            allCards.forEach((card, index) => {
                const boundingRect = card.getBoundingClientRect();
                const elementCenterX = boundingRect.left + boundingRect.width / 2;
                const elementCenterY = boundingRect.top + boundingRect.height / 2;

                const mouseX = e.clientX;
                const mouseY = e.clientY;

                // Create a unique modifier for each card based on its index
                const modifierX = 1 + index * 0.1;
                const modifierY = 1 + index * 0.1;

                const moveX = (mouseX - elementCenterX) / (30 * modifierX);
                const moveY = (mouseY - elementCenterY) / (30 * modifierY);

                gsap.to(card, { x: moveX, y: moveY, duration: 0.3 });
            });
        };

        document.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);



    return (
        <>
            <div className="Truested py-10 bg-[#faf8f7] overflow-hidden xl:h-[180vh] lg:h-[200vh] md:h-[100vh] sm:h-[100vh] h-[100vh]">
                <div className='lg:py-20 py-10'>
                    <p className='text-[clamp(2.5rem,7vw,6.25rem)] sm:w-full w-[80%] mx-auto  font-bold text-center tracking-tighter leading-[1] py-5'>Trusted by the finest</p>
                    <div className='flex justify-center items-center py-5'>
                        <button className=' bouncing-bg w-[10em] h-[3rem] sm:text-[21px] text-[15px] font-semibold rounded-full bouncy-button  bg-[#d8ccb5]'>Highlighted cases</button>
                    </div>
                </div>
                {/* CARD SECTION */}
                <div className='Cards relative py-16'>
                    <div className='grid grid-cols-3'>

                        <Card
                            title="North Sails Apparel"
                            image="./Truested/North.webp"
                            bgColor="bg-[#27be40]"
                            textColor="text-[#2a373f]"
                            rotation="-rotate-[8deg]"
                            extraClasses="sm:top-0 top-[8rem] sm:right-0 right-[6rem] D-card1 "
                            Imageclass=" sm:h-[8rem] sm:w-[12rem]  h-[5rem] w-[10rem]  "
                        />
                        <Card
                            title="Pink Gellac"
                            image="./Truested/pink-gellac.jpg"
                            bgColor="bg-[#f0ccdf]"
                            textColor="text-[#c56386]"
                            rotation="sm:-rotate-[9deg] rotate-[9deg]"
                            extraClasses="sm:w-[14rem] w-[9rem] sm:top-0 top-[7rem] sm:right-0 right-[1rem] z-30 D-card2"
                            Imageclass="sm:h-[8rem] sm:w-[12rem]  h-[5rem] w-[11rem] "
                        />
                        <Card
                            title="Nike x Corteiz"
                            image="./Truested/nike.jpg"
                            bgColor="bg-[#cd703f]"
                            textColor="text-[#e4d8c8]"
                            rotation="sm:rotate-[9deg] -rotate-[9deg]"
                            extraClasses=" sm:top-0 top-[8rem] sm:left-0 left-[3.5rem] z-50 D-card3"
                            Imageclass="sm:h-[8rem] sm:w-[12rem] h-[5rem] w-[10rem] "
                        />
                    </div>

                    <div className='grid grid-cols-2 absolute top-[50%] left-[20%]'>
                        <Card
                            title="No Label"
                            image="./Truested/no-label-.jpg"
                            bgColor="bg-[#e0e0e0]"
                            textColor="text-[#151924]"
                            rotation="sm:-rotate-[15deg] -rotate-[9deg]"
                            extraClasses="relative md:-top-[5rem] xl:-left-[2rem] lg:-left-[4rem] md:-left-[6rem] sm:top-0 -top-[8rem] sm:left-0 -left-[3rem]  D-card4 "
                            Imageclass="sm:h-[8rem] sm:w-[12rem] h-[5rem] w-[10rem]"
                        />
                        <Card
                            title="Fest"
                            image="./Truested/fest.jpg"
                            bgColor="bg-[#52445e]"
                            textColor="text-[#bccbe5]"
                            rotation="rotate-[9deg]"
                            extraClasses="relative xl:left-[5rem] lg:-left-[1rem] md:-left-[10rem] z-40  sm:top-0 -top-[9rem] sm:left-0 left-[1rem] D-card5  "
                            Imageclass="sm:h-[8rem] sm:w-[12rem] h-[5rem] w-[10rem] "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

