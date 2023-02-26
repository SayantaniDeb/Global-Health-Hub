import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


function Admin({ handleLogout }) {
  return (
    <div className="bg-gray-200 h-screen">
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Welcome Health-care Worker!</h1>
            </div>
            <div className="flex">
              <div className="px-4 py-2">
              <button
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faPowerOff} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome Admin!
        </h1>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Learning Paths</h2>
          <ul className="list-disc pl-8">
            <li>Path 1</li>
            <li>Path 2</li>
            <li>Path 3</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Admin;
