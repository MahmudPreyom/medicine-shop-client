import { notFound } from 'next/navigation';

const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    active: true,
    phone: '0123456789',
    address: '123 Main Street, Cityville',
    orders: 5,
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    active: false,
    phone: '0987654321',
    address: '456 Elm Street, Townsville',
    orders: 2,
    createdAt: '2023-11-01',
  },
];

const UserProfilePage = ({ params }: { params: { userId: string } }) => {
  const user = mockUsers.find((u) => u.id === parseInt(params.userId));

  if (!user) return notFound();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">User Profile</h1>

      <div className="bg-white shadow-sm border rounded-lg p-6 space-y-4">
        <div>
          <p className="text-gray-700 text-sm">Name</p>
          <p className="font-semibold text-lg">{user.name}</p>
        </div>

        <div>
          <p className="text-gray-700 text-sm">Email</p>
          <p className="text-md">{user.email}</p>
        </div>

        <div className="flex gap-4">
          <div>
            <p className="text-gray-700 text-sm">Status</p>
            <p className={user.active ? 'text-green-600 font-medium' : 'text-red-500 font-medium'}>
              {user.active ? 'Active' : 'Deactivated'}
            </p>
          </div>

          <div>
            <p className="text-gray-700 text-sm">Total Orders</p>
            <p className="font-semibold">{user.orders}</p>
          </div>
        </div>

        <div>
          <p className="text-gray-700 text-sm">Phone</p>
          <p>{user.phone}</p>
        </div>

        <div>
          <p className="text-gray-700 text-sm">Address</p>
          <p>{user.address}</p>
        </div>

        <div>
          <p className="text-gray-700 text-sm">Account Created</p>
          <p>{user.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;