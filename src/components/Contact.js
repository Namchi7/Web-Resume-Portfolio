import React, { useEffect, useRef, useState } from "react";

import { useDocumentTitle } from "./hooks/setDocumentTitle";

import { Send_Email } from "./SendEmail";
import styles from "./css/contact.module.css";

function Contact() {
  const form = useRef();
  const formName = useRef();
  const formEmail = useRef();
  const formMsg = useRef();
  const [error, setError] = useState(false);
  const [emailStatusMsg, setEmailStatusMsg] = useState("");

  const [document_title, setDocumentTitle] = useDocumentTitle("Aman Kumar");

  const checkEmptyInputs = () => {
    if (document.querySelector("[data-contact-name]").value === "") {
      document.querySelector("[data-contact-name]").style.border =
        "border: 2px solid red;";
      setTimeout(() => {
        document.querySelector("[data-contact-name]").style.border =
          "border: 2px solid rgb(42, 193, 42);;";
      }, 1000);
    }
    if (document.querySelector("[data-contact-email]").value === "") {
      document.querySelector("[data-contact-email]").style.border =
        "border: 2px solid red;";
      setTimeout(() => {
        document.querySelector("[data-contact-email]").style.border =
          "border: 2px solid rgb(42, 193, 42);;";
      }, 1000);
    }
    if (document.querySelector("[data-contact-msg]").value === "") {
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

  const showEmailStatusMsg = (res) => {
    const emailStatusDiv = document.querySelector("[data-email-status]");
    emailStatusDiv.style.display = "block";
    if (res === "success") {
      setEmailStatusMsg("Email Sent Successfully.");
    } else {
      setEmailStatusMsg(`Error Sending The Email!\nPlease Try Again.`);
    }

    setTimeout(() => {
      emailStatusDiv.style.display = "none";
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    checkEmptyInputs();
    // document
    //   .querySelector("[data-contact-submit]")
    //   .setAttribute("disabled", "");

    // Send_Email(form);
    const formData = {
      name: formName.current.value,
      email: formEmail.current.value,
      msg: formMsg.current.value,
    };

    fetch(
      `${process.env.REACT_APP_MAIL_URL}?email=${formData.email}&name=${formData.name}&msg=${formData.msg}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("Success");
          showEmailStatusMsg("success");
          setError(false);
          clearContactForm();
        } else {
          showEmailStatusMsg("failure");
          setError(true);
        }
      });

    clearContactForm();
    // if (resData.status === "success") {
    //   setError(false);
    //   clearContactForm();
    // } else {
    //   setError(true);
    // }
    // document.querySelector("[data-contact-submit]").removeAttribute("disabled");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setDocumentTitle("Aman Kumar | Contact");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>CONTACT</div>

      <form
        ref={form}
        // action=""
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
          ref={formName}
        />
        <label className={styles.label}>Email</label>
        <input
          className={styles.inputFields}
          data-contact-email
          type="email"
          name="from_email"
          required
          ref={formEmail}
        />
        <label className={styles.label}>Message</label>
        <textarea
          className={styles.inputFields}
          data-contact-msg
          name="message"
          ref={formMsg}
        />
        <input
          className={styles.submitBtn}
          data-contact-submit
          type="submit"
          value="Send"
          disabled={false}
        />
        <div
          style={{ display: "none" }}
          className={styles.emailStatus}
          data-email-status
        >
          Error Sending The Email! <br />
          Please Try Again.
          {emailStatusMsg}
        </div>
        {/* {error && (
          <div className={styles.error}>
            Error occurred while send your message.
            <br />
            Please Try Again
          </div>
        )} */}
      </form>
    </div>
  );
}

export default Contact;
