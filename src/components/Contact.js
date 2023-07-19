import React, { useRef } from "react";

import { Send_Email } from "./SendEmail";
import styles from "./css/contact.module.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    Send_Email(form);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>CONTACT</div>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label className={styles.label}>Name</label>
        <input className={styles.inputFields} type="text" name="from_name" />
        <label className={styles.label}>Email</label>
        <input className={styles.inputFields} type="email" name="from_email" />
        <label className={styles.label}>Message</label>
        <textarea className={styles.inputFields} name="message" />
        <input className={styles.submitBtn} type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
