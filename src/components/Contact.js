import React, { useRef, useState } from "react";

import { Send_Email } from "./SendEmail";
import styles from "./css/contact.module.css";

function Contact() {
  const form = useRef();
  const [error, setError] = useState(false);

  const checkEmptyInputs = () => {
    if (document.querySelector("[data-contact-name]").value === "") {
      document.querySelector("[data-contact-name]").style.border =
        "border: 2px solid red;";
      setTimeout(() => {
        document.querySelector("[data-contact-name]").style.border =
          "border: 2px solid rgb(42, 193, 42);;";
      }, 1000);
    }
    if ((document.querySelector("[data-contact-email]").value = "")) {
      document.querySelector("[data-contact-email]").style.border =
        "border: 2px solid red;";
      setTimeout(() => {
        document.querySelector("[data-contact-email]").style.border =
          "border: 2px solid rgb(42, 193, 42);;";
      }, 1000);
    }
    if ((document.querySelector("[data-contact-msg]").value = "")) {
      document.querySelector("[data-contact-msg]").style.border =
        "border: 2px solid red;";
      setTimeout(() => {
        document.querySelector("[data-contact-msg]").style.border =
          "border: 2px solid rgb(42, 193, 42);;";
      }, 1000);
    }
  };

  const clearContactForm = () => {
    document.querySelector("[data-contact-name]").value = "";
    document.querySelector("[data-contact-email]").value = "";
    document.querySelector("[data-contact-msg]").value = "";
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    checkEmptyInputs();
    // document
    //   .querySelector("[data-contact-submit]")
    //   .setAttribute("disabled", "");

    Send_Email(form);
    clearContactForm();
    // if (response.result === "success") {
    //   setError(false);
    //   clearContactForm();
    // } else {
    //   setError(true);
    // }
    // document.querySelector("[data-contact-submit]").removeAttribute("disabled");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>CONTACT</div>

      <form
        ref={form}
        action="amankumar.com/contact"
        onSubmit={sendEmail}
        className={styles.form}
      >
        <label className={styles.label}>Name</label>
        <input
          className={styles.inputFields}
          data-contact-name
          type="text"
          name="from_name"
          required
        />
        <label className={styles.label}>Email</label>
        <input
          className={styles.inputFields}
          data-contact-email
          type="email"
          name="from_email"
          required
        />
        <label className={styles.label}>Message</label>
        <textarea
          className={styles.inputFields}
          data-contact-msg
          name="message"
        />
        <input
          className={styles.submitBtn}
          data-contact-submit
          type="submit"
          value="Send"
          disabled={false}
          required
        />
        {error && (
          <div className={styles.error}>
            Error occurred while send your message.
            <br />
            Please Try Again
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
