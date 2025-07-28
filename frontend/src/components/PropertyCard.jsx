import React from 'react';

const PropertyCard = ({ property, onView }) => {
  return (
    <div className="relative border border-gray-200 rounded-xl p-5 w-full md:w-96 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Ribbon for property type */}
      <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
        {property.type}
      </div>
      
      {/* Image placeholder - you would replace this with actual property images */}
      <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      
      {/* Location with pin icon */}
      <div className="flex items-center text-gray-600 mb-2">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">{property.location}</span>
      </div>
      
      {/* Property name */}
      <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
        {property.name}
      </h2>
      
      {/* Price */}
      <div className="flex items-end mb-3">
        <span className="text-2xl font-bold text-indigo-600">${property.price}</span>
        {property.pricePerSqft && (
          <span className="text-xs text-gray-500 ml-1">/ ${property.pricePerSqft} sqft</span>
        )}
      </div>
      
      {/* Description */}
      <p className="text-gray-600 text-sm mb-5 line-clamp-2">
        {property.description}
      </p>
      
      {/* Divider */}
      <div className="border-t border-gray-100 my-4"></div>
      
      {/* Features */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500">Beds</span>
          <span className="font-semibold">{property.bedrooms || 'N/A'}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500">Baths</span>
          <span className="font-semibold">{property.bathrooms || 'N/A'}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500">Area</span>
          <span className="font-semibold">{property.area ? `${property.area} sqft` : 'N/A'}</span>
        </div>
      </div>
      
      {/* View button */}
      <button
        onClick={() => onView(property)}
        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center"
      >
        View Details
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

export default PropertyCard;