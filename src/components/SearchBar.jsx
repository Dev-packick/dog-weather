// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const SearchBar = ({ onSearch, initialCity, loading }) => {
  const [city, setCity] = useState(initialCity || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const popularCities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille', 'Toulouse', 'Nice', 'Nantes'];

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center">
          <div className="absolute left-4 text-gray-500 z-10">
            <FaMapMarkerAlt />
          </div>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Entrez une ville (ex: Paris, Lyon, Marseille...)"
            className="w-full pl-12 pr-40 py-4 rounded-2xl border-2 border-gray-300 focus:border-amber-500 focus:outline-none shadow-lg text-gray-800 text-lg"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors shadow-lg"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                Recherche...
              </>
            ) : (
              <>
                <FaSearch /> Rechercher
              </>
            )}
          </button>
        </div>
      </form>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {popularCities.map((popularCity) => (
          <button
            key={popularCity}
            onClick={() => {
              setCity(popularCity);
              onSearch(popularCity);
            }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm transition-colors"
          >
            {popularCity}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;