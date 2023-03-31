import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Admin from "./Admin";
import User from "./User";
import logo from "../images/1.gif";
import app from "../firebase";

function Loginform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth(app);

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );

      const user = userCredential.user;

      if (user) {
        setRole(user.role);
        setIsLoggedIn(true);
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid username or password");
    }
  }

  async function handleRegister(event) {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );

      const user = userCredential.user;

      if (user) {
        setRole(user.role);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
      alert("Error creating user");
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
          <Admin handleLogout={handleLogout} />
        </>
      );
    } else {
      return (
        <>
          <User handleLogout={handleLogout} />
        </>
      );
    }
  } else {
    // If the user is not logged in, show the login and registration forms
    return (
      <div className="bg-white h-screen flex justify-center items-center">
        <div className="container flex flex-col md:flex-row md:max-w-3xl">
          <form
            className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 md:mr-4 md:mb-0"
            onSubmit={handleLogin}
          >
            <h1 className="text-2xl font-bold mb-4">Global Health Hub</h1>
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
                placeholder="Enter your password"
              />
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
          <form
            className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 md:ml-4 md:mb-0"
            onSubmit={handleRegister}
          >
            <h1 className="text-2xl font-bold mb-4">Register</h1>
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
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Loginform;
