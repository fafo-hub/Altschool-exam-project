import React from 'react'
import { Link } from "react-router-dom";


const UserCard = ({ currentPost}) => {
  localStorage.setItem('repoData', JSON.stringify(currentPost))
  return (
    <div>
        <div className="box-container">
           {currentPost.map((user, i) => (
              <div key={i} >
                  <Link className='repo-link' style={{color:'white'}} to={`/apicall/${user.id}`} >{user.git_url}/</Link>
              </div>
            ))}
        </div>
    </div>
  )
}

export default UserCard