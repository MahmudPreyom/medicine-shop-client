'use client';

import { useEffect, useState } from 'react';

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActivate: boolean;
};

const UserManagementPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/user', {
          headers: {
            Authorization: token || '',
          },
        });
        const data = await res.json();
        setUsers(data.data || []);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="text-sm border-b">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 capitalize">{user.role}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={async () => {
                        try {
                          const token = localStorage.getItem('accessToken');
                          await fetch(`https://medicine-shop-server-mu.vercel.app/api/user/${user._id}/block`, {
                            method: 'PATCH',
                            headers: {
                              Authorization: token || '',
                            },
                          });
                          setUsers((prev) =>
                            prev.map((u) =>
                              u._id === user._id ? { ...u, isActivate: false } : u
                            )
                          );
                        } catch (err) {
                          console.error('Deactivation failed', err);
                        }
                      }}
                      disabled={!user.isActivate}
                      className={`px-4 py-1 text-sm rounded-lg text-white ${user.isActivate
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-gray-400 cursor-not-allowed'
                        }`}
                    >
                      Deactivate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserManagementPage;