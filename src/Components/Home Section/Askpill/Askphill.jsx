import React, { useEffect, useState } from 'react'
import "./Askphill.css"
import gsap from 'gsap/all';


export default function Askphill() {
    const [show, setShow] = useState(true);
    const [sec, setSec] = useState(true)
    useEffect(() => {
        const value = document.getElementById('build');
        const videoContainer = document.getElementById('video');
       
        setTimeout(() => {
            setShow(false);
        }, 400);
        setTimeout(() => {
            setSec(false);
        }, 700);
        if (!show && !sec) {
            const screenHeight = '100vh';
            gsap.timeline()
                .set(value, { y: screenHeight })
                .to(value, { y: '55vh', duration: 0.5 })
                .add(() => {
                    document.getElementById('toggle').click();       
                })
                .add(() => {
                }, '+=1')
                .add(() => {
                    document.getElementById('toggle').click();
                    document.getElementById("svg-icon").style.color = "black";
                    // window.addEventListener('scroll', handleScroll);
                   
                })
                .to(value, { y: -100, duration: 0.6 })
                .set(value, { y: -screenHeight })
                .fromTo(videoContainer, { y: '100vh',opacity:0 }, { y: '0vh', duration: .5,opacity:1 }, '-=0.5')
            videoContainer.style.display = 'block';
          
        }

    }, [show, sec]);

    return (
        <>
            <div id='Askphill' className='h-[100vh] overflow-hidden '>
                <div id='askphill' className={` relative  top-0 left-0 w-[100%] h-[100vh] ${show ? 'Askphill df ' : `filled  ${sec ? 'df' : 'center '}`}`}>
                    <svg
                        data-target="page-transition.intro-logo"
                        className={`absolute w-[200px] origin-center scale-[0.80] cursor-pointer ${show ? "text-white lg:w-[320px]" : `text-[#de0015]  ${sec ? "lg:w-[320px] " : `lg:w-[100px] w-[5rem] mt-10 slide-top fixed z-10 `}`}`}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 77 21"
                        id='svg-icon'
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_2046_2633)">
                            <path
                                d="M5.77975 10.7605V3.77386C5.77975 2.95229 5.38683 2.54485 4.60099 2.54485H3.86584C3.08 2.54485 2.68708 2.95229 2.68708 3.77386V10.7605H5.77975ZM2.69342 21H0V3.60019C0 1.20229 1.07103 0 3.21942 0H5.24741C7.3958 0 8.46683 1.20229 8.46683 3.60019V21H5.77975V13.3053H2.69342V21Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M16.0217 5.64408V3.80057C16.0217 2.96565 15.6288 2.54485 14.8429 2.54485H14.4246C13.6578 2.54485 13.2776 2.96565 13.2776 3.80057V7.28053C13.2776 7.67462 13.3536 7.93511 13.4994 8.0687C13.7275 8.2624 13.9747 8.43607 14.2282 8.59637L16.7822 10.0324C17.1941 10.2595 17.587 10.5267 17.9609 10.8206C18.2018 10.9943 18.3919 11.2214 18.5186 11.4952C18.6517 11.749 18.7151 12.25 18.7151 12.9847V17.4532C18.7151 19.8111 17.6314 20.9933 15.464 20.9933H13.8036C11.6552 20.9933 10.5841 19.7042 10.5841 17.1326V16.084H13.2712V17.2261C13.2712 18.0477 13.6705 18.4552 14.4753 18.4552H14.957C15.6668 18.4552 16.0217 18.0477 16.0217 17.2261V13.6594C16.0217 13.2719 15.9456 13.0048 15.7935 12.8712C15.5654 12.6775 15.3182 12.4971 15.0647 12.3435L12.5044 10.854C12.0734 10.6269 11.6615 10.3664 11.2686 10.0658C11.0214 9.84542 10.844 9.57156 10.7362 9.24427C10.6158 8.80343 10.5588 8.35592 10.5778 7.90172V3.60019C10.5778 1.20229 11.6488 0 13.7972 0H15.483C17.6314 0 18.7024 1.20229 18.7024 3.60019V5.65076H16.0153L16.0217 5.64408Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M29.8685 21H27.1751L23.8099 10.7338V10.5668L26.611 0H29.0826L26.2498 10.4399L29.8685 21ZM23.6641 21H20.9707V0H23.6641V21Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M38.6016 10.8473H40.3127C41.0225 10.8473 41.3774 10.4399 41.3774 9.61832V3.77386C41.3774 2.95229 40.9782 2.54485 40.1733 2.54485H38.6016V10.8473ZM35.9082 0H40.8197C42.9871 0 44.0772 1.20229 44.0772 3.60019V9.82538C44.0772 12.2032 43.0061 13.3922 40.8578 13.3922H38.608V21H35.9145V0H35.9082Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M52.2145 21V11.4618H48.9063V21H46.2129V0H48.9063V8.91699H52.2145V0H54.9079V21H52.2145Z"
                                fill="currentColor"
                            ></path>
                            <path d="M60.1426 0H57.4492V21H60.1426V0Z" fill="currentColor"></path>
                            <path
                                d="M69.0532 21H62.6523V0H65.3458V18.4618H69.0532V21Z"
                                fill="currentColor"
                            ></path>
                            <path d="M77.0004 21H70.5996V0H73.293V18.4618H77.0004V21Z" fill="currentColor"></path>
                        </g>
                    </svg>

                    <div className='build absolute -top-32 lg:left-1  lg:pl-16 pl-2 pt-16 sm:pt-0' >
                        <div id='build' className='flex'>
                            <h1 style={{ opacity: show && sec ? 0 : 1 }} className='xl:text-[6.5rem] lg:text-[5rem] sm:text-[3.5rem] text-[28px] font-bold'>We bulid the next</h1>
                            <div className='button lg:pl-10 pl-1'>
                                <input type="checkbox" id="toggle" />
                                <label id="switch" htmlFor="toggle">
                                    <div id="circle"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div id='video' style={{ display: 'none' }} className='relative top-0 left-0  w-full'>
                        <video autoPlay loop muted className='h-full w-full object-cover'>
                            <source src="./Home Section/Home_video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}
