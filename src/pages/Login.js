import React from 'react'

export default function Login() {
    return (
      <>
      <div className="login-box">
        <label>Email</label>
        <br></br>
        <input type="email" name="email" required placeholder="enter your email"/>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="password" name="password" required placeholder="enter your password"/>
      </div>
    </>
  )
}