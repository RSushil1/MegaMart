import React from 'react'
import UserMenu from '../../components/layout/UserMenu'
import { UseAuth } from '../../context/auth'

const Dashboard = () => {
  const [auth] = UseAuth();
  return (
    <div>
       <div className="container m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
            </div>
            <div className="col-md-9">
              <div className='card w-75'>
                <h3>Name : {auth?.user?.name}</h3>
                <h3>Email : {auth?.user?.email}</h3>
                <h3>Contact : {auth?.user?.phone}</h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
