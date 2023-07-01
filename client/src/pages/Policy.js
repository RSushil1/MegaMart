import React from 'react'
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row d-flex justify-content-center mb-5" style={{ marginTop: "100px" }}>
        <div className="col-md-6 ">
          <img
            src="/image/contact.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>privacy policy</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy
