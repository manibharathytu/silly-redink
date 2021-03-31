const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")
const msg = {
  to: 'manibharathytu5194@gmail.com', // Change to your recipient
  from: 'bharathybot@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })