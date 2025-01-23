/* eslint-disable */
import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d114e200a4fcb5042d0489f99c0c35bff1a1f5c695307704fd1b9a294a8c409a?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    title: "High Quality",
    description: "crafted from top materials"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff80a7026545c3ee24172550d17228db93bc80c0cadbf53a5c96c2e5d140e514?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    title: "Warranty Protection",
    description: "Over 2 years"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/75d5d4b9148d2b52a00f2e7c175cd6a7d17851e88d3d46a0cfd1a6df0dfb27c8?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    title: "Free Shipping",
    description: "Order over 150 $"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca9decb2429a2d2dd79cf5cbacdc1612cb2206871fe24c05d41ce43a370024d3?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    title: "24 / 7 Support",
    description: "Dedicated support"
  }
];

function FeatureSection() {
  return (
    <section className="flex flex-col justify-center items-center py-24 bg-orange-50">
      <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1334px]">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            iconSrc={feature.iconSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;