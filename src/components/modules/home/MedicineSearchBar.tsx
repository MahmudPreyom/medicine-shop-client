'use client';

import { useState } from 'react';

const MedicineSearchBar = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    console.log('Search:', { query, category });
  };

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-24">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search by medicine name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">All Categories</option>
          <option value="pain-relief">Pain Relief</option>
          <option value="diabetes">Diabetes</option>
          <option value="vitamins">Vitamins</option>
          <option value="antibiotics">Antibiotics</option>
          {/* Add more categories as needed */}
        </select>
        <button
          onClick={handleSearch}
          className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default MedicineSearchBar;