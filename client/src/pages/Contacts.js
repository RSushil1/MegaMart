import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <div className="row d-flex justify-content-center mb-5" style={{ marginTop: "100px" }}>
        <div className="col-md-6 ">
          <img
            src="/image/contact.jpeg"
            alt="contact-us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@megamart.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
      </>
  );
};

export default Contact;
