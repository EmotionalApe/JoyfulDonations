import React, { useState } from 'react'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {app} from "../firebase"

const auth = getAuth(app);



export default function Login() {

    const signInUser = () => {
      signInWithEmailAndPassword(auth, email, password).then((value) => console.log("signed In")).catch((err)=>console.log(err));
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
      <>
      <div className="login-box">
        <label>Email</label>
        <br></br>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" required placeholder="enter your email"/>
        <br></br>
        <label>Password</label>
        <br></br>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" required placeholder="enter your password"/>
        <br></br>
        <button onClick={signInUser}>Sign me In</button>
      </div>
    </>
  )
}