import emailjs from "@emailjs/browser";

export const Send_Email = (form) => {
  emailjs
    .sendForm(
      "service_3nr5seq",
      "template_9cpstoc",
      form.current,
      "K4VqgmH_UhECw9TBq"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("Email sent");
        return {
          result: "success",
          message: result.text,
        };
      },
      (error) => {
        console.log(error.text);
        return {
          result: "error",
          message: error.text,
        };
      }
    );
};
