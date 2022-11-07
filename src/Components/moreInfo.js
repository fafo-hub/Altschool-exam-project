import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";


const MoreInfo = () => {
    let { id } =  useParams();
    const ReadMoreData = JSON.parse(localStorage.getItem("repoData"));
    const finalData = ReadMoreData?.filter((idf) => idf.id == id);
    
  return (
    <div>
      <div className="more-container">
          <div className="image-container">
            <img src= {finalData[0].owner.avatar_url} alt="image" />
          </div>
          <div className="">
              <p style={{color:'white'}}> Username: {finalData[0].owner.login} </p>
              <p style={{color:'white'}}> Project Name: {finalData[0].name} </p>
              <p style={{color:'white'}}> Push Date: {finalData[0].pushed_at} </p>
              <p style={{color:'white'}}> Last Commit: {finalData[0].updated_at} </p>
            <div className="button">
              <button>
                <Link className='more' to="/apicall">
                  Back
                </Link>
              </button>
              <button>
                <a target="_blank" className='more' href={finalData[0].clone_url}>Go to repo</a>
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MoreInfo