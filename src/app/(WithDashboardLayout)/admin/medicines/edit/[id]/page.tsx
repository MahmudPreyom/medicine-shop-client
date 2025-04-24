'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const EditMedicinePage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const res = await fetch(`https://medicine-shop-server-mu.vercel.app/api/medicine/${id}`);
        const { data } = await res.json();
        reset({
          name: data.name,
          company: data.company,
          image: data.image,
          price: data.price,
          type: data.type,
          description: data.description,
          quantity: data.quantity,
          inStock: data.inStock,
          prescriptionRequired: data.prescriptionRequired,
          expiryDate: data.expiryDate.split('T')[0],
          symptoms: data.symptoms.join(', '),
          manufacturerDetails: data.manufacturerDetails,
        });
        setLoading(false);
      } catch (err) {
        toast.error('Failed to load medicine');
      }
    };
    if (id) fetchMedicine();
  }, [id, reset]);

  const onSubmit = async (formData: any) => {
    try {
      console.log('Form Data:', formData);
      const token = localStorage.getItem('accessToken');
      const res = await fetch(`https://medicine-shop-server-mu.vercel.app/api/medicine/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token || '',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          image: formData.image,
          price: parseFloat(formData.price),
          type: formData.type,
          description: formData.description,
          quantity: parseInt(formData.quantity, 10),
          inStock: Boolean(formData.inStock),
          prescriptionRequired: Boolean(formData.prescriptionRequired),
          expiryDate: formData.expiryDate,
          symptoms: formData.symptoms.split(',').map((s: string) => s.trim()),
          manufacturerDetails: formData.manufacturerDetails,
        }),
      });

      const result = await res.json();
      console.log(result)
      if (result.status) {
        toast.success('Medicine updated successfully');
        router.push('/admin/medicines');
      } else {
        toast.error(result.message || 'Failed to update medicine');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Medicine</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <div className="flex items-center gap-6 col-span-2">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input {...register('inStock')} type="checkbox" className="checkbox" />
            In Stock
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input {...register('prescriptionRequired')} type="checkbox" className="checkbox" />
            Prescription Required
          </label>
        </div>
        <div className="col-span-2 flex justify-end">
          <button type="submit" className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Update Medicine
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMedicinePage;