import React from 'react'

const About = () => {
  return (
    <div className="d-flex justify-content-center mb-5 bg-primary p-2 text-dark bg-opacity-25" style={{ marginTop: "100px" }} >
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/image/l.png"
            alt="contactus"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-md-6">
          <h1>MegaMart E-Commerce MERN FullStack Website</h1>
          <b>Project made by Sushil Singh Rathore</b>
        </div>
      </div>
    </div>
  )
}

export default About
