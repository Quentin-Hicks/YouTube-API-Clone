// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios'
import React, { useState, useEffect } from 'react';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

// import for adding comment 
import AddComment from "./pages/AddComment/AddComment";



function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    getAllVideos()
  }, [])

  async function getAllVideos(){
    console.log()
  }

  return (
    <div>
      
      <Navbar />
      <SearchBar />
      {/* <SearchBar filterVideos={filterVideos} /> */}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addcomment" element={<PrivateRoute><AddComment /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
