// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, NavLink } from 'react-router-dom';
// import { resetState } from '../../../redux/slices/userAuthorSlice';
// import { FaUserCircle, FaSignOutAlt, FaHome, FaTrophy, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
// import './NavigationBar.css';

// function NavigationBar() {
//     let { loginUserStatus, currentUser } = useSelector(state => state.userAuthorLoginReducer);
//     let dispatch = useDispatch();

//     function logout() {
//         //remove item from local storage
//         localStorage.removeItem('token');
//         dispatch(resetState());
//     }

//     return (
//         <div>
//             <nav className="main-nav">
//                 <div className="container-fluid">
//                     <div className="nav-header">
//                         <a href="./" className="nav-logo" >
//                             <img src="https://vnrvjiet.ac.in/assets/images/Header Logo.png" alt="Header Logo" />
//                         </a>
//                         <div className="nav-links">
//                             <ul>

//                                 {loginUserStatus === false ? (
//                                     <>
//                                         <li>
//                                             <NavLink className="nav-link" to="/"><FaHome /> Home</NavLink>
//                                         </li>
//                                         <li>
//                                             <NavLink className="nav-link" to="/all-achievements"><FaTrophy /> Achievements</NavLink>
//                                         </li>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <div className='login-menu'>
//                                         <li className="user-info">
//                                             <FaUserCircle className="user-icon" /> {currentUser.username}
//                                         </li>
//                                         <li>
//                                             <NavLink className="logout-link" to="/" onClick={logout}><FaSignOutAlt /> Logout</NavLink>
//                                         </li>
//                                         </div>
//                                     </>
//                                 )}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// }

// export default NavigationBar;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { resetState } from '../../../redux/slices/userAuthorSlice';
import { FaUserCircle, FaSignOutAlt, FaHome, FaTrophy, FaSignInAlt } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import './NavigationBar.css';

function NavigationBar() {
    const [showSubLinks, setShowSubLinks] = useState(false); // State to manage showing additional links
    const { loginUserStatus, currentUser } = useSelector(state => state.userAuthorLoginReducer);
    const dispatch = useDispatch();

    function logout() {
        // Remove item from local storage
        localStorage.removeItem('token');
        dispatch(resetState());
    }

    

    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className='nav-logo'>
                    <NavLink to="/">
                        <img src="https://vnrvjiet.ac.in/assets/images/Header Logo.png" alt="Header Logo" className="logo-img" />
                    </NavLink>
                </div>
                <ul className='nav-links'>
                    <li>
                        <NavLink exact to="/" className="nav-link" activeClassName="active-nav" ><FaHome /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/all-achievements" className="nav-link" activeClassName="active-nav"><FaTrophy /> Achievements</NavLink>
                    </li>
                    
                    {loginUserStatus && (
                        <li className='login-menu'>
                            <NavLink to="/" className="nav-link" onClick={logout}><FaSignOutAlt /> Logout</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default NavigationBar;









