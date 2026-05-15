"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ template, service, publicKey }) => {
  const form = useRef();

  console.log("Client:  " + template, service);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, publicKey).then(
      () => {
        alert("Message sent!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send");
      },
    );

    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="title">
        <span>Contact Form</span>
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="inputs">
          <input type="text" name="user_name" placeholder="Name" required />

          <input type="email" name="user_email" placeholder="Email" required />
        </div>

        <textarea name="message" placeholder="Message" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
