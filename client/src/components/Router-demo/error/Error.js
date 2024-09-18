import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';
// import { LuFileSearch } from "react-icons/lu";

function Error() {
    return (
        <div className='error-container'>
            <div className='error-content'>
                <h1>404</h1>
                <h2> Page Not Found</h2>
                <p>Sorry, the page you are looking for does not exist. It might have been moved or deleted.</p>
                <Link to="/" className="error-link">Go to Home</Link>
            </div>
        </div>
    )
}

export default Error;
