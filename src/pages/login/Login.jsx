import React from "react"
import { useState } from "react"
import PropTypes from 'prop-types';
import axios from "axios"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"


export const Login = () => {
  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  Login.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  const postData = () => {
    axios.post("http://localhost:8080", {
      userName,
      password
    })
    
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My Account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Username or Email address</span>
            <input type='text' onChange={(e) => setUserName(e.target.value)} required />
            <span>Password * </span>
            <input type='password' onChange={(e) => setPassword(e.target.value)} required />
            <button className='button' onClick={postData} type='submit'>Log in </button>
          </form>
        </div>
      </section>
    </>
  )
}
