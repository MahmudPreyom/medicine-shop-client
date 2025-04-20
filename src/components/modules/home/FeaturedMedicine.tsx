'use client';

import Image from 'next/image';

type Medicine = {
  id: number;
  name: string;
  image: string;
  price: string;
};

const featuredMedicines: Medicine[] = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    image: '/assets/medicines/paracetamol.png',
    price: '€3',
  },
  {
    id: 2,
    name: 'Amoxicillin 250mg',
    image: '/assets/medicines/amoxicillin.png',
    price: '€7',
  },
  {
    id: 3,
    name: 'Vitamin C Tablets',
    image: '/assets/medicines/vitamin-c.png',
    price: '€10',
  },
  {
    id: 4,
    name: 'Cough Syrup',
    image: '/assets/medicines/cough-syrup.png',
    price: '€6',
  },
];

export default function FeaturedMedicines() {
  return (
    <section className="py-16 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Medicines</h2>
          <p className="text-gray-600 text-lg">Explore our most popular and trusted products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredMedicines.map((med) => (
            <div
              key={med.id}
              className="border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={med.image}
                  alt={med.name}
                  fill
                  className="object-contain rounded"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{med.name}</h3>
              <p className="text-gray-500 mb-4">{med.price}</p>
              <button className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}