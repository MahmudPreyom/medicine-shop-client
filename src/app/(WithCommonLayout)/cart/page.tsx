'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

const initialCart: CartItem[] = [
    {
        id: 1,
        name: 'Paracetamol 500mg',
        price: 30,
        quantity: 2,
        image: '/assets/medicines/paracetamol.png',
    },
    {
        id: 2,
        name: 'Vitamin C Tablets',
        price: 120,
        quantity: 1,
        image: '/assets/medicines/vitamin-c.png',
    },
];

const CartPage = () => {
    const [cart, setCart] = useState<CartItem[]>(initialCart);

    const router = useRouter();

    const handleQuantityChange = (id: number, qty: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: qty > 0 ? qty : 1 } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="px-6 md:px-24 py-16 bg-white">
            <div className="px-4 py-16 bg-white flex justify-center">
                <div className="w-full max-w-3xl">
                    {/* Cart content here */}

                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>

                    {cart.length === 0 ? (
                        <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                        <>
                            <div className="space-y-6 mb-10">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center gap-6 border-b pb-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-contain rounded"
                                        />
                                        <div className="flex-1">
                                            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                            <p className="text-gray-500">₹{item.price} each</p>
                                            <div className="mt-2 flex items-center gap-3">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        handleQuantityChange(item.id, parseInt(e.target.value))
                                                    }
                                                    className="w-16 px-2 py-1 border rounded"
                                                />
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-sm text-red-600 hover:underline"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-xl font-semibold text-gray-900">
                                    Total: ₹{total.toFixed(2)}
                                </p>
                                <button
                                    onClick={() => router.push('/checkout')}
                                    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartPage;