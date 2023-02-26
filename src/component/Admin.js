import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

function Admin({ handleLogout }) {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  const isSelected = (patient) => {
    return selectedPatient === patient;
  };

  return (
    <div className="bg-white h-screen">
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
        <div className="mt-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
  <h2 className="text-2xl font-bold mb-4">Patient Requests</h2>

<div className="grid grid-cols-1 gap-4">
      <div
        className={`bg-white rounded-lg shadow-lg p-4 cursor-pointer ${
          isSelected('Patient A') ? 'bg-gray-500 text-white' : 'hover:shadow-xl'
        }`}
        onClick={() => handlePatientSelect('Patient A')}
      >
        <div className="flex items-center">
          <svg
            className="h-6 w-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"
            />
          </svg>
          <div className="text-lg font-medium text-gray-900">Patient A</div>
        </div>
      </div>
      <div
        className={`bg-white rounded-lg shadow-lg p-4 cursor-pointer ${
          isSelected('Patient B') ? 'bg-gray-500 text-white' : 'hover:shadow-4xl'
        }`}
        onClick={() => handlePatientSelect('Patient B')}
      >
        <div className="flex items-center">
          <svg
            className="h-6 w-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"
            />
          </svg>
          <div className="text-lg font-medium text-gray-900">Patient B</div>
        </div>
      </div>
      <div
        className={`bg-white rounded-lg shadow-lg p-4 cursor-pointer ${
          isSelected('Patient C') ? 'bg-gray-500 text-white' : 'hover:shadow-4xl'
        }`}
        onClick={() => handlePatientSelect('Patient C')}
      >
      <div className="flex items-center">
        <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>
        <div className="text-lg font-medium text-gray-900">Patient C</div>
      </div>
    </div>
  </div>
</div>

            {selectedPatient && (
             <div>
              <h1 className="text-2xl font-bold text-gray-800 pb-4">
                Recommended Paths for {selectedPatient}
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                {selectedPatient === 'Patient A' && (
                  <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        className="w-full"
                        src="https://via.placeholder.com/300x200"
                        alt="Learning Path"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          Learning Path 1
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Duis imperdiet urna sit amet sapien suscipit, vel
                          fermentum purus maximus.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        className="w-full"
                        src="https://via.placeholder.com/300x200"
                        alt="Learning Path"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          Learning Path 2
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Duis imperdiet urna sit amet sapien suscipit, vel
                          fermentum purus maximus.
                        </p>
                      </div>
                    </div>
                  </>
                )}
                    {selectedPatient === 'Patient B' && (
                  <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        className="w-full"
                        src="https://via.placeholder.com/300x200"
                        alt="Learning Path"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          Learning Path 2
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Duis imperdiet urna sit amet sapien suscipit, vel
                          fermentum purus maximus.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        className="w-full"
                        src="https://via.placeholder.com/300x200"
                        alt="Learning Path"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          Learning Path 3
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Duis imperdiet urna sit amet sapien suscipit, vel
                          fermentum purus maximus.
                        </p>
                      </div>
                    </div>
                  </>
                )}
                  {selectedPatient === 'Patient C' && (
                  <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        className="w-full"
                        src="https://via.placeholder.com/300x200"
                        alt="Learning Path"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          Learning Path 4
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Duis imperdiet urna sit amet sapien suscipit, vel
                          fermentum purus maximus.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        className="w-full"
                        src="https://via.placeholder.com/300x200"
                        alt="Learning Path"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          Learning Path 5
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Duis imperdiet urna sit amet sapien suscipit, vel
                          fermentum purus maximus.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            )}
            
       </div>   
      </div>
    </div>
    </div>
  );
}

export default Admin;
