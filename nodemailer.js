const nodemailer = require("nodemailer");

async function sendMail() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
        user: '',
        pass: ''
    }
  });

  let info = await transporter.sendMail({
    from: '@gmail.coml',
    to: "@hotmail.com",
    subject: "Este es un nuevo correo",
    text: "Hola",
    html: "<b>Hola</b>",
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

sendMail();
