import React from "react";
import { NavLink, Link } from "react-router-dom";
import { UseAuth } from "../../context/auth";
import { toast } from "react-toastify";
import SearchInput from "../Form/SearchInput";
import UseCategory from "../../hooks/useCategory";
import { Badge } from "antd";
import { UseCart } from "../../context/cart";

const header = () => {
  const [auth, setAuth] = UseAuth()
  const [cart] = UseCart();
  const categories = UseCategory()
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary shadow">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand">Mega Mart</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="d-flex justify-content-center">
              <SearchInput />
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-light text-light">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link text-light">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link text-light">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-info dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        type="button"
                        to="/login"
                        onClick={handleLogout}
                      >
                        Logout
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        type="button"
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <Badge count={cart?.length} showZero offset={[10, -5]}>
                    Cart
                  </Badge>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default header;
