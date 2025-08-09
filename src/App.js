import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Home from './pages/Home';
import Login from './pages/Login';
import Subject from './pages/Subject';
import Admin from './pages/Admin';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="flex justify-between items-center p-4 shadow-md bg-gray-100 dark:bg-gray-800">
          <h1 className="text-xl font-bold">Unlocking Your Future</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            {user ? (
              <>
                <span>{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                Login
              </Link>
            )}
          </div>
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/subject/:name"
              element={user ? <Subject /> : <Navigate to="/login" />}
            />
            <Route
              path="/admin"
              element={user ? <Admin /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
