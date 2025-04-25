import { Medicine } from "@/types";
import Image from "next/image";
import Link from "next/link";

const MedicineCard = ({ medicine }: { medicine: Medicine }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="w-full h-40 relative mb-4">
        <Image
          src={medicine?.image}
          alt={medicine.name}
          fill
          className="object-contain rounded"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {medicine.name}
      </h3>
      <p className="text-gray-500 mb-4">৳{medicine.price}</p>
      <Link href={`/shop/${medicine._id}`}>
        <button className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default MedicineCard;