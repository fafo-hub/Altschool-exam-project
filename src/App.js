import React from "react";
import { useState, useEffect } from "react";
import './App.css';
 import ErrorPage from './Components/error';
 //import UserCard from './Components/userCard';
 import ApiCall from './Components/ApiCall'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Page One
const Jumbo = () => {
  return (
    <section className="home-container">
    <div className="content">
      <h3 className="content-text">Olatunde Fafolahan</h3>
      <p className="jumbo-mini-text">AltSchool Assignment 2</p>
      <Link to="/apicall" className="more">
        Click Here
      </Link>
    </div>
    </section>
  );
};



//Page Two


function App() {
 const [profile, setProfile] = useState([]);
  const [page, setPage] = useState(1)
  const [postsPerPage] = useState(5)
  
  const ReusableAPI = () =>{
    fetch("https://api.github.com/users/fafo-hub/repos")
    .then((response) => response.json())
    .then((data) => { setProfile(data)
    })
    
  }
  
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = profile.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {ReusableAPI()},  []);
  
  
  const paginate = (pageNumbers) => {
      setPage(pageNumbers)
  };


  return (
    <Router>
      <div className="App">
      <section className="main-container">
      <Routes>
        <Route path="/" element={<Jumbo />} />
        <Route path="/apicall" element={<ApiCall currentPost = {currentPost} postsPerPage = {postsPerPage} paginate = {paginate} totalPost = {profile.length} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </section>
    </div>
    </Router>
  );
}

export default App;
