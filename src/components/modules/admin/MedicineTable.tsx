import { Medicine } from '@/app/(WithDashboardLayout)/admin/medicines/page';

type Props = {
  medicines: Medicine[];
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
};

const MedicineTable = ({ medicines, handleDelete, handleEdit }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Prescription</th>
            <th className="px-4 py-2">Manufacturer</th>
            <th className="px-4 py-2">Expiry</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med) => (
            <tr key={med.id} className="border-t">
              <td className="px-4 py-2">{med.name}</td>
              <td className="px-4 py-2">{med.category}</td>
              <td className="px-4 py-2">{med.description}</td>
              <td className="px-4 py-2">₹{med.price}</td>
              <td className="px-4 py-2">{med.stock}</td>
              <td className="px-4 py-2">{med.prescriptionRequired ? 'Yes' : 'No'}</td>
              <td className="px-4 py-2">{med.manufacturer}</td>
              <td className="px-4 py-2">{med.expiryDate}</td>
              <td className="px-4 py-2 space-x-3">
                <button
                  onClick={() => handleEdit(med.id)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(med.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineTable;