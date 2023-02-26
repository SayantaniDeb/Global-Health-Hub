import React from 'react';
 // import Tailwind CSS styles

function Community() {
  return (
    <div className="h-screen flex">
      <div className="flex-none w-64 bg-gray-800 text-white">
        <div className="px-4 py-2 border-b border-gray-700">
          <h1 className="text-2xl font-semibold">Global Health Hub</h1>
        </div>
        <div>
            <button className="text-gray-400 hover:text-white focus:outline-none"     onClick={() => window.location.href = "/"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M6.707 12l5.147-5.146a.5.5 0 0 0-.708-.708l-5.5 5.5a.5.5 0 0 0 0 .707l5.5 5.5a.5.5 0 0 0 .708-.708L6.707 12z"/>
                <path fillRule="evenodd" d="M14.854 11.646a.5.5 0 0 0 0 .708l5.5 5.5a.5.5 0 0 0 .708-.708l-5.146-5.147 5.146-5.147a.5.5 0 0 0-.708-.708l-5.5 5.5a.5.5 0 0 0 0 .707z"/>
              </svg>
            </button>
          </div>
        <div className="px-4 py-2 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Chats</h2>
          <div className="flex justify-between items-center mt-2">
            <div className="flex">
              <img className="w-8 h-8 rounded-full mr-2" src="https://picsum.photos/id/1/200/200" alt="" />
              <div>
                <h3 className="text-md font-semibold">John Doe</h3>
                <span className="text-sm text-gray-400">Last message</span>
              </div>
            </div>
            <span className="bg-green-500 rounded-full w-4 h-4 flex items-center justify-center"></span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex">
              <img className="w-8 h-8 rounded-full mr-2" src="https://picsum.photos/id/2/200/200" alt="" />
              <div>
                <h3 className="text-md font-semibold">Jane Smith</h3>
                <span className="text-sm text-gray-400">Last message</span>
              </div>
            </div>
            <span className="bg-green-500 rounded-full w-4 h-4 flex items-center justify-center"></span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex">
              <img className="w-8 h-8 rounded-full mr-2" src="https://picsum.photos/id/3/200/200" alt="" />
              <div>
                <h3 className="text-md font-semibold">Bob Johnson</h3>
                <span className="text-sm text-gray-400">Last message</span>
              </div>
            </div>
            <span className="bg-red-500 rounded-full w-4 h-4 flex items-center justify-center"></span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-100">
        <div className="px-4 py-2 border-b border-gray-300 flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-2" src="https://picsum.photos/id/1/200/200" alt="" />
            <h2 className="text-lg font-semibold">John Doe</h2>
          </div>
          <div className="flex items-center">
            <span className="bg-green-500 rounded-full w-4 h-4 flex items-center justify-center mr-2"></span>
            <span className="bg-gray-400 rounded-full w-4 h-4 flex items-center justify-center mr-2"></span>
            <span className="bg-red-500 rounded-full w-4 h-4 flex items-center justify-center"></span>
          </div>
        </div>
        <div className="px-4 py-2">
        <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full mr-2" src="https://picsum.photos/id/1/200/200" alt="" />
            <div className="flex-1 bg-gray-200 rounded-full px-4 py-2">
                
              <span className="text-sm text-gray-600">Type a message</span>
              
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-4 py-2 ml-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community

