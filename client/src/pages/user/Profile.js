import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import { UseAuth } from "../../context/auth";
import { toast } from "react-toastify";
import axios from "axios";
const Profile = () => {
  //context
  const [auth, setAuth] = UseAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "http://localhost:4000/api/v1/auth/profile",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="container-fluid m-3 p-3 dashboard">
      <div className="row">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-8">
          <div className="form-container" style={{ marginTop: "-40px" }}>
            <form
              className="border p-5 shadow bg-white m-3"
              onSubmit={handleSubmit}
            >
              <h1 className="heading p-2 text-center">Update Profile</h1>
              <div className="row g-2 mb-2">
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      id="floatingInputGrid1"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputGrid">Name</label>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                      id="floatingInputGrid2"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputGrid">Address</label>
                  </div>
                </div>
              </div>
              <div className="row g-2 mb-2">
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                      id="floatingInputGrid3"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputGrid">Phone Number</label>
                  </div>
                </div>
              </div>
              <div className="row g-2 mb-2">
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="floatingInputGrid5"
                      placeholder="name@example.com"
                      disabled
                    />
                    <label htmlFor="floatingInputGrid">Email</label>
                  </div>
                  <div className="form-floating">
                    <div className="form-floating">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="floatingInputGrid6"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInputGrid">Password</label>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-sm">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
