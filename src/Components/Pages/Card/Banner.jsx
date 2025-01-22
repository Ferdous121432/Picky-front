/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="flex relative z-10 flex-col justify-center items-center px-20 py-20 -mt-1.5 w-full text-base text-black whitespace-nowrap min-h-[328px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/526c6d0ee53fa6ff76258edc427eaac65d8feb642db842e22e6181a6fddd2b7b?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="Banner background" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col mb-0 max-w-full w-[115px] max-md:mb-2.5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b437a1171ec7de4715c53b9cdc14efdc1f83affa97a4cfef453c1b95948c49e?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-contain w-full aspect-[0.8] max-md:mr-0.5" />
        <div className="flex gap-1.5">
          <span className="grow font-medium">Home</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-contain shrink-0 my-auto w-5 aspect-square" />
          <Link to="/cart" className="font-light">Cart</Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;