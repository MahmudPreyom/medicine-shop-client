'use client';

import { useState } from 'react';
import Link from 'next/link';

type User = {
  userId: string;
  name: string;
  email: string;
  active: boolean;
  orders: number;
};

const initialUsers: User[] = [
  { userId: '1', name: 'John Doe', email: 'john@example.com', active: true, orders: 5 },
  { userId: '2', name: 'Jane Smith', email: 'jane@example.com', active: false, orders: 2 },
  { userId: '3', name: 'Ariana Pillai', email: 'ariana@medimart.com', active: true, orders: 9 },
];

const AdminUsersPage = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const toggleActive = (userId: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.userId === userId ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Users</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full md:w-1/3 px-4 py-2 border rounded"
      />

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full border text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Orders</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.userId} className="border-t">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.orders}</td>
                <td className="px-4 py-2">
                  <span
                    className={`text-sm font-medium ${
                      user.active ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {user.active ? 'Active' : 'Deactivated'}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <Link
                    href={`/admin/users/${user.userId}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={() => toggleActive(user.userId)}
                    className="text-yellow-600 hover:underline text-sm"
                  >
                    {user.active ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsersPage;