import { useState } from "react";
import Admin from "./Admin";
import User from "./User";

function Loginform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(event) {
    event.preventDefault();

    // Here you can hardcode your login credentials and roles
    const hardcodedCredentials = [
      { username: "admin", password: "admin123", role: "admin" },
      { username: "user", password: "user123", role: "user" },
    ];

    // Check if the entered credentials match the hardcoded credentials
    const foundUser = hardcodedCredentials.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (foundUser) {
      setRole(foundUser.role);
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setRole("");
  }

  if (isLoggedIn) {
    // If the user is logged in, show the appropriate website based on their role
    if (role === "admin") {
      return (
        <>
        <Admin handleLogout={handleLogout}/>
        </>
      );
    } else {
      return (
        <><User handleLogout={handleLogout}/></>
      );
    }
  } else {
    // If the user is not logged in, show the login form
    return (
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleLogin}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"            />
              </div>
              <div className="mb-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        );
      }
    }
    
    export default Loginform;
    
