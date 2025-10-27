import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
}

function DataFetcher({ data }) {
  // If data is not yet available, show loader
  if (!data) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Loaded Data:</h2>
      <ul className="space-y-2">
        {data.map((item, index) => (
          <li key={index} className="p-2 border rounded">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
