import React from 'react';
import CustomButton from './../custom-button/custom-button';
import FormInput from './../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './signin.style.scss';


 class Signin extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

     handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'', password:''});
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }


    render(){
        return(
            <div className='signin'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.onSubmit} action="">
                    <FormInput 
                         type="email"
                         name="email" 
                         id="email" 
                         label="Email"
                         handleChange={this.handleChange}
                         value={this.state.email} 
                         required
                    />

                    <FormInput 
                        type="password" 
                        name="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                     />
                     
                     <CustomButton type="submit">
                         Sign in
                     </CustomButton>
                     <CustomButton onClick={signInWithGoogle}>
                         Sign in with Google
                     </CustomButton>
                </form>
            </div>
        )
    }
 }

 export default Signin;