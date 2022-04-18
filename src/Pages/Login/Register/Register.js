import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialMedia from '../SocialMedia/SocialMedia';
import { async } from '@firebase/util';
import Loading from '../../Home/Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const nevigateLogin = () => {
        navigate('/home');
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated Profile');
        navigate('/home');

        if (loading || updating) {
            return <Loading></Loading>
        }

    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-info'>Please Register First</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="conditions" id="conditions" />
                <label className={agree ? 'ps-2 text-info' : 'ps-2 text-danger'} htmlFor="conditions">Terms And Conditions</label>
                <input
                    disabled={!agree}
                    className='btn btn-info w-50 mx-auto mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already Have An Account? <Link to='/login' className='text-info pe-auto text-decoration-none' onClick={nevigateLogin}>Please Login</Link></p>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Register;