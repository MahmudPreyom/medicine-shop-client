'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { decrementQuantity, incrementQuantity, removeFromCart } from '@/redux/featurs/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="px-6 md:px-24 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Image</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Price</th>
                  <th className="px-4 py-3 text-left">Quantity</th>
                  <th className="px-4 py-3 text-left">Total</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id} className="border-t">
                    <td className="px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">৳{item.price}</td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(decrementQuantity(item._id))}
                          className="px-2 bg-gray-300 text-gray-700 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity || 1}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item._id))}
                          className="px-2 bg-gray-300 text-gray-700 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      ৳{(item.price * (item.quantity || 1)).toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => dispatch(removeFromCart(item._id))}
                        className="text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-semibold">Total: ৳{total.toFixed(2)}</p>
              <button
                onClick={() => router.push('/checkout')}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;