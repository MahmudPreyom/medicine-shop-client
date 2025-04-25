'use client';
export const dynamic = 'force-dynamic';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { removeFromCart } from '@/redux/featurs/cartSlice';
import { useParams } from 'next/navigation';

const CheckoutPage = () => {
    const [prescriptionRequired] = useState(true);
    const [selectedPayment, setSelectedPayment] = useState('surjopay');
    const [prescriptionImage, setPrescriptionImage] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const params = useParams();
    const productId = params.id;
    const selectedItem = cartItems.find(item => item._id === productId);

    const isPrescriptionRequiredAndMissing = cartItems.some(item => item.prescriptionRequired) && !prescriptionImage;

    const handleConfirm = async () => {
        try {
            if (!selectedPayment) {
                alert('Please select a payment method.');
                return;
            }

            if (!selectedItem) {
                alert('No matching product found in cart.');
                return;
            }

            const token = localStorage.getItem('accessToken');
            const orderPayload = {
                product: selectedItem._id,
                quantity: selectedItem.quantity,
                prescriptionImage,
            };

            const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token || '',
                },
                body: JSON.stringify(orderPayload),
            });

            const result = await res.json();

            if (result.success) {
                dispatch(removeFromCart(selectedItem._id));
                if (selectedPayment === 'surjopay' && result.data?.checkout_url) {
                    window.location.href = result.data.checkout_url;
                } else {
                    router.push('/orders');
                }
            } else {
                alert('Failed to place the order');
            }

        } catch (err) {
            console.error('Error placing order:', err);
        }
    };

    return (
        <div className="px-4 py-16 bg-white flex justify-center">
            <div className="w-full max-w-2xl space-y-10">
                <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>

                {/* Shipping Details */}
                {/* <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Shipping Information</h2>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Address Line 1"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        placeholder="City"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Postal Code"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border rounded-lg px-4 py-2"
                        required
                    />
                </div> */}

                {/* Prescription Upload */}
                {prescriptionRequired && (
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">Upload Prescription</h2>
                        <input
                            type="text"
                            placeholder="Prescription Image URL"
                            value={prescriptionImage}
                            onChange={(e) => setPrescriptionImage(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2"
                        />
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
                        <option value="surjopay">SurjoPay</option>
                    </select>
                </div>

                {/* Confirm Button */}
                <button
                    onClick={handleConfirm}
                    disabled={isPrescriptionRequiredAndMissing}
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Confirm Order
                </button>

            </div>
        </div>
    );
}

export default CheckoutPage;