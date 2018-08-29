import mailgunLoader from 'mailgun-js';
let mailgun = mailgunLoader({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: 'sandboxri3ro3irsaenfwo3nf.mailgun.org'
});

function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content // this key can either be html or text.  Text is plain text
    };

    return mailgun.messages().send(data);
}

export { sendEmail };
