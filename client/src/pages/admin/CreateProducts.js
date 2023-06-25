import React from 'react'
import AdminMenu from '../../components/layout/AdminMenu'

const CreateProducts = () => {
  return (
    <div>
       <div className="container m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
            </div>
            <div className="col-md-9">
              <h1>Create Products</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProducts
