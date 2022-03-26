import React from 'react'
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';

function login() {
    const dispatch = useDispatch();

    const signin = () =>{
        auth.signInWithPopup(provider).
        then((result)=>{
            let user= result.user;
            dispatch(setuserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            }))
            
     })
 }
  return (
   <button onClick={signIn()}>Login</button>
  )
}

export default login