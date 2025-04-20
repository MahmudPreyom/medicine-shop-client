'use client';

import { useState } from 'react';

export default function ProfilePage() {
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '9876543210',
        address: '123 Main St, City',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Updated Profile:', formData);
        // You can send this to backend here
    };

    return (
        <div className="min-h-screen px-4 py-16 bg-white flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl space-y-6 bg-gray-50 p-8 rounded-xl shadow"
            >
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Profile</h1>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Address</label>
                    <input
                        type="text"
                        name="address"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
}