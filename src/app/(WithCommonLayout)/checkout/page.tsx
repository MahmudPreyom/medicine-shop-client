'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
    const [prescriptionRequired, setPrescriptionRequired] = useState(true);
    const [selectedPayment, setSelectedPayment] = useState('');

    const router = useRouter();

    const handleConfirm = () => {
        // Here you could also trigger an API call to place the order
        router.push('/orders');
    };

    return (
        <div className="px-4 py-16 bg-white flex justify-center">
            <div className="w-full max-w-2xl space-y-10">
                <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>

                {/* Shipping Details */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Shipping Information</h2>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Address Line 1"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <input
                        type="text"
                        placeholder="City"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Postal Code"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                {/* Prescription Upload */}
                {prescriptionRequired && (
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">Upload Prescription</h2>
                        <input type="file" className="block w-full text-sm text-gray-600" />
                    </div>
                )}

                {/* Payment Method */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800">Payment Method</h2>
                    <select
                        className="w-full border rounded-lg px-4 py-2"
                        value={selectedPayment}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                    >
                        <option value="">Select a payment option</option>
                        <option value="cod">Cash on Delivery</option>
                        <option value="upi">UPI</option>
                        <option value="card">Credit/Debit Card</option>
                    </select>
                </div>

                {/* Confirm Button */}
                <button
                    onClick={handleConfirm}
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Confirm Order
                </button>

            </div>
        </div>
    );
}