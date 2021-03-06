import React from 'react';
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;
        const { emailSignInStart } = this.props;

        emailSignInStart(email, password);
    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value})
    }

    render(){
        const { googleSignInStart } = this.props;
        return(
            <div className="sign-in">
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type='email' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label="Email"
                    required
                    />
                    <FormInput 
                    name='password' type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label = "Password"
                    required />
                    <div className='flex'>
                    <CustomButton 
                    type="submit" 
                    >Sign In</CustomButton>
                    <CustomButton 
                    type="button"
                    onClick={googleSignInStart} 
                    isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
});

export default connect(null, mapDispatchToProps)( SignIn);