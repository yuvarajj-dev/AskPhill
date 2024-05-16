import React from 'react'

export default function Photocard(props) {
    return (
        <>
            <div className='mx-3'>
                <div className='md:w-[20rem] md:max-w-[20rem] md:min-w-[20rem] w-[10rem] bg-[#d8ccb5] md:h-[9rem] md:max-h-[9rem] md:min-h-[9rem] rounded-2xl '>
                    <img src={props.link} alt="images" className='object-cover w-full h-full' />
                </div>
            </div>
        </>
    )
}
