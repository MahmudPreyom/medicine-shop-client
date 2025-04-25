'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

type MedicineFormData = {
  name: string;
  company: string;
  image: string;
  price: number;
  type: string;
  quantity: number;
  expiryDate: string;
  manufacturerDetails: string;
  symptoms: string[];
  description: string;
  inStock: boolean;
  prescriptionRequired: boolean;
};

const AddMedicinePage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<MedicineFormData>();

  const handleSubmitForm = async (formData: MedicineFormData) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('accessToken');

      const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/medicine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token || '',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        toast.success('Medicine added successfully');
        router.push('/admin/medicines');
      } else {
        toast.error(result.message || 'Failed to add medicine');
      }
    } catch {
      toast.error('Error adding medicine');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Medicine</h1>
      <form
        onSubmit={handleSubmit((data) => {
          const payload: MedicineFormData = {
            ...data,
            price: parseFloat(data.price as unknown as string),
            quantity: parseInt(data.quantity as unknown as string, 10),
            symptoms: data.symptoms,
          };
          handleSubmitForm(payload);
          reset();
        })}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block text-sm text-gray-700 mb-1">Medicine Name</label>
          <input {...register('name')} placeholder="e.g. Paracetamol" className="border px-4 py-2 rounded w-full" required />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Company Name</label>
          <input {...register('company')} placeholder="e.g. MediPharma" className="border px-4 py-2 rounded w-full" required />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Image URL</label>
          <input {...register('image')} placeholder="https://..." className="border px-4 py-2 rounded w-full" required />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Price</label>
          <input {...register('price')} placeholder="e.g. 35" type="number" className="border px-4 py-2 rounded w-full" required />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Type</label>
          <input {...register('type')} placeholder="e.g. Tablet" className="border px-4 py-2 rounded w-full" required />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Quantity</label>
          <input {...register('quantity')} placeholder="e.g. 100" type="number" className="border px-4 py-2 rounded w-full" required />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Expiry Date</label>
          <input {...register('expiryDate')} type="date" className="border px-4 py-2 rounded w-full" required />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Manufacturer Details</label>
          <input {...register('manufacturerDetails')} placeholder="e.g. Square" className="border px-4 py-2 rounded w-full" required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-gray-700 mb-1">Symptoms (comma separated)</label>
          <input {...register('symptoms')} placeholder="e.g. Fever, Headache" className="border px-4 py-2 rounded w-full" required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-gray-700 mb-1">Description</label>
          <textarea {...register('description')} placeholder="e.g. It Will help to reduce..." className="border px-4 py-2 rounded w-full" rows={4} required />
        </div>
        <div className="flex items-center gap-6 md:col-span-2">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input {...register('inStock')} type="checkbox" className="checkbox" />
            In Stock
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input {...register('prescriptionRequired')} type="checkbox" className="checkbox" />
            Prescription Required
          </label>
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            {loading ? 'Submitting...' : 'Add Medicine'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMedicinePage;