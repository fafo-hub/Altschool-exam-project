import React, { useState, useEffect } from "react";
import './App.css';
 import ErrorPage from './Components/error';
 import UserCard from './Components/userCard';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Page One
const Jumbo = () => {
  return (
    <section className="home-container">
    <div className="content">
      <h3 className="content-text">Olatunde Fafolahan</h3>
      <p className="jumbo-mini-text">AltSchool Assignment 2</p>
      <Link to="/apicall">
      <a href="about.html" class="more"> Click Here </a>
      </Link>
    </div>
    </section>
  );
};



//Page Two
function ApiCall() {
  const [profile, setProfile] = useState([]);
  const [page, setPage] = useState(1)

  const ReusableAPI = () =>{
    fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((json) => setProfile(json.results));
  }

  useEffect(() => {ReusableAPI()}, []);

  const Pagination = (val) => {
    setPage(val)
    ReusableAPI()
  }

  return (
    <section className="apipage-container">
        <h1 className="heading">MEET <span>OUR PERSONELS</span></h1>
        {profile.length === 0 && <h1 className="loader">Loading...</h1>} 
        <div className="box-container">
           {profile.map((user, i) => (
              <div key={i}>
                <UserCard userData={user} />
              </div>
            ))}
        </div>
        <div className="page-flex">
           <button className="btn" onClick={()=>Pagination(page-1)} disabled={page===1}>prev</button>
           <button className={`${page===1?'active':'btn'}`} onClick={()=>Pagination(1)}>1</button>
           <button className={`${page===2?'active':'btn'}`} onClick={()=>Pagination(2)}>2</button>
           <button className={`${page===3?'active':'btn'}`} onClick={()=>Pagination(3)}>3</button>
           <button className={`${page===4?'active':'btn'}`} onClick={()=>Pagination(4)}>4</button>
           <button className={`${page===5?'active':'btn'}`} onClick={()=>Pagination(5)}>5</button>
           <button className={`${page===6?'active':'btn'}`} onClick={()=>Pagination(6)}>6</button>
           <button className={`${page===7?'active':'btn'}`} onClick={()=>Pagination(7)}>7</button>
           <button className={`${page===8?'active':'btn'}`} onClick={()=>Pagination(8)}>8</button>
           <button className="btn" onClick={()=>Pagination(page+1)} disabled={page===8}>next</button>
        </div>
        <Link to="/" className="main-home">
           <a href="about.html" class="more"> Home </a>
        </Link>
    </section>
  );
}


function App() {
  return (
    <Router>
      <div className="App">
      <section className="main-container">
      <Routes>
        <Route path="/" element={<Jumbo />} />
        <Route path="/apicall" element={<ApiCall />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </section>
    </div>
    </Router>
  );
}

export default App;
