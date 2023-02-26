import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    // client
    //   .create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));

    fetch("http://localhost:3011/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        setLoading(false);
        setIsFormSubmitted(true);
        setSubmittedMessage(res.body);
      })
      .catch((err) => {
        console.log(err);
        setSubmittedMessage(err);
      });
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedMsg, setSubmittedMessage] = useState(null);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: "contact",
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   client
  //     .create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <h2 className="head-text">Contact Me for Job</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:cruzlegacy96@gmail.com" className="p-text">
            cruzlegacy96@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+65 9241-9759" className="p-text">
            +65 9241-9759
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          {/* <form onSubmit={}> */}
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your name"
              name="username"
              value={username}
              {...register("username", {
                required: true,
                maxLength: 20,
                // pattern: /^[A-Za-z]+$/i,
              })}
              onChange={handleChangeInput}
            />
          </div>
          {errors?.username?.type === "required" && (
            <p className="p-text errText">Your name is required</p>
          )}
          {errors?.username?.type === "maxLength" && (
            <p className="p-text errText">
              Your name cannot exceed 20 characters
            </p>
          )}
          {/* {errors?.name?.type === "pattern" && (
            <p className="p-text errText">Alphabetical characters only</p>
          )} */}
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your email"
              name="email"
              value={email}
              {...register("email", {
                required: true,
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              })}
              onChange={handleChangeInput}
            />
          </div>
          {/* {errors?.email?.type === "required" && (
            <p className="p-text errText">Your email is required</p>
          )} */}
          {errors?.email?.type === "pattern" && (
            <p className="p-text errText">Invalid Email</p>
          )}
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              {...register("message", { required: true })}
              onChange={handleChangeInput}
            />
          </div>

          {errors?.message?.type === "required" && (
            <p className="p-text errText">Your message is required</p>
          )}
          <button
            type="button"
            className="p-text"
            onClick={handleSubmit(onSubmit)}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div className="m-3">
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
      <button
        type="button"
        className=" btn"
        onClick={() =>
          window.open(
            "https://files.chuachinhong.com/CHUA_CHIN HONG_CV Site.pdf",
            "_blank"
          )
        }
      >
        Get My CV
      </button>
    </>
  );
};

// export default AppWrap(
//   MotionWrap(Footer, "app__footer"),
//   "contact",
//   "app__whitebg"
// );

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
