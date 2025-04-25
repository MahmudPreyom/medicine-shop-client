'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

type Order = {
  _id: string;
  customer: string;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Completed' | 'Cancelled';
  prescriptionImage: string;
  totalPrice: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  transaction: {
    id: string;
    transactionStatus: string;
  };
  product: {
    _id: string;
    name: string;
  };
};

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/orders/order/my-orders', {
        headers: {
          Authorization: `${token}`,
        },
      });
      const data = await res.json();
      setOrders(data.data || []);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (_id: string) => {
    // making an alert before delete
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this order?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (!result.isConfirmed) return;

    // Performing delete actoins
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`https://medicine-shop-server-mu.vercel.app/api/orders/order/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token || '',
        },
      });

      const result = await res.json();
      if (result.success) {
        toast.success('Order deleted successfully');
        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== _id));
      } else {
        toast.error('Failed to delete order');
      }
    } catch {
      toast.error('Error deleting order');
    }
  };

  const handleEdit = async (order: Order, click: string) => {
    let updateStatus: string = '';

    if (click == "Cancelled") {
      updateStatus = "Cancelled"
    } else {
      if (order.status == "Pending")
        updateStatus = "Paid"
      else if (order.status == "Paid")
        updateStatus = "Shipped"
      else if (order.status == "Shipped")
        updateStatus = "Completed"
    }

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to update this order?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
    });

    if (!result.isConfirmed) return;

    // Performing update order
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`https://medicine-shop-server-mu.vercel.app/api/orders/update-order`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token || '',
        },
        body: JSON.stringify({
          id: order._id,
          status: updateStatus,
        }),
      });

      const result = await res.json();
      if (result.success) {
        toast.success('Order updated successfully');
        fetchOrders();
      } else {
        toast.error('Failed to update order');
      }
    } catch {
      toast.error('Error updating order');
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Orders</h1>
      <div className="overflow-x-auto">
        <table className="w-full border text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Medicine</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Prescription</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Transaction</th>
              <th className="px-4 py-2 flex justify-center items-center gap-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t">
                <td className="px-4 py-2">{order.product?.name}</td>
                <td className="px-4 py-2">{order.quantity}</td>
                <td className="px-4 py-2">৳{order.totalPrice}</td>
                <td className="px-4 py-2">
                  {order.prescriptionImage === 'false' ? 'Not Provided' : 'Provided'}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full border-2 border-dotted
      ${order.status === 'Pending'
                        ? 'text-yellow-600 border-yellow-400'
                        : order.status === 'Paid'
                          ? 'text-blue-600 border-blue-400'
                          : order.status === 'Shipped'
                            ? 'text-purple-600 border-purple-400'
                            : order.status === 'Completed'
                              ? 'text-green-600 border-green-400'
                              : 'text-red-600 border-red-400'
                      }
    `}
                  >
                    <span className="h-2 w-2 rounded-full bg-current"></span>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">{order.transaction.transactionStatus}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="px-4 py-1 text-sm rounded-lg text-white bg-red-600 hover:bg-red-700"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(order, "Cancelled")}
                      className={`px-4 py-1 text-sm rounded-lg text-white ${order.status !== 'Cancelled' && order.status !== 'Completed'
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-gray-400 cursor-not-allowed'
                        }`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleEdit(order, "Update")}
                      className={`px-4 py-1 text-sm rounded-lg text-white ${order.status !== 'Cancelled' && order.status !== 'Completed'
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-gray-400 cursor-not-allowed'}`}
                    >
                      Update status
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrdersPage;