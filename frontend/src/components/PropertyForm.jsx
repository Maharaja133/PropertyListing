import React, { useState } from 'react';

const initialForm = {
  name: '',
  type: 'Apartment', // Default value for dropdown
  price: '',
  location: '',
  description: '',
  image: '',
  bedrooms: '',
  bathrooms: '',
  area: '',
  coordinates: {
    lat: '',
    lng: ''
  }
};

const propertyTypes = [
  'Apartment',
  'House',
  'Villa',
  'Condo',
  'Townhouse',
  'Land',
  'Commercial'
];

const PropertyForm = ({ onAdd }) => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'lat' || name === 'lng') {
      setFormData({
        ...formData,
        coordinates: {
          ...formData.coordinates,
          [name]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert numeric fields to numbers
      const dataToSend = {
        ...formData,
        price: parseFloat(formData.price),
        bedrooms: parseInt(formData.bedrooms) || 0,
        bathrooms: parseInt(formData.bathrooms) || 0,
        area: parseInt(formData.area) || 0,
        coordinates: {
          lat: parseFloat(formData.coordinates.lat),
          lng: parseFloat(formData.coordinates.lng)
        }
      };

      await onAdd(dataToSend);
      setFormData(initialForm);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Add New Property</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Property Name */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Property Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Luxury Villa"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Property Type */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Property Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Price ($)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="500000"
              required
              min="0"
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="123 Main St, City"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Bedrooms */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
          <input
            name="bedrooms"
            type="number"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="3"
            min="0"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Bathrooms */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
          <input
            name="bathrooms"
            type="number"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="2"
            min="0"
            step="0.5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Area */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Area (sqft)</label>
          <div className="relative">
            <input
              name="area"
              type="number"
              value={formData.area}
              onChange={handleChange}
              placeholder="1500"
              min="0"
              className="w-full pl-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">sqft</span>
          </div>
        </div>

        {/* Image URL */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>
      </div>

      {/* Coordinates Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Coordinates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Latitude</label>
            <input
              name="lat"
              type="number"
              value={formData.coordinates.lat}
              onChange={handleChange}
              placeholder="40.7128"
              required
              step="any"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Longitude</label>
            <input
              name="lng"
              type="number"
              value={formData.coordinates.lng}
              onChange={handleChange}
              placeholder="-74.0060"
              required
              step="any"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the property features, amenities, and unique selling points..."
          required
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${isSubmitting 
            ? 'bg-indigo-400 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg'}`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            <span>Add Property</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;