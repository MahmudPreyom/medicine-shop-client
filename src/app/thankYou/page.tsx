'use client';

import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Thank You!</h1>
        <p className="text-lg text-gray-600">
          Your payment was successful and your order has been placed.
        </p>
        <p className="text-sm text-gray-500">
          You can check your order status anytime in your profile.
        </p>
        <Link
          href="/orders"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          View My Orders
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;