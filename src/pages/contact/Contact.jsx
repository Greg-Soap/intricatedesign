/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.scss";
import SuccessfulNotification from "../../components/notification/SuccessfulNotification";
import Mail from "../../assets/images/envelope-open-text.svg";
import Phone from "../../assets/images/phone.svg";
import Address from "../../assets/images/map-pin.svg";
import Facebook from "../../assets/images/Facebook.png";
import Twitter from "../../assets/images/Twitter.png";
import Instagram from "../../assets/images/Instagram.png";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Intricate Design",
    message: "",
    reply_to: "laura.ogunsola@intricatedesignspaces.com",
    from_email: "",
    subject: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_uj89d5n", "template_o468gn3", toSend, "_KkPJ9bejYGK0Ci_U");

    SuccessfulNotification("Mail Sent Successfully");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact_container">
      <div className="contact_wrapper">
        <div className="contact_left">
          <div className="content_body">
            <div className="contact_group">
              <img src={Phone} alt="phone" />
              <h2>+234-8131913005</h2>
            </div>
            <div className="contact_group">
              <img src={Mail} alt="mail" />
              <h2>intricatedesignspaces@gmail.com</h2>
            </div>
            <div className="contact_group">
              <img src={Address} alt="address" />
              <h2>6a UBA road chervon drive bera estate</h2>
            </div>
          </div>
          <div className="content_social">
            Our Socials: <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>

        <div className="contact_right">
          <h2 className="content_heading">GET IN TOUCH</h2>
          <h1 className="content_title">
            Fill the form to <span>reach out</span> to us.
          </h1>
          <form className="contact_form" onSubmit={onSubmit}>
            <label className="form_label">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              name="from_name"
              value={toSend.from_name}
              className="form_control"
              onChange={handleChange}
            />
            <label className="form_label">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              name="from_email"
              value={toSend.from_email}
              className="form_control"
              onChange={handleChange}
            />
            <label className="form_label">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={toSend.subject}
              className="form_control"
              onChange={handleChange}
            />
            <label className="form_label">Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              type="text"
              cols="30"
              rows="10"
              value={toSend.message}
              className="form_control"
              onChange={handleChange}
            />
            <button type="submit" className="contact_btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
