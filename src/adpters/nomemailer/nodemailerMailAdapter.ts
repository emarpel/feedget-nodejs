import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
     host: "smtp.mailtrap.io",
     port: 2525,
     auth: {
     user: "636d2fa8c1b278",
     pass: "7e548f0c98463a"
     }
 });

export class NodemailerMailAdapter implements MailAdapter {
     async sendMail({subject, body}: SendMailData) {
          await transport.sendMail({
               from: 'David Gois <emarpel@gmail.com>',
               to: 'David Gois <emarpel@gmail.com>',
               subject,
               html: body,
          });
     };
}