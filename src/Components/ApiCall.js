import React from "react";
import UserCard from './userCard'
//import MoreInfo from "./moreInfo";
import { Link } from "react-router-dom";

const ApiCall = ({currentPost, postsPerPage, paginate, totalPost, profile}) => {
    const pageNumbers = [];
    //console.log(profile);
  
  for ( let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
      pageNumbers.push(i)
  }


    return (
    <div>
         <section className="apipage-container">
        <h1 className="heading">MEET <span>OUR PERSONELS</span></h1>
        {/* {profile.length === 0 && <h1 className="loader">Loading...</h1>}  */}
        <div className="box-container">
           {currentPost.map((user, i) => (
              <div key={i}>
                
                    <UserCard userData={user} profile={profile} />
                
                {/* <MoreInfo userData = {user}/> */}
              </div>
            ))}
        </div>
        <div className="page-flex">
            {pageNumbers.map(number => 
                (<p key={number}>
                    <Link className="btn active" onClick={ () => paginate(number)} >{number}</Link>
                </p>))}
        </div>
        <Link className="more">
           Home
        </Link>
    </section>


    {/* <Routes>
      <Route path = "/moreinfo" element = {<MoreInfo />}/>
    </Routes> */}
    </div>
  )
}

export default ApiCall