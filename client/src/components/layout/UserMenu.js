import React from 'react'
import { NavLink } from 'react-router-dom'


const UserMenu = () => {
  return (
    <>
    <div className="text-centre">
      <div className="list-group border border-info">
        <NavLink className="btn btn-info" to="/dashboard/user">Dashboard</NavLink>
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          Profile
        </NavLink>
        <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">
          Orders
        </NavLink>
        <NavLink to="/dashboard/user/wishlist" className="list-group-item list-group-item-action">
          Wishlist
        </NavLink>
        <NavLink to="/dashboard/user/cashback" className="list-group-item list-group-item-action">
          Cashback
        </NavLink>
      </div>
    </div>
  </>
  )
}

export default UserMenu
