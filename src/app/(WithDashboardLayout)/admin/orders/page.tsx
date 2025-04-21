'use client';

import { useState } from 'react';

type Order = {
  id: number;
  customer: string;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  prescriptionRequired: boolean;
  prescriptionUploaded: boolean;
  total: number;
};

const initialOrders: Order[] = [
  {
    id: 1,
    customer: 'John Doe',
    status: 'Pending',
    prescriptionRequired: true,
    prescriptionUploaded: true,
    total: 350,
  },
  {
    id: 2,
    customer: 'Jane Smith',
    status: 'Shipped',
    prescriptionRequired: false,
    prescriptionUploaded: false,
    total: 180,
  },
];

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleStatusChange = (id: number, newStatus: Order['status']) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleApprove = (id: number) => {
    alert(`Prescription approved for order #${id}`);
    handleStatusChange(id, 'Shipped');
  };

  const handleReject = (id: number) => {
    alert(`Prescription rejected for order #${id}`);
    handleStatusChange(id, 'Cancelled');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Orders</h1>
      <div className="overflow-x-auto">
        <table className="w-full border text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Prescription</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-4 py-2">#{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">৳{order.total}</td>
                <td className="px-4 py-2">
                  {order.prescriptionRequired
                    ? order.prescriptionUploaded
                      ? 'Uploaded'
                      : 'Missing'
                    : 'Not Required'}
                </td>
                <td className="px-4 py-2">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(
                        order.id,
                        e.target.value as Order['status']
                      )
                    }
                    className="border rounded px-2 py-1"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="px-4 py-2 space-x-2">
                  {order.prescriptionRequired &&
                    order.prescriptionUploaded &&
                    order.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(order.id)}
                          className="text-green-600 hover:underline text-sm"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(order.id)}
                          className="text-red-600 hover:underline text-sm"
                        >
                          Reject
                        </button>
                      </>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrdersPage;