'use client';

import { useEffect, useState } from 'react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('accessToken');
      try {
        const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/orders/order/my-orders', {
          headers: {
            Authorization: token || '',
          },
        });
        const data = await res.json();
        if (data.success) {
          setOrders(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch orders', err);
      }
    };

    fetchOrders();
  }, []);


  return (
    <div className="px-4 py-16 bg-white min-h-screen flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Orders</h1>

        {orders.map((order) => (
          <div
            key={order._id}
            className="border rounded-xl p-6 mb-6 shadow-sm bg-gray-50"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                Order #{order._id}
              </h2>
              <span className="text-sm text-green-600">{order.status}</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              Date: {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Product: {order.product?.name}
            </p>
            <p className="text-sm font-semibold text-gray-900">
              Total: ৳{order.totalPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;