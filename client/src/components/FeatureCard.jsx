import React from 'react';

const FeatureCard = ({ title, imagePath, imageAlt }) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      <div className="aspect-square w-full relative mb-4">
        <img
          src={imagePath}
          alt={imageAlt}
          className="object-contain w-full h-full"
        />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-center">{title}</h3>
    </div>
  );
};

export default FeatureCard;
