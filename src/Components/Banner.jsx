import React from 'react';
import LowyerBG from '../assets/C002-assets/banner-img-1.png';
const Banner = () => {
  return (
    <div className='mx-auto w-[95%] mt-5'>
      <div
        className="hero h-[490px] rounded-2xl bg-black bg-opacity-70"
        style={{
          backgroundImage:
            `url(${LowyerBG})`,
        }}
      >
     
        <div className=" text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 lg:text-3xl text-xl font-bold lg:px-0 px-2">
              It avoids subjective claims or exaggeration that might raise red flags legally
            </h1>
            <p className="mb-5 text-xs lg:px-0 px-2">
              Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;