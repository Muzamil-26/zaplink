import nodemailer from "nodemailer";





// Configure the transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "Your Gmail", // Your email address
    pass: "yourAppPassword", // App password (not your Gmail password)
  },
});

// Main function to send email
export async function sendEmail(email, text, otp) {
  try {
    // Send mail with the transporter
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <' +'muzamilkhan.26.10thc@gmail.com'+ ">", // Sender address
      to: email, // Recipient's email address
      subject: "OTP send Succesfully ✔", // Subject line
      text: text+' '+otp, // Email body
    });

    console.log("Message sent: %s", info.messageId);
    return info.messageId;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
