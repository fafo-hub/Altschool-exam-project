import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import MoreInfo from './moreInfo';

const UserCard = ({ userData }) => {
  //const userName = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
   const gitUrl = `${userData.git_url}`;
  // const ages = `${userData.dob.age}`;
  // const house = `${userData.location.city}`;
  // const mail = `${userData.email}`;
  return (
    <div>
       <section className="box">
        <p><Link to="./moreinfo" >{gitUrl}</Link></p>
       </section>
      
      <Routes>
      <Route path = "/moreinfo" element = {<MoreInfo userData={userData} />}/>
    </Routes>
    </div>
  )
}

export default UserCard