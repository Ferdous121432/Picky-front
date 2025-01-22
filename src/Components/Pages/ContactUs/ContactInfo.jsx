/* eslint-disable */
import React from 'react';

function ContactInfo() {
  const contactDetails = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fc9ceebda7e74d0cba66da2084316bad98ff378379670278bdb61e9f3b1682a?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      title: "Address",
      content: "236 5th SE Avenue, New York NY10000, United States"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad8b6da666f5399b42c73c5cfc73c18a3f5b302e8fa6cee72c0a12fccc36bda4?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      title: "Phone",
      content: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fdf35fddf9339c521220ac850f018805dee7707ded888dd5bd951d83937b10?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      title: "Working Time",
      content: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00"
    }
  ];

  return (
    <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-12 pt-12 pb-16 mx-auto mt-16 w-full text-black bg-white max-md:px-5 max-md:mt-10">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex gap-8 items-start self-start mt-11 max-md:mt-10 max-md:ml-2">
            <img loading="lazy" src={detail.icon} alt={`${detail.title} icon`} className="object-contain shrink-0 aspect-square w-[30px]" />
            <div className="flex flex-col mt-3">
              <h3 className="self-start text-2xl font-medium">{detail.title}</h3>
              <p className="text-base whitespace-pre-line">{detail.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;