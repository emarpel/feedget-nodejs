import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
     host: "smtp.gmail.com",
     service: "gmail",
     port: 465,
     secure: true,
     auth: {
          user: "emarpel@gmail.com",
          pass: "Bud@3105"
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