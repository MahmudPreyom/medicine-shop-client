'use client';

import MedicineTable from '@/components/modules/admin/MedicineTable';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

export type Medicine = {
  id: string;
  name: string;
  company: string;
  image: string;
  price: number;
  type: string;
  description: string;
  quantity: number;
  inStock: boolean;
  prescriptionRequired: boolean;
  expiryDate: string;
  symptoms: string[];
  manufacturerDetails: string;
};

type RawMedicine = {
  _id: string;
  name: string;
  company: string;
  image: string;
  price: number;
  type: string;
  description: string;
  quantity: number;
  inStock: boolean;
  prescriptionRequired: boolean;
  expiryDate: string;
  symptoms: string[];
  manufacturerDetails: string;
};



const AllMedicinesPage = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMedicines = async () => {
      // const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/medicine');
      const res = await fetch('https://medicine-shop-server-mvwf.vercel.app/api/medicine');
      const json = await res.json();

      const formatted = json.data.map((item: RawMedicine) => ({
        id: item._id,
        name: item.name,
        company: item.company,
        image: item.image,
        price: item.price,
        type: item.type,
        description: item.description,
        quantity: item.quantity,
        inStock: item.inStock,
        prescriptionRequired: item.prescriptionRequired,
        expiryDate: item.expiryDate,
        symptoms: item.symptoms,
        manufacturerDetails: item.manufacturerDetails,
      }));

      setMedicines(formatted);
    };

    fetchMedicines();
  }, []);

  const handleDelete = async (id: string) => {
    // making an alert before delete
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this medicine?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (!result.isConfirmed) return;

    // Performing delete actoins
    const token = localStorage.getItem('accessToken');
    try {
      // const res = await fetch(`https://medicine-shop-server-mu.vercel.app/api/medicine/${id}`, {
      const res = await fetch(`https://medicine-shop-server-mvwf.vercel.app/api/medicine/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token || '',
        },
      });

      const result = await res.json();
      if (result.status) {
        toast.success('Medicine deleted successfully');
        setMedicines((prev) => prev.filter((m) => m.id !== id));
      } else {
        toast.error('Failed to delete medicine');
      }
    } catch {
      toast.error('Error deleting medicine');
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/medicines/edit/${id}`);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <a href="/admin/medicines/add" className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Add Medicine
        </a>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Medicines</h1>

      <MedicineTable
        medicines={medicines}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default AllMedicinesPage;