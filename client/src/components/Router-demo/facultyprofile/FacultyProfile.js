import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import NavigationBar from '../navigationbar/NavigationBar';
import { resetState } from '../../../redux/slices/userAuthorSlice';
import './FacultyProfile.css';

function FacultyProfile() {
    const stateObj = useSelector(state => state.userAuthorLoginReducer);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    function logout() {
        localStorage.removeItem('token');
        dispatch(resetState());
        navigate('/');
    }

    return (
        <div className='home-container'>
      <NavigationBar />
      <div className='content'>
        <div className="author-profile-container">
            {/* <div className="profile-header">
                <h3 className='text-primary'>{stateObj.currentUser.username}</h3>
                <span>{stateObj.currentUser.usertype}</span>
                <h6 className='text-secondary'>{stateObj.currentUser.email}</h6>
                <li className="nav-item user-item">
                    <button className="nav-link"  onClick={logout}>Logout</button>
                </li>
            </div> */}
            <div className="profile-content">
                <div className="link-container">
                    {/* <Link className="profile-link" to="all-achievements">All Achievements</Link> */}
                    <Link className="profile-link" to="achievements/:username">Achievements</Link>
                    <Link className="profile-link" to="add-achievement">Add New Achievements</Link>
                </div>
                <div className="content-container">
                    <Outlet />
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default FacultyProfile;
