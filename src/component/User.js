import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faLanguage, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo4 from '../images/2.gif';
import ImageGrid from './Imagegrid';

function User({ handleLogout }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [doctors, setDoctors] = useState([
    { name: 'Doctor 1', specialty: 'Cardiologist', phone: '1234567890', languages: ['English', 'Hindi','all'] },
    { name: 'Doctor 2', specialty: 'Dermatologist', phone: '2345678901', languages: ['Spanish','all'] },
    { name: 'Doctor 3', specialty: 'Pediatrician', phone: '3456789012', languages: ['English', 'Spanish','all'] },
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) =>
    (doctor.languages.includes(selectedLanguage) || selectedLanguage === '') &&
    (doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
     doctor.languages.join(', ').toLowerCase().includes(searchTerm.toLowerCase()))
  );


  return (
    <div className="white h-screen">
      <nav className="bg-gray-1000 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Welcome User!</h1>
            </div>
            <div className="flex">
              <div className="px-4 py-2 relative">
                <button
                  className="bg-gray-800 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setLanguageDropdownVisible(!languageDropdownVisible)}
                >
                  <FontAwesomeIcon icon={faLanguage} />
                </button>
                
                {languageDropdownVisible && (
                  <div className="absolute top-10 right-0 z-50 w-40 bg-white border rounded-md shadow-md">
                    <button
                      className="block py-2 px-4 hover:bg-gray-200"
                      onClick={() => setSelectedLanguage('all')}
                    >
                      All
                    </button>
                    <button
                      className="block py-2 px-4 hover:bg-gray-200"
                      onClick={() => setSelectedLanguage('English')}
                    >
                      English
                    </button>
                    <button
                      className="block py-2 px-4 hover:bg-gray-200"
                      onClick={() => setSelectedLanguage('Hindi')}
                    >
                      Hindi
                    </button>
                    <button
                      className="block py-2 px-4 hover:bg-gray-200"
                      onClick={() => setSelectedLanguage('Spanish')}
                    >
                      Spanish
                    </button>
                  </div>
                )}
              </div>
              {/* <div className="px-4 py-2">
                <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded">
                  <FontAwesomeIcon icon={faGlobe} />
                </button>
              </div> */}
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

      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center md:py-6">
        <div className="w-full md:w-auto mx-auto px-4 md:px-0">
        <div className="relative">
  <input
    className="appearance-none border border-gray-400 py-2 pl-10 pr-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    type="text"
    placeholder="Search for a doctor..."
    value={searchTerm}
    onChange={handleSearch}
  />
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M13.854 12.646a1 1 0 01-1.414 1.414l-2.792-2.792a4.5 4.5 0 111.414-1.414l2.792 2.792zM7.5 11a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>

          {filteredDoctors.map((doctor, index) => (
            <div key={index} className="my-4 p-4 bg-gray-100 rounded-md shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
              <p className="text-gray-600">{doctor.specialty}</p>
              <p className="text-gray-600">{doctor.phone}</p>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-2/5 mx-auto py-6 text-center">
          <img src={logo4} className="w-full"></img>
        </div>
        
      </div>
      <div class="flex justify-center items-center pb-8">

          <ImageGrid/>
      
</div>

<div className="mt-4 pb-10 flex justify-center items-center">
  <button
    className="bg-purple-500 text-white font-bold py-2 px-4 rounded text"
    onClick={() => window.location.href = "#"}
  >
    Join your Community forum.
  </button>
</div>
</div>
);
}

export default User;
