import React from 'react';
import Signin from './../../components/signin/sign.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up-page.style.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <Signin/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage;
