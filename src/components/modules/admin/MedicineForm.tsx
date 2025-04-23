'use client';

import { Medicine } from '@/app/(WithDashboardLayout)/admin/medicines/page';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  newMedicine: Omit<Medicine, 'id'>;
  setNewMedicine: Dispatch<SetStateAction<Omit<Medicine, 'id'>>>;
  handleAddMedicine: () => void;
};

const MedicineForm = ({ newMedicine, setNewMedicine, handleAddMedicine }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : name === 'symptoms'
        ? value.split(',').map(v => v.trim())
        : value;

    setNewMedicine((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'quantity' ? +newValue : newValue,
    }));
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow mb-10 space-y-4">
      <h2 className="text-lg font-semibold">Add New Medicine</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Paracetamol"
            value={newMedicine.name}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Company Name</label>
          <input
            type="text"
            name="company"
            placeholder="e.g. Square pharma"
            value={newMedicine.company}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Price</label>
          <input
            type="number"
            name="price"
            placeholder="e.g. 50"
            value={newMedicine.price}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="e.g. https://example.com/image.jpg"
            value={newMedicine.image}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Type</label>
          <input
            type="text"
            name="type"
            placeholder="e.g. Tablet"
            value={newMedicine.type}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Symptoms</label>
          <input
            type="text"
            name="symptoms"
            placeholder="e.g. Fever, Headache"
            value={Array.isArray(newMedicine.symptoms) ? newMedicine.symptoms.join(', ') : newMedicine.symptoms}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
        <div className="flex items-center gap-2 mt-6">
          <input
            type="checkbox"
            name="inStock"
            checked={newMedicine.inStock}
            onChange={handleChange}
          />
          <label className="text-sm text-gray-700">In Stock</label>
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Description</label>
          <input
            type="text"
            name="description"
            placeholder="e.g. Pain reliever"
            value={newMedicine.description}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Manufacturer Details</label>
          <input
            type="text"
            name="manufacturerDetails"
            placeholder="e.g. HealthCorp"
            value={newMedicine.manufacturerDetails}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            value={newMedicine.expiryDate.split('T')[0]}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
        <div className="flex items-center gap-2 mt-6">
          <input
            type="checkbox"
            name="prescriptionRequired"
            checked={newMedicine.prescriptionRequired}
            onChange={handleChange}
          />
          <label className="text-sm text-gray-700">Prescription Required?</label>
        </div>
      </div>
      <button
        onClick={handleAddMedicine}
        className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Add Medicine
      </button>
    </div>
  );
}

export default MedicineForm;