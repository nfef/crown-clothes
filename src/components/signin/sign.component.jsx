import React from 'react';
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
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.onSubmit} action="">
                    <input type="email" name="email" id="email" value={this.state.email} required/>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                     />
                    <label htmlFor="password">Password</label>
                     <input type="submit" value="Sign In" />
                </form>
            </div>
        )
    }
 }

 export default Signin;