import React from 'react'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="big-container">
        <div className='error-container'>
            <h1>You typed a wrong URL!</h1>
            <Link to="/apicall" className='more'>
                Homepage
            </Link>
        </div>
    </div>
  )
}

export default ErrorPage