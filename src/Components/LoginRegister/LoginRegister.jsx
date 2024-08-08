import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [forgotPassword, setForgotPassword] = useState(false);

    const registerLink = () => {
        setAction('active');
        setForgotPassword(false);
    };

    const loginLink = () => {
        setAction('');
        setForgotPassword(false);
    };

    const forgotPasswordLink = () => {
        setForgotPassword(true);
    };

    return (
        <div className={`wrapper ${action} ${forgotPassword ? 'forgot' : ''}`}>
            <div className='form-box login' style={{ display: forgotPassword ? 'none' : 'block' }}>
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                        <a href='#' onClick={forgotPasswordLink}>Forgot password?</a>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account?<a href='#' onClick={registerLink}> Register</a></p>
                    </div>
                </form>
            </div>

            <div className='form-box register' style={{ display: forgotPassword ? 'none' : 'block' }}>
                <form action="">
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='email' placeholder='Email' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox' />I agree to the terms & conditions</label>
                    </div>
                    <button type='submit'>Register</button>
                    <div className='register-link'>
                        <p>Already have an account?<a href='#' onClick={loginLink}> Login</a></p>
                    </div>
                </form>
            </div>

            <div className='form-box forgot-password' style={{ display: forgotPassword ? 'block' : 'none' }}>
                <form action="">
                    <h1>Forgot Password</h1>
                    <div className='input-box'>
                        <input type='email' placeholder='Enter your email' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <button type='submit'>Submit</button>
                    <div className='register-link'>
                        <p><a href='#' onClick={loginLink}>Back to Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
