import React from "react";
import "./contact.css";
import {
  FaEnvelope,
  FaFacebook,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Corrected the typo here

    emailjs
      .sendForm(
        "service_n8m450b",
        "template_mnzm3pn",
        e.target,
        "s-QLIM5MH8SDmZNvB"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy</h3>
          <p className="contact__description">
            "Don't hesitate to reach out! I’m always excited to explore new
            projects, share creative ideas, or discuss opportunities where I can
            contribute to bringing your vision to life."
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelope className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">rijalman.sr@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+62 82217364161</h4>
              </div>
            </div>
          </div>

          <div className="contact__social">
            <a
              href="https://github.com/Iyalodon"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/samsurijalman/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://web.facebook.com/samsu.rijal.315"
              className="contact__social-link"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/rijalman.sr/"
              className="contact__social-link"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name_from"
                placeholder="name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="email_from"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="subject"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Massage"
              className="form__control textarea"
              name="message"
            ></textarea>
          </div>
          <button type="submit" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
