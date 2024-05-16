import React, { useEffect } from 'react';

const Card = ({ title, image, bgColor, textColor, rotation, extraClasses, Imageclass }) => {
   
    return (
        <div className={`xl:min-w-[25rem] D-cards xl:w-[25rem] lg:min-w-[20rem] md:min-w-[25rem] md:w-[25rem] lg:w-[20rem]   xl:h-[34rem] md:rounded-3xl rounded-2xl ${bgColor} mx-auto md:p-5 p-2 grid grid-rows-2 ${rotation} relative ${extraClasses}`}>
            <div className=''>
                <p className={`text-[clamp(2.125rem,5.4vw,4.875rem)] font-bold leading-[1] ${textColor}`}>{title}</p>
            </div>
            <div className='pt-[1rem]'>
                <img src={image} alt={title} className={`rounded-2xl md:w-[25rem] xl:h-[15rem] lg:h-[13rem] md:h-[13rem] md:min-w-[10rem] md:min-h-[7rem] object-cover border-dashed ${Imageclass} `} />
            </div>
        </div>
    );
};

export default Card;
