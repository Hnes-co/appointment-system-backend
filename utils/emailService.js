const nodemailer = require('nodemailer'); 
const credentials = require( '../email-credentials.json');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: credentials.email,
    pass: credentials.password
  }
});

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};

function sendEmail(email, id, time, duration) {
  transporter.sendMail({
    from: credentials.email,
    to: email,
    subject: 'Appointment confirmation',
    text: 
    ` Your appointment has been confirmed.\n\n
      Appointment code: ${id}\n
      Date and time: ${new Date(time).toLocaleString([], options)}\n
      Duration: ${duration} min\n\n
    `
  }, 
  (error, info) => {
    if(error) {
      console.log(error);
    }
    else {
      console.log("Confirmation email sent: " + info.response)
    }
  });
}