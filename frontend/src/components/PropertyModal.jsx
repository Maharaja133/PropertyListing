import React from 'react';

const PropertyModal = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{property.name}</h2>
            <div className="flex items-center mt-1">
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mr-2">
                {property.type}
              </span>
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {property.location}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">
          {/* Main image */}
          <div className="relative h-72 w-full bg-gradient-to-r from-blue-50 to-indigo-50">
            {property.image ? (
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>

          {/* Property details */}
          <div className="p-6">
            {/* Price */}
            <div className="mb-6">
              <p className="text-3xl font-bold text-indigo-600">${property.price.toLocaleString()}</p>
              {property.pricePerSqft && (
                <p className="text-sm text-gray-500">${property.pricePerSqft} per sqft</p>
              )}
            </div>

            {/* Key features */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-500">Bedrooms</p>
                <p className="text-lg font-semibold">{property.bedrooms || 'N/A'}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-500">Bathrooms</p>
                <p className="text-lg font-semibold">{property.bathrooms || 'N/A'}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-500">Area</p>
                <p className="text-lg font-semibold">
                  {property.area ? `${property.area.toLocaleString()} sqft` : 'N/A'}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
            </div>

            {/* Amenities - you can customize this based on your data structure */}
            {property.amenities && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Map */}
            {property.coordinates && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Location</h3>
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    className="w-full h-64"
                    loading="lazy"
                    title="Google Map"
                    src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&hl=es;z=14&output=embed`}
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer with action buttons */}
        <div className="p-4 border-t border-gray-100 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Close
          </button>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;