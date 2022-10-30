import React from 'react'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="big-container">
        <div className='error-container'>
            <h1>You typed a wrong URL!</h1>
            <Link to="/apicall">
                <a href="about.html" class="more"> Homepage </a>
            </Link>
        </div>
    </div>
  )
}

export default ErrorPage