import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="ms-auto mt-3 login">
        <h1>
          <NavLink className="navbar-brand text-primary" to="/">
            <img
              src="/image/tl.png"
              alt="Logo"
              width={50}
              height={35}
              className="d-inline-block align-text-top ms-auto "
            />
            MegaMart
          </NavLink>
        </h1>
        <form
          className="border shadow w-25 p-4 m-2 bg-white"
          onSubmit={handleSubmit}
        >
          <div className="heading">
            <h2>Reset Password</h2>
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail11" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-sm"
              id="exampleInputEmail11"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail12" className="form-label">
              What is your fav Colour?
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control form-control-sm"
              id="exampleInputEmail12"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword13" className="form-label">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control form-control-sm"
              id="exampleInputPassword13"
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-sm btn-warning">
              Reset Password
            </button>
            <button type="button" className="btn btn-sm btn-info">
              <Link className="btn btn-sm btn-info" to="/login">Back to Login</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPasssword;
