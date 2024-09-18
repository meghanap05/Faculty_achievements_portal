import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetState } from '../../../redux/slices/userAuthorSlice';


import { Link } from 'react-router-dom';

function StudentProfile() {
  let stateObj = useSelector(state => state.userAuthorLoginReducer)
  // console.log("stateobj is :", stateObj);

  let dispatch = useDispatch()

    function logout() {
        //remove item from local storage
        localStorage.removeItem('token')
        dispatch(resetState())
    }


  return (
    <div>
      <div className="text-end hello">
                <h3 className='text-primary '>{stateObj.currentUser.username}  </h3>
                <span>{stateObj.currentUser.usertype}</span>
                <h6 className='text-secondary'>{stateObj.currentUser.email}</h6>
                <li className="nav-item user-item">
                                        <Link className="nav-link " to="/" onClick={logout}> Logout</Link>
                                    </li>
            </div>
            
      <Outlet/>
    </div>
  )
}

export default StudentProfile