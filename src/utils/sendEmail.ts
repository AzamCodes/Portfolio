import emailjs from "emailjs-com";
export const sendEmail = (templateParams: {
  user_firstname: string;
  user_lastname: string;
  to_name: string;
  user_message: string;
  user_email: string;
}) => {
  console.log("Sending email with parameters:", templateParams);

  return emailjs
    .send(
      process.env.NEXT_PUBLIC_NEXREACT_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_NEXREACT_TEMPLATE_ID ?? "",
      templateParams,
      process.env.NEXT_PUBLIC_NEXREACT_PUBLIC_ID as string
    )
    .then((response) => {
      console.log("Email sent successfully:", response);
      alert("Thank you for your message!");
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      alert("Oops, something went wrong.");
    });
};
