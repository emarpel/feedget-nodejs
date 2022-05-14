import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
     host: "ciclone.dvinesweb.com.br",
     port: 465,
     secure: true,
     auth: {
          user: "feedback@budaweb.com.br	",
          pass: "key!feedback"
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