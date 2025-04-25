const AdminDashboardPage = () => {
  const stats = {
    totalOrders: 124,
    stockItems: 320,
    pendingPrescriptions: 8,
  };



  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <p className="text-gray-500 mb-1">Total Orders</p>
          <h2 className="text-2xl font-bold text-gray-800">{stats.totalOrders}</h2>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <p className="text-gray-500 mb-1">Stock Items</p>
          <h2 className="text-2xl font-bold text-gray-800">{stats.stockItems}</h2>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <p className="text-gray-500 mb-1">Pending Prescriptions</p>
          <h2 className="text-2xl font-bold text-gray-800">{stats.pendingPrescriptions}</h2>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;