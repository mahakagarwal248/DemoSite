import style from "../ContactForm/ContactForm.module.css";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router";
const ContactForm = () => {
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const handleonchange = (event, field) => {
    setFormData({
      ...FormData,
      [field]: event.target.value,
    });
  };
  const onsubmit = async () => {
    try {
      setloading(true);
      const { name, email, msg } = FormData;
      const responce = await fetch("/contactus/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, msg }),
      });

      const data = await responce.json();
      if (data.result) {
        alert("msg send....");
        setloading(false);
        navigate("/");
      } else {
        alert("there is some problem in network please retry");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [loading, setloading] = useState(false);
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <Navbar />
          <div className={style.firstdiv}>
            <h1 className={style.h1}>Get in Touch!</h1>
            <form method="POST" className={style.form}>
              <label htmlFor="name" className={style.label}>Full name:</label>
              <br />
              <input
                
                className={style.contactForm}
                type="text"
                placeholder="Enter Name"
                value={FormData.name}
                onChange={(event) => handleonchange(event, "name")}
                id="name"
                name="fname"
              />
              <br />
              <label htmlFor="email" className={style.label}>Email:</label>
              <br />
              <input
                className={style.contactForm}
                type="email"
                onChange={(event) => handleonchange(event, "email")}
                placeholder="example@gmail.com"
                value={FormData.email}
                id="email"
                name="lname"
              />
              <br />
              <label htmlFor="email" className={style.label}>Mobile Number:</label>
              <br />
              <input
                className={style.contactForm}
                type="phone"
                onChange={(event) => handleonchange(event, "email")}
                placeholder="Enter Mobile Number"
                value={FormData.email}
                id="email"
                name="lname"
              />
              <br />

              <label htmlFor="textarea" className={style.label}>Your query:</label>
              <br />
              <textarea
                className={style.mytextarea}
                onChange={(event) => handleonchange(event, "msg")}
                cols="2"
                placeholder="Enter your query here"
                id="textarea"
                rows="3"
                value={FormData.msg}
              ></textarea>
              <button
            className={style.button}
              onClick={() => {
                onsubmit();
              }}
            >
              Submit
            </button>
            </form>
            
          </div>
        </>
      )}
    </>
  );
};

export default ContactForm;
