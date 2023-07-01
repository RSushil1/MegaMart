import React from "react";
import { NavLink, Link } from "react-router-dom";
import { UseAuth } from "../../context/auth";
import { toast } from "react-toastify";
import SearchInput from "../Form/SearchInput";
import UseCategory from "../../hooks/useCategory";
import { Badge } from "antd";
import { UseCart } from "../../context/cart";

const header = () => {
  const [auth, setAuth] = UseAuth();
  const [cart] = UseCart();
  const categories = UseCategory();
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
      <nav className="navbar navbar-expand-lg bg-primary shadow fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/image/tl.png"
              alt="Logo"
              width={50}
              height={35}
              className="d-inline-block align-text-top ms-auto "
            />
            MegaMart
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="d-flex justify-content-center">
                <SearchInput />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item text-dark" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item text-dark"
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
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-outline-success loginName"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="true"
                  >
                    {auth?.user?.name}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li>
                      <NavLink
                        className="dropdown-item text-dark"
                        type="button"
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item text-danger"
                        type="button"
                        to="/"
                        onClick={handleLogout}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <Badge count={cart?.length} showZero offset={[10, -5]}>
                  <img
                  src="/image/cart.png"
                  alt="Logo"
                  width={35}
                  height={25}
                  className="d-inline-block align-text-top ms-auto"
                />
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
