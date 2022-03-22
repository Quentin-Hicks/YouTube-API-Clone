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



function App(props) {

  const [videos, setVideos] = useState([]) // let videos = []
  const [filteredVideo, filterVideos] = useState('stand up comedy') //let filteredVideo = 'stand up comedy'

  async function fetchVideos(){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${filteredVideo}&key={AIzaSyBM5RBhnrQ0NHkQcgsfiO6jayw4MBkW6jA}`, videos)
    setVideos(response.data.results)
    console.log(response.data.results)
  }

  useEffect(() => {
    console.log('use effect')
    let mounted = true
    if(mounted){
      fetchVideos()
    }
    return () => mounted = false
  }, [])

  function mapVideos(){
    return videos.map(video =>
      console.log('map')
      )
  }

  return (
    <div>
      
      <Navbar />
      <SearchBar fetchVideos={fetchVideos}/>
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
