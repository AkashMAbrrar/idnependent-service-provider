import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialMedia from '../SocialMedia/SocialMedia';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const nevigateLogin = () => {
        navigate('/home');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-info'>Please Register First</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input className='btn btn-info' type="submit" value="Register" />
            </form>
            <p>Already Have An Account? <Link to='/login' className='text-info pe-auto text-decoration-none' onClick={nevigateLogin}>Please Login</Link></p>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Register;