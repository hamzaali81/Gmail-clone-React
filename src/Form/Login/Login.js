import React from 'react';
import { IconButton,Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { auth,provider } from '../../firebase';
import { login } from '../../features/userSlice';
import './login.css';

function Login() {
   const dispatch = useDispatch();

   const signIn = ()=> {
   auth
   .signInWithPopup(provider)
   .then(({user})=>{
       dispatch(
           login({
               displayName: user.displayName,
               email: user.email,
               photoUrl: user.photoUrl

           })
       )
   })
   }

    return (
        <div className="login">
           <div className="login__container">
               <img src="" alt="logo" />
                    <Button variant="contained" color="primary" onClick="signIn">Login</Button>
           </div>
        </div>
    )
}

export default Login;
