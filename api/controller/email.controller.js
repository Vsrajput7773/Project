// third party email api
import nodemailer from 'nodemailer';

var sendMail = (email,password)=>{

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rvishal5797@gmail.com',
    pass: 'byydvosrixktwbgp'
  }
});

var mailOptions = {
  from: 'rvishal5797@gmail.com',
  to: email,
  subject: "Verification mail Decoration.com",
  html: "<h1>welcom to decoration.com</h1><p>you have successfully register to our site,your login credentials ar attached below</p><h3>Username :"+email+"</h3><h3>Password :"+password+" </h3><h1>click on the link below to verify your account</h1>http://localhost:3000/verifyuser/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
export default sendMail;