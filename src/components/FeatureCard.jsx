
  import React from 'react'
  
  const FeatureCard = ({ title, imagePath, imageAlt }) => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-square relative mb-4">
          <img
            src={imagePath}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
    )
  }
  
  export default FeatureCard