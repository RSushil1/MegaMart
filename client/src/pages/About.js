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
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
