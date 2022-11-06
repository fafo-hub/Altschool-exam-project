import React from 'react'
import { Link } from "react-router-dom";
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
           {/* <img
             className="user-image"
             src={userData.picture.large}
             alt="userProfilePicture"
            />
           <div className='user-text'>
              <p>{userName}</p>
              <p>{ages}</p>
              <p>{genders}</p>
              <p>{house}</p>
              <p>{mail}</p>
           </div> */}
       </section>
       {/* <MoreInfo /> */}
    </div>
  )
}

export default UserCard