// import Image from 'next/image'
// import React from 'react'
// import Button from './Button'

// const Hero = () => {
//   return (
//     <section className="max-container padding-container bg-[#f5f5f7] flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row-reverse">
//     <div className="hero-map" /> {/*this is where we are currently setting the back ground image*/}
//     {/* Hero 
//     .hero-map {
//         @apply bg-cover bg-center bg-no-repeat w-full h-[600px];
//         background-image: url('/hvac.jpg');
//     } */}
    
//     {/* LEFT */}
//     <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
//          <h1 className='bold-52 lg:bold-88 font-mono'>WE GOT YOU COVERED</h1>
//          <p className='regular-16 font-mono mt-6 text-gray-500 xl:max-w-[520px]'>
//             Maintenance and repairs can help your HVAC work efficiently, provide comfort year-round, and extend its life span. 
//             Whether you need HVAC repair or you're considering a new HVAC installation, your local helper offers proven solutions. 
//             Find out more when you request service today.
//          </p>
//          <div className='my-11 flex flex-wrap gap-5'>
//             <div className='flex items-center gap-2'>
//                 {Array(5).fill(1).map((_, index) =>(
//                     <Image 
//                     src="/star.svg"
//                     key={index}
//                     alt='star'
//                     width={24}
//                     height={24}
//                     />
//                 ))}
//             </div>
//             <p className='bold-16 lg:bold-20 text-blue-500'>
//                 2.2k
//                 <span className='regular-16 lg:regular-20 ml-1'> Excellent Reviews</span>
//             </p>
//          </div>

//          <div className="flex w-full gap-3 sm:flex-row">
//             <Button 
//                 type="button"
//                 title="Contact Us"
//                 variant="btn_dark_green"
//             />
//             <Button 
//                 type="button"
//                 title="How we work?"
//                 variant="btn_white"
//             />   
//          </div>
//     </div>
//     </section>
//   )
// }

// export default Hero

import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container bg-[#f5f5f7]  font-mono flex flex-col items-center gap-8 py-12 lg:flex-row lg:items-stretch lg:py-20">
      
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center w-full lg:w-2/5 text-center lg:text-left p-6">
        <h1 className="bold-64 lg:bold-88 text-4xl leading-tight md:text-5xl lg:text-6xl text-black">
          WE GOT YOU COVERED
        </h1>
        <p className="mt-6 text-lg text-black lg:max-w-lg">
          Maintenance and repairs help your HVAC work efficiently, provide comfort year-round, and extend its lifespan.  
          Whether you need HVAC repair or a new installation, your local helper offers proven solutions.  
          Request service today to find out more.
        </p>

        {/* Reviews Section */}
        <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
                priority
              />
            ))}
          </div>
          <p className="text-lg font-semibold text-blue-500">
            2.2k <span className="text-gray-600 font-normal">Excellent Reviews</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <Button type="button" title="Contact Us" variant="btn_dark_green" />
          <Button type="button" title="How we work?" variant="btn_white" />
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex w-full lg:w-3/5 h-[500px]">
        <Image 
          src="/hvac.jpg"
          alt="HVAC Services"
          layout="responsive"
          width={900} 
          height={600} 
          className="rounded-2xl shadow-lg object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;