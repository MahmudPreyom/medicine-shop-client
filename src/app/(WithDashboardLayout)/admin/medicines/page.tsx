'use client';

import MedicineForm from '@/components/modules/admin/MedicineForm';
import MedicineTable from '@/components/modules/admin/MedicineTable';
import { useState } from 'react';
export type Medicine = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  prescriptionRequired: boolean;
  manufacturer: string;
  expiryDate: string;
};

const initialData: Medicine[] = [
  {
    id: 1,
    name: 'Paracetamol',
    description: 'Used to treat pain and fever.',
    category: 'Pain Relief',
    price: 30,
    stock: 100,
    prescriptionRequired: false,
    manufacturer: 'MediPharma',
    expiryDate: '2025-12-31',
  },
  {
    id: 2,
    name: 'Vitamin C',
    description: 'Boosts immunity and helps with tissue repair.',
    category: 'Vitamins',
    price: 80,
    stock: 50,
    prescriptionRequired: false,
    manufacturer: 'HealthPlus',
    expiryDate: '2024-09-15',
  },
];

const AdminMedicinesPage = () => {
  const [medicines, setMedicines] = useState<Medicine[]>(initialData);
  const [newMedicine, setNewMedicine] = useState<Omit<Medicine, 'id'>>({
    name: '',
    description: '',
    category: '',
    price: 0,
    stock: 0,
    prescriptionRequired: false,
    manufacturer: '',
    expiryDate: '',
  });

  const handleAddMedicine = () => {
    if (!newMedicine.name || !newMedicine.category) return;
    setMedicines((prev) => [
      ...prev,
      { ...newMedicine, id: Date.now() },
    ]);
    setNewMedicine({
      name: '',
      description: '',
      category: '',
      price: 0,
      stock: 0,
      prescriptionRequired: false,
      manufacturer: '',
      expiryDate: '',
    });
  };

  const handleDelete = (id: number) => {
    setMedicines((prev) => prev.filter((m) => m.id !== id));
  };

  const handleEdit = (id: number) => {
    const med = medicines.find((m) => m.id === id);
    if (med) {
      const { id, ...rest } = med;
      setNewMedicine(rest);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Medicines</h1>

      <MedicineForm
        newMedicine={newMedicine}
        setNewMedicine={setNewMedicine}
        handleAddMedicine={handleAddMedicine}
      />

      <MedicineTable
        medicines={medicines}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default AdminMedicinesPage;