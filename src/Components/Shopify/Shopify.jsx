import React, { useEffect, useState } from 'react'
import "./Shopify.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Shopify() {
    const [toggleToggled, setToggleToggled] = useState(false);

    useEffect(() => {
        // GSAP animation for the toggle switch
        gsap.to("#circle2", {
            scrollTrigger: {
                trigger: "#circle2",
                start: 'top 50%', // Trigger animation when the top of the circle reaches the bottom of the viewport
                end: '+=100%', // Offset for when the animation should end
                toggleActions: 'play none none reverse',
                onEnter: () => {
                    // Toggle the switch only if it's not already toggled
                    if (!toggleToggled) {
                        setToggleToggled(true);
                    }
                },
            },
        });
    }, [toggleToggled]);

    return (
        <>
            <div className=' w-full bg-[#e4e0de] py-10'>
                <div className='sm:w-[90%] w-[100%] mx-auto pt-5'>
                    <p className='text-[clamp(2.5rem,7vw,6.25rem)] font-bold tracking-tight text-center leading-[100%]  '>Europe’s <span className='text-[#95bf46]'>leading</span><br /> Shopify Plus partner</p>
                </div>
                <div className=''>
                    <input
                        type="checkbox"
                        id="toggle2"
                        checked={toggleToggled}
                        readOnly
                    />
                    <label htmlFor="toggle2" id="switch1" >
                        <div id="circle2" className='flex justify-center items-center bouncing-bg'>
                            <svg className='lg:min-w-[70%] sm:max-w-[80%] max-w-[60%] sm:w-[70%] lg:w-[70%]  ' height="388" viewBox="0 0 341 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M298.096 75.4848C297.829 73.5386 296.127 72.4629 294.72 72.3448C293.316 72.2267 263.597 70.0225 263.597 70.0225C263.597 70.0225 242.957 49.5132 240.693 47.2437C238.426 44.9742 233.999 45.6644 232.282 46.1711C232.027 46.2457 227.772 47.5608 220.73 49.7401C213.835 29.8837 201.668 11.6345 180.261 11.6345C179.671 11.6345 179.062 11.6594 178.453 11.6936C172.366 3.63537 164.824 0.134766 158.311 0.134766C108.446 0.134766 84.6221 62.5269 77.152 94.2344C57.7763 100.244 44.0102 104.516 42.2522 105.069C31.4369 108.464 31.0952 108.806 29.6757 119.006C28.6041 126.728 0.304688 345.78 0.304688 345.78L220.82 387.135L340.305 361.263C340.305 361.263 298.36 77.4309 298.096 75.4848ZM208.542 53.5143C203.004 55.2304 196.708 57.1797 189.884 59.2937C189.89 57.9786 189.896 56.6822 189.896 55.2677C189.896 42.9254 188.185 32.9894 185.439 25.1115C196.469 26.4981 203.815 39.058 208.542 53.5143ZM171.757 27.5582C174.822 35.2496 176.817 46.2861 176.817 61.1808C176.817 61.9425 176.81 62.6389 176.804 63.3446C164.669 67.1063 151.483 71.1914 138.267 75.2889C145.688 46.625 159.597 32.7811 171.757 27.5582ZM156.941 13.5216C159.093 13.5216 161.261 14.2522 163.336 15.6823C147.355 23.2089 130.225 42.1669 122.991 80.0237C112.418 83.3005 102.084 86.5026 92.5302 89.4654C101.004 60.5901 121.125 13.5216 156.941 13.5216Z" fill="#95BF46" />
                                <path d="M294.718 72.345C293.314 72.2269 263.595 70.0227 263.595 70.0227C263.595 70.0227 242.956 49.5134 240.691 47.2439C239.843 46.3983 238.7 45.9661 237.504 45.7796L220.831 387.132L340.303 361.263C340.303 361.263 298.359 77.4311 298.095 75.485C297.827 73.5388 296.125 72.4632 294.718 72.345Z" fill="#5E8E3E" />
                                <path d="M180.26 138.424L165.528 182.287C165.528 182.287 152.619 175.392 136.797 175.392C113.6 175.392 112.433 189.963 112.433 193.635C112.433 213.668 164.608 221.344 164.608 268.27C164.608 305.188 141.213 328.961 109.668 328.961C71.8144 328.961 52.4573 305.38 52.4573 305.38L62.5925 271.863C62.5925 271.863 82.49 288.962 99.2814 288.962C110.252 288.962 114.715 280.316 114.715 273.999C114.715 247.866 71.9107 246.7 71.9107 203.76C71.9107 167.619 97.8278 132.645 150.143 132.645C170.302 132.645 180.26 138.424 180.26 138.424Z" fill="white" />
                            </svg>
                        </div>
                    </label>
                </div>
                <div className='xl:w-[64%] sm:w-[65%] w-[100%] mx-auto'>
                    <p className='text-[clamp(1.75rem,4.2vw,3.75rem)] font-bold text-center'>Not to brag, but we’re really good at Shopify. Find out why.</p>
                </div>
                <div className='flex justify-center item-center py-10'>
                    <button className='sm:w-[10rem] sm:h-[3rem] w-[8rem] h-[2.5rem] bouncing-round rounded-full sm:text-[20px] text-[15px] font-semibold bg-[#95bf46]'>Learn more</button>
                </div>
            </div>
        </>
    )
}
