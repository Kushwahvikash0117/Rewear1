import React from 'react';

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen bg-[#FDF4F2] font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#2E2E2E] text-white p-6">
        <h2 className="text-2xl font-bold text-[#D94F4F] mb-6">ReWear Admin</h2>
        <ul className="space-y-4 text-sm">
          <li className="hover:text-[#D94F4F] cursor-pointer">Dashboard</li>
          <li className="hover:text-[#D94F4F] cursor-pointer">Pending Items</li>
          <li className="hover:text-[#D94F4F] cursor-pointer">Users</li>
          <li className="hover:text-[#D94F4F] cursor-pointer">Reports</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-[#FFF9F0]">
        <h1 className="text-3xl font-bold text-[#D94F4F] mb-8">Pending Listings</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Item Card */}
          <div className="bg-white rounded-lg shadow p-4">
            <img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQx1kyABd75cIkivbLvvwCe5twvE9vroQnZtxIVXGOlO4eKo3j6xeMyNn2yIFsbyLW1O_qjJbj5eziW3BHqrwmgHeALfw6VmlHpG9X0eKTO7oUmhNKDS2Gy"
              alt="Item"
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold mb-1">Blue Jacket</h3>
            <p className="text-sm text-gray-600 mb-1"><strong>User:</strong> Alex123</p>
            <p className="text-sm text-gray-600 mb-3"><strong>Tags:</strong> Jacket, Winter</p>
            <div className="flex gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Approve
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Reject
              </button>
            </div>
          </div>

          {/* Copy this card for more items */}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
