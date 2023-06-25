import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-centre">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            Create Category
          </NavLink>
          <NavLink to="/dashboard/admin/create-products" className="list-group-item list-group-item-action">
            Create Products
          </NavLink>
          <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">
            User
          </NavLink>
          <NavLink to="" className="list-group-item list-group-item-action">
            A fourth link item
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
