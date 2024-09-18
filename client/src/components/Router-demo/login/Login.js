import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userAuthorLoginThunk } from '../../../redux/slices/userAuthorSlice';
import './Login.css'; // Importing the CSS file

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { errorOccurred, loginUserStatus, errMsg, currentUser } = useSelector(state => state.userAuthorLoginReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginBtn = (usercredentialobj) => {
        console.log(usercredentialobj);
        dispatch(userAuthorLoginThunk(usercredentialobj));
        console.log("current obj", currentUser);
    };

    useEffect(() => {
        if (loginUserStatus === true) {
            navigate('/faculty-profile');
        }
    }, [loginUserStatus]);

    // Disable copy, paste, and cut for password field
    const disableCopyPaste = (e) => {
        e.preventDefault();
    };

    return (
        <div className='login-container'>
            <form className="form" onSubmit={handleSubmit(handleLoginBtn)}>
                <p className="form-title">Login to your account</p>
                {errorOccurred && <p className='text-danger mx-auto'>{errMsg}</p>}

                <div className="input-container">
                    <input 
                        type="text" 
                        placeholder="Enter Username" 
                        {...register('username', { required: 'Username is required' })} 
                    />
                    {errors.username && <span className="error-message">{errors.username.message}</span>}
                </div>
                
                <div className="input-container">
                    <input 
                        type="password" 
                        placeholder="Enter password" 
                        {...register('password', { required: 'Password is required' })} 
                        onCopy={disableCopyPaste}
                        onPaste={disableCopyPaste}
                        onCut={disableCopyPaste} 
                    />
                    {errors.password && <span className="error-message">{errors.password.message}</span>}
                </div>
                
                <button type="submit" className="submit">Login</button>

                {/* <p className="signup-link">
                    No account? <Link to='/register'>Sign up</Link>
                </p> */}
            </form>
        </div>
    );
}

export default Login;


