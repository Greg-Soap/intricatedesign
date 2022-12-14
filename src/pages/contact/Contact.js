import React, { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.scss";
import SuccessfulNotification from "../../components/notification/SuccessfulNotification";
import Rectangle from "../../assets/images/Rectangle.png";
import Mail from "../../assets/images/mail.png";
import Phone from "../../assets/images/phone.png";
import Address from "../../assets/images/locationpin.png";

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
    send("service_uj89d5n", "template_o468gn3", toSend, "_KkPJ9bejYGK0Ci_U")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    SuccessfulNotification("Mail Sent Successfully");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact_container">
      <div className="contact_wrapper">
        <div className="contact_left">
          <div className="content_heading">
            <img src={Rectangle} alt="rectangle" />
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="content_title">
            <h1>
              Fill the form to reach out to us<span>.</span>
            </h1>
          </div>
          <div className="content_body">
            <div className="contact_group">
              <img src={Mail} alt="mail" />
              <h2>Our EMail: laura.ogunsola@intricatedesignspaces.com</h2>
            </div>
            <div className="contact_group">
              <img src={Phone} alt="phone" />
              <h2>Our Phone number: 08131913005</h2>
            </div>
            <div className="contact_group">
              <img src={Address} alt="address" />
              <h2>Our Address: No 3, Nana Street, Benin City, Edo State.</h2>
            </div>
          </div>
        </div>

        <div className="contact_right">
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
            ></textarea>
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
