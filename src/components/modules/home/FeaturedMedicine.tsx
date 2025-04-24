"use client";

import { TMedicine } from "@/types";
import Image from "next/image";
import Link from "next/link";
import MedicineCard from "../shop/MedicineCard";

const FeaturedMedicines = ({ medicine }: { medicine: TMedicine[] }) => {
  return (
    <section className="py-16 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Featured Medicines
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our most popular and trusted products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {medicine.slice(0, 4).map((med) => (
            <MedicineCard key={med._id} medicine={med} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMedicines;