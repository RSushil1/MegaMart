import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import { UseAuth } from '../../context/auth'

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();
  const [auth,setAuth] = UseAuth();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:4000/api/v1/auth/login', {
        email, password
      });
      if (res.data.success) {
        toast.success(res.data.message)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigate(location.state ||'/')
      } else {
        toast.error(res.data.message)
      }

    } catch (error) {
      toast.error('Something Went Wrong!')

    }
  }

  return (

    <div className='ms-auto mt-5 login'>
      <form className='border shadow p-5 m-5 bg-white'onSubmit={handleSubmit} >
      <div className='heading'><h1>Login</h1></div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value={email} onChange={(e)=>SetEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" value={password} onChange={(e)=>SetPassword(e.target.value)}  className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>

  )
}

export default Login
