import React from 'react'

export default function Accordian(props) {
    return (
        <>
            <div >
                <div className='lg:w-[92%] w-[95%] lg:h-[20rem]  md:rounded-3xl sm:rounded-2xl  rounded-xl mx-auto bg-white text-[#131313] lg:grid lg:grid-cols-2 items-start lg:py-0 py-5 my-10 px-5'>
                    <div className='lg:py-9 lg:px-16'>
                        <p className='lg:text-[60px] sm:text-[40px] text-[30px] font-bold'>{props.title}</p>
                    </div>
                    <div className='lg:py-16 xl:w-[85%] w-[95%] '>
                        <p className='lg:text-[20px] sm:text-[17px] text-[15px] font-semibold'>{props.description}</p>
                        <button className='lg:my-5 bouncing-bg mt-3 bg-[#131313] sm:h-[3rem] h-[2.5rem] w-[7rem] lg:w-[30%] sm:w-[18%]  text-[#faf8f7] lg:text-[20px] sm:text-[17px] text-[14px] text-center self-center sm:rounded-full rounded-3xl font-semibold cursor-pointer'>Read more</button>
                    </div>
                </div>
            </div>
        </>
    )
}
