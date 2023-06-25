import React from 'react'
import UserMenu from '../../components/layout/UserMenu'

const Profile = () => {
  return (
    <div>
       <div className="container m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
            </div>
            <div className="col-md-9">
              <h1>Your Profile</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
