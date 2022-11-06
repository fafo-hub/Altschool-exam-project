import React from "react";
import { useState, useEffect } from "react";
import './App.css';
 import ErrorPage from './Components/error';
 //import UserCard from './Components/userCard';
 import ApiCall from './Components/ApiCall'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import MoreInfo from "./Components/moreInfo"

//Page One
const Jumbo = () => {
  return (
    <section className="home-container">
    <div className="content">
      <h3 className="content-text">Olatunde Fafolahan</h3>
      <p className="jumbo-mini-text">AltSchool Exam Project</p>
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
      //console.log(data);
    })

    
    
  }
  
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = profile.slice(indexOfFirstPost, indexOfLastPost)

  //useEffect(() => {ReusableAPI()},  []);
  try{
    //Runs this code when no error
    useEffect(() => {ReusableAPI()},  []);
} catch(err) {
  //Runs this code when there an error
        //console.log(err.message);
        //setResultScreen(<p style={{color:'red', fontSize: 12}}>Syntax error: {err.message}</p>)
        console.log(err.message);
}
  


  const paginate = (pageNumbers) => {
      setPage(pageNumbers)
  };


  return (
    <Router>
      <div className="App">
      <section className="main-container">
      <Routes>
        <Route path="/" element={<Jumbo />} />
        <Route path="/apicall/*" element={<ApiCall currentPost = {currentPost} postsPerPage = {postsPerPage} paginate = {paginate} totalPost = {profile.length} profile={profile} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </section>
    </div>
    </Router>
  );
}

export default App;
