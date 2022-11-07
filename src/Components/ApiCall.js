import React from "react";
import UserCard from './userCard'
import { Link } from "react-router-dom";

const ApiCall = ({currentPost, postsPerPage, paginate, totalPost, profile}) => {
    const pageNumbers = [];
  
  for ( let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
      pageNumbers.push(i)
  }


    return (
    <div>
      <section className="apipage-container">
        <h1 className="heading"> MY REPO <span> LINKS</span></h1>
        {profile.length === 0 && <h1 className="loader">Loading...</h1>}
        <UserCard currentPost={currentPost} profile={profile} />
        <div className="page-flex">
            {pageNumbers.map(number => 
                (<p key={number}>
                    <Link style={{width:'100px'}} className="btn active" onClick={ () => paginate(number)} >{number}</Link>
                </p>))}
        </div>
        <div className="home-comp">
          <Link to={"/"} className="more">
           Home
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ApiCall