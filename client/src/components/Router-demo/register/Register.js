import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Importing the CSS file

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [err, setErr] = useState('');

    const onSubmit = async (userData) => {
        console.log(userData);
        try {
            let res = await axios.post('http://localhost:5000/user-api/user', userData);
            console.log(res);
            if (res.data.message === 'user created') {
                // Navigate to login
                navigate('/');
            } else {
                setErr(res.data.message);
                console.log(res.data.message);
            }
        } catch (error) {
            console.error("There was an error registering the user!", error);
            setErr('There was an error registering the user');
        }
    };

    // Disable copy, paste, and cut for password field
    const disableCopyPaste = (e) => {
        e.preventDefault();
    };

    return (
        <div className='register-container'>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <p className="form-title">Register</p>
                

                {/* Display error message */}
                {err.length !== 0 && <p className='text-danger mx-auto'>{err}</p>}

                <div className="input-container">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Username" 
                        {...register('username', { required: 'Username is required' })} 
                    />
                    {errors.username && <span className="error-message">{errors.username.message}</span>}
                </div>
                <div className="input-container">
                    <input 
                        type="email" 
                        className="input" 
                        placeholder="Email" 
                        {...register('email', { 
                            required: 'Email is required', 
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Enter a valid email'
                            } 
                        })} 
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>
                <div className="input-container">
                    <input 
                        type="password" 
                        className="input" 
                        placeholder="Password" 
                        {...register('password', { 
                            required: 'Password is required', 
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            } 
                        })}
                        onCopy={disableCopyPaste}
                        onPaste={disableCopyPaste}
                        onCut={disableCopyPaste} 
                    />
                    {errors.password && <span className="error-message">{errors.password.message}</span>}
                </div>
                <button type="submit" className="submit">Register</button>
                <p className="signin">Already have an account? <Link to="/">Login</Link></p>
            </form>
        </div>
    );
}

export default Register;
