import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { useAuth } from '../../context/auth'; 
import {toast } from 'react-toastify';

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [auth,setAuth] = useAuth();
  const handleLogout = ()=>{
    setAuth({
     ...auth,
     user:null,
     token:""
    })
    localStorage.removeItem('auth')
    toast.success("Logout Successfully")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary shadow">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand">Mega Mart</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-light text-light">Home</NavLink>
        </li>
        {
          !auth.user ? (
            <>
             <li className="nav-item">
          <NavLink to="/register" className="nav-link text-light">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link text-light">Login</NavLink>
        </li>
            </>
          ):(
            <div className="btn-group">
  <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    {auth?.user?.name}
  </button>
  <ul className="dropdown-menu dropdown-menu-lg-end">
    <li><NavLink className="dropdown-item" type="button" to="/login" onClick={handleLogout}>Logout</NavLink></li>
    <li><NavLink className="dropdown-item" type="button" to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} >Dashboard</NavLink></li>
  </ul>
</div>
          )
        }
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link text-light">Cart (0)</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default header
