import React from "react";

const SwapRequests = () => {
  const swapRequests = [
    { id: 1, item: "Printed Kurta", requester: "Riya", status: "Pending" },
    { id: 2, item: "Denim Jacket", requester: "Aman", status: "Accepted" },
    { id: 3, item: "Wool Sweater", requester: "Neha", status: "Rejected" },
  ];

  return (
    <div className="min-h-screen bg-[#FDF4F2] text-[#2E2E2E] font-sans p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow">
        <h1 className="text-3xl font-bold text-[#D94F4F] mb-4">
          🔁 Swap Requests
        </h1>

        {swapRequests.map((req) => (
          <div
            key={req.id}
            className="bg-gray-50 p-4 rounded-md shadow-sm mb-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{req.item}</h2>
              <p className="text-sm text-gray-600">
                Request from <strong>{req.requester}</strong>
              </p>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full ${
                req.status === "Accepted"
                  ? "bg-green-100 text-green-700"
                  : req.status === "Rejected"
                  ? "bg-red-100 text-red-600"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {req.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwapRequests;