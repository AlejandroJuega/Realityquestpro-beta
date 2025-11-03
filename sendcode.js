import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { to, code } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "realityquestpro@gmail.com",
      pass: "TU_APP_PASSWORD"
    }
  });

  await transporter.sendMail({
    from: '"Reality Quest PRO" <realityquestpro@gmail.com>',
    to,
    subject: "Tu código de verificación - Reality Quest PRO",
    text: `Tu código de verificación es: ${code}`
  });

  res.status(200).json({ success: true });
}
