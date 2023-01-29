import React from 'react'
import './Login.css'
import { signInWithGoogle } from './firebase';

function Login({setter}) {
    const signUsIn = () => {
        signInWithGoogle(setter); 
    }
  return (
    <div className="login">
        <button onClick={signUsIn}>Sign In With Google</button>
    </div>
  )
}

export default Login