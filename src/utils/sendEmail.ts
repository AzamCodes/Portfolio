// import emailjs from "emailjs-com";
// export const sendEmail = (
//   templateParams: {
//     user_firstname: string;
//     user_lastname: string;
//     to_name: string;
//     user_message: string;
//     user_email: string;
//   },
//   clearForm: () => void
// ) => {
//   // console.log("Sending email with parameters:", templateParams);

//   return emailjs
//     .send(
//       process.env.NEXT_PUBLIC_NEXREACT_SERVICE_ID ?? "",
//       process.env.NEXT_PUBLIC_NEXREACT_TEMPLATE_ID ?? "",
//       templateParams,
//       process.env.NEXT_PUBLIC_NEXREACT_PUBLIC_ID as string
//     )
//     .then(() => {
//       // console.log("Email sent successfully:", response);
//       alert("Thank you for your message!");
//       clearForm();
//     })
//     .catch((error) => {
//       console.error("Email sending failed:", error);
//       alert("Oops, something went wrong.");
//     });
// };


// import emailjs from "emailjs-com";
// import { toast } from "react-hot-toast";

// // Load your EmailJS IDs from environment
// const SERVICE_ID           = process.env.NEXT_PUBLIC_NEXREACT_SERVICE_ID!;
// const ADMIN_TEMPLATE_ID    = process.env.NEXT_PUBLIC_NEXREACT_TEMPLATE_ID!;
// const AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_NEXREACT_AUTO_REPLY_TEMPLATE_ID!;
// const PUBLIC_KEY           = process.env.NEXT_PUBLIC_NEXREACT_PUBLIC_ID!;

// // Define the shape of your full notification params
// interface TemplateParams {
//   user_firstname: string;
//   user_lastname:  string;
//   to_name:        string;
//   user_message:   string;
//   user_email:     string;
// }

// // Cast to this when calling emailjs.send()
// type EmailParams = Record<string, unknown>;

// /**
//  * Sends an admin notification and an auto-reply in sequence.
//  * @param params      Full set of template params for the admin email.
//  * @param clearForm   Callback to reset your form fields.
//  */
// export const sendEmail = async (
//   params: TemplateParams,
//   clearForm: () => void
// ) => {
//   try {
//     // 1️⃣ Send to admin
//     await emailjs.send(
//       SERVICE_ID,
//       ADMIN_TEMPLATE_ID,
//       params as unknown as EmailParams,
//       PUBLIC_KEY
//     );

//     // 2️⃣ Send auto-reply back to user
//     const autoParams: EmailParams = {
//       user_firstname: params.user_firstname,
//       user_email:     params.user_email,
//     };
//     await emailjs.send(
//       SERVICE_ID,
//       AUTO_REPLY_TEMPLATE_ID,
//       autoParams,
//       PUBLIC_KEY
//     );

//     toast.success("Message sent! Check your inbox for confirmation.");
//     clearForm();
//   } catch (error) {
//     console.error("EmailJS error:", error);
//     toast.error("Oops—something went wrong.");
//   }
// };


// sendEmail.ts
// import emailjs from "@emailjs/browser";
// import { toast } from "react-hot-toast";

// // Initialize EmailJS with your Public Key
// emailjs.init(process.env.NEXT_PUBLIC_NEXREACT_PUBLIC_ID!);

// // Load your EmailJS IDs from environment
// const SERVICE_ID             = process.env.NEXT_PUBLIC_NEXREACT_SERVICE_ID!;
// const ADMIN_TEMPLATE_ID      = process.env.NEXT_PUBLIC_NEXREACT_TEMPLATE_ID!;
// const AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_NEXREACT_AUTO_REPLY_TEMPLATE_ID!;

// // Define the exact shape your templates expect
// interface AdminParams {
//   to_email:   string; 
//   from_name: string;
//   reply_to:   string;
//   to_name:    string;
//   message:    string;
// }

// interface AutoReplyParams {
//   user_firstname: string;
//   user_email:     string;
// }

// /**
//  * Sends an admin notification and then an auto-reply to the user.
//  * @param firstname  User's first name
//  * @param lastname   User's last name
//  * @param email      User's email address
//  * @param message    Message entered by the user
//  * @param clearForm  Callback to reset form fields on success
//  */
// export async function sendEmail(
//   firstname: string,
//   lastname:  string,
//   email:     string,
//   message:   string,
//   clearForm: () => void
// ) {
//   try {
//     const fullName = `${firstname} ${lastname}`;

//     // 1️⃣ Admin notification payload (must match your admin template variables)
//     const adminPayload: AdminParams = {
//       to_email:   process.env.NEXT_PUBLIC_ADMIN_EMAIL!, 
//       from_name: fullName,
//       reply_to:   email,
//       to_name:    "Azam Shaikh",
//       message:    message,
//     };
//     // Cast to satisfy EmailJS's Record<string, unknown> requirement
//     await emailjs.send(
//       SERVICE_ID,
//       ADMIN_TEMPLATE_ID,
//       adminPayload as unknown as Record<string, unknown>
//     );

//     // 2️⃣ Auto-reply payload (must match your auto-reply template variables)
//     const autoPayload: AutoReplyParams = {
//       user_firstname: firstname,
//       user_email:     email,
//     };
//     await emailjs.send(
//       SERVICE_ID,
//       AUTO_REPLY_TEMPLATE_ID,
//       autoPayload as unknown as Record<string, unknown>
//     );

//     toast.success("Message sent! Check your inbox for confirmation.");
//     clearForm();
//   } catch (err) {
//     console.error("EmailJS error:", err);
//     toast.error("Oops—something went wrong.");
//   }
// }


//******************************* */
//This is uses 2 template and 2 email request Next i will implement to get info and user get the confirmation in One call using CC (Carbon Copy)
// utils/sendEmail.ts
// import emailjs from "@emailjs/browser";
// import { toast } from "react-hot-toast";

// // 1) Initialize EmailJS with your public key
// emailjs.init(process.env.NEXT_PUBLIC_NEXREACT_PUBLIC_ID!);

// /**
//  * Send two emails:
//  *  • Admin notification (you)
//  *  • Auto‑reply (the user)
//  *
//  * @param firstname  User’s first name
//  * @param lastname   User’s last name
//  * @param email      User’s email address
//  * @param message    User’s message body
//  * @param clearForm  Callback to reset the form on success
//  */
// export async function sendEmail(
//   firstname: string,
//   lastname:  string,
//   email:     string,
//   message:   string,
//   clearForm: () => void
// ) {
//   try {
//     // ─── Admin notification ─────────────────────
//     // Matches your “admin” template variables: 
//     //   {{user_firstname}}, {{user_lastname}}, {{user_email}}, {{user_message}}
//     await emailjs.send(
//       process.env.NEXT_PUBLIC_NEXREACT_SERVICE_ID!,
//       process.env.NEXT_PUBLIC_NEXREACT_TEMPLATE_ID!,
//       {
//         user_firstname: firstname,
//         user_lastname:  lastname,
//         user_email:     email,
//         user_message:   message,
//       }
//     );

//     // ─── Auto‑reply to the user ──────────────────
//     // Matches your “auto‑reply” template variables:
//     //   {{user_firstname}}, and “To:” is set via {{email}} in the template editor
//     await emailjs.send(
//       process.env.NEXT_PUBLIC_NEXREACT_SERVICE_ID!,
//       process.env.NEXT_PUBLIC_NEXREACT_AUTO_REPLY_TEMPLATE_ID!,
//       {
//         user_firstname: firstname,
//         email:          email,
//       }
//     );

//     toast.success("Message sent! Check your inbox for confirmation.");
//     clearForm();
//   } catch (err: any) {
//     console.error("EmailJS error:", err.status, err.text || err);
//     toast.error("Oops—something went wrong.");
//   }
// }


//// This is Carbon Copy Helping 2 Birds with one Stone

// utils/sendEmail.ts
/// utils/sendEmail.ts
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

// init EmailJS
emailjs.init(process.env.NEXT_PUBLIC_NEXREACT_PUBLIC_ID!);

export async function sendEmail(
  firstname: string,
  lastname:  string,
  email:     string,
  message:   string,
  clearForm: () => void
) {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_NEXREACT_SERVICE_ID!,
      process.env.NEXT_PUBLIC_NEXREACT_AUTO_REPLY_TEMPLATE_ID!, // now “Combined Confirmation & Alert”
      {
        user_firstname: firstname,
        user_lastname:  lastname,
        email,                             // drives “To: {{email}}”
        user_message:   message,           // included in body
        admin_email:    process.env.NEXT_PUBLIC_ADMIN_EMAIL! // drives BCC
      }
    );

    toast.success("Message sent! You’ll both get notified.");
    clearForm();
  } catch (err: any) {
    console.error("EmailJS error:", err.status, err.text || err);
    toast.error("Something went wrong.");
  }
}
