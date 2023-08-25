import React, { useState } from 'react'
import { loginApi } from '../api/Api'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate= useNavigate()

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validate = () => {
    let isValid = true;
    if(email.trim() === ''){
      setEmailError('Email is required')
      isValid = false
    }
    if(password.trim() === ''){
      setPasswordError('Password is required')
      isValid = false

  }
  return isValid
}

  const dispatch=useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    if(!validate()){
      return
    }

    const data={
      email:email,
      password:password
    }
    loginApi(data).then( res=> {
      console.log(res.data)
      // save token in local storage
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))

      dispatch(addUser(res.data.user))
      toast.success(res.data.message)
      navigate('/')
    }).catch(err =>{
      console.log(err)
      toast.error("Login failed")
    })
  }

  return (
    <div className='container w-25 mt-4'>
      <h3 className='text-center'>Login</h3>
      <form action="" className='mt-4'>

        <label htmlFor="email">Email</label>
        <input onChange={(e)=> setEmail(e.target.value)} type="email" className='form-control' id='email' placeholder='abc@email.com' />
        {
          emailError && <small className='text-danger'> {emailError }</small>
        }
        <label htmlFor="password">Password</label>
        <input onChange={(e)=> setPassword(e.target.value)} type="password" className='form-control' id='password' placeholder='********'  />
        {
          passwordError && <small className='text-danger'> {passwordError}</small>
        }
        <button onClick={handleLogin} className='btn btn-black w-100 mt-2' >
          Login Now
        </button>
        <Link to = {'/forgotpassword'}>
        <p> Forgot your Password </p>
        </Link>
      </form>
    </div>
  )
}


export default Login