/* eslint-disable */
import React from 'react';

function FeatureCard({ iconSrc, title, description }) {
  return (
    <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
      <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]" />
      <div className="flex flex-col self-stretch my-auto">
        <h3 className="text-2xl font-semibold text-neutral-800">{title}</h3>
        <p className="text-xl font-medium text-zinc-500">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;