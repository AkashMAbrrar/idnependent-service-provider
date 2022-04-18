import React from 'react';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialMedia = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info d-block mx-auto my-2'>
                    <img style={{ width: "40px" }} src={google} alt="" />
                    <span className='px-2'>Google Signin</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info d-block mx-auto'>
                    <img style={{ width: "40px" }} src={github} alt="" />
                    <span className='px-2'>Github Signin</span>
                </button>
            </div>
        </div>
    );
};

export default SocialMedia;