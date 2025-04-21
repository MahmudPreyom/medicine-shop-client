'use client';

const fakeOrders = [
  {
    id: 'ORD-1001',
    date: '2024-04-18',
    status: 'Delivered',
    total: 480,
    items: ['Paracetamol', 'Vitamin C'],
  },
  {
    id: 'ORD-1002',
    date: '2024-04-16',
    status: 'Shipped',
    total: 250,
    items: ['Cough Syrup'],
  },
];

const OrdersPage = () => {
  return (
    <div className="px-4 py-16 bg-white min-h-screen flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Orders</h1>

        {fakeOrders.map((order) => (
          <div
            key={order.id}
            className="border rounded-xl p-6 mb-6 shadow-sm bg-gray-50"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                Order #{order.id}
              </h2>
              <span className="text-sm text-green-600">{order.status}</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              Date: {order.date}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Items: {order.items.join(', ')}
            </p>
            <p className="text-sm font-semibold text-gray-900">
              Total: ৳{order.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;