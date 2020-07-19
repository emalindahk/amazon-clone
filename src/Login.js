import React , { useState }from 'react';
import './stylesheets/Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        //login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>{
                //logged in, redicrect to homepage
                history.push("/");
        })
        .catch((e) => alert(e.message));
    };
    const register = event =>{
        event.preventDefault();
        //register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            //create user and redirect to homepage
            history.push("/");

        })
        .catch((e) => alert(e.message));
        
    };
    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} 
                    onChange={event => setEmail(event.target.value)} 
                    type="text"/>
                    <h5>Password</h5>
                    <input value={password} 
                    onChange={event => setPassword(event.target.value)} type="password"/>
                    <button type="submit" className="login__signInButton"
                    onClick={login}>Sign In</button>
                </form>
                <p>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
                <button className="login__signUpButton"
                onClick={register}>Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
