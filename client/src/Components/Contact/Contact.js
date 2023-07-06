import React, { useState } from "react";
import "./Contact.css";
import { IoIosSend } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [servicetype, setServiceType] = useState();
  const [message, setMessage] = useState();

  const sendEmailInfo = () => {
    fetch("http://localhost:8080/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        servicetype,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });

          console.log(result.error);
        } else {
          toast.success(result.success, {
            position: toast.POSITION.TOP_RIGHT,
          });

          setName("");
          setEmail("");
          setServiceType("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade left>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="image-class">
              <img src="https://images.pexels.com/photos/326519/pexels-photo-326519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Form</h5>
              </div>
              <form>
                <div className="contact-form">
                  <label className="form-lebel">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Service you need</label>
                  <select
                    className="custom-select"
                    value={servicetype}
                    onChange={(e) => setServiceType(e.target.value)}
                  >
                    <option>Web Development</option>
                    <option>Mobile App Development</option>

                    <option>UI/UX Design</option>

                    <option>Digital Marketing</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Your Message</label>
                  <textarea
                    type="text"
                    maxLength="500"
                    className="form-control"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="button-submit" onClick={sendEmailInfo}>
                  <p>
                    Send <IoIosSend size={20} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>

      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default Contact;
