import { Resend } from "resend";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formdata: FormData) => {
  try {
    const message = formdata.get("message");
    const name = formdata.get("name");
    const SenderEmail = formdata.get("SenderEmail");

    if (!message || !name || !SenderEmail) {
      return { error: "All fields are required." };
    }

    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "godfreynyarko152@gmail.com",
      subject: `${name} From Contact Form.`,
      reply_to: SenderEmail.toString(),
      text: `Sender Email: ${SenderEmail} \n\n ${message}`,
    });

    console.log("Email Sent:", response);
    return redirect("/");
  } catch (error) {
    console.error("Resend API Error:", error);
    return { error: "Failed to send email." };
  }
};

