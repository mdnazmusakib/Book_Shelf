import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import MyShelf from "./pages/MyShelf";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Books from "./components/Books/Books";
import Borrowedbook from "./components/Borrowedbook/Borrowedbook";
import Ebook from "./components/Ebook/Ebook";
import Myself from "./pages/MyShelf";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard>
                <Home />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Dashboard>
                <Search />
              </Dashboard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/myshelf"
          element={
            <ProtectedRoute>
              <Dashboard>
                <MyShelf />
              </Dashboard>
            </ProtectedRoute>
          }
        >
          <Route index element={<Books />} /> {/* Default child route */}
          <Route path="borrowedbook" element={<Borrowedbook />} />
          <Route path="ebook" element={<Ebook />} />
        </Route>
        {/* <Route
          path="/myshelf"
          element={
            <ProtectedRoute>
              <Dashboard>
                <Route path="/myshelf" element={<MyShelf />}>
                  <Route path="/myshelf/" element={<Books />} />
                  <Route
                    path="/myshelf/borrowedbook"
                    element={<Borrowedbook />}
                  />
                  <Route path="/myshelf/ebook" element={<Ebook />} />
                </Route>
              </Dashboard>
            </ProtectedRoute>
          }
        /> */}
        {/* 
        <Route path="/myshelf" element={<MyShelf />}>
          <Route path="/myshelf/" element={<Books />} />
          <Route path="/myshelf/borrowedbook" element={<Borrowedbook />} />
          <Route path="/myshelf/ebook" element={<Ebook />} />
        </Route> */}

        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Dashboard>
                <Favorites />
              </Dashboard>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
