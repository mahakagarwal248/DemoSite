var nodemailer = require("nodemailer");
const EMAIL = process.env.EMAIL_ID;
const PASS = process.env.EMAIL_PASS;
const sendingmail = (req, res, next) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });

  var mailOptions = {
    from: "easycoding2000@gmail.com",
    to: ["bhomickyadav786@gmail.com", "mahakagarwal248@gmail.com"],
    subject: "Sending Email using Node.js",
    text: `username:${req.body.name}\n userid:${req.body.email}\n usermsg:${req.body.msg}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.json({ err: error.message, result: false });
    } else {
      console.log("sending");
      return res.json({
        result: "send",
        resultinfo: info.response,
        result: true,
      });
    }
  });
};
module.exports = sendingmail;
