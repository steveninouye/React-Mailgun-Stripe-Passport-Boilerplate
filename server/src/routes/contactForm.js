import { Router } from 'express';
import { sendEmail } from '../utils/mail';

let router = Router();

router.post('/', (req, res, next) => {
    let messageBody = `Name: ${req.body.name}
    Email: ${req.body.email}
    Message: ${req.body.message}`;
    sendEmail(
        'email1@hotmail.com',
        'email2@gmail.com',
        'New Contact Form Submission',
        messageBody
    )
        .then((res) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            next(err);
        });
});
