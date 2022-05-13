import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
     host: "ciclone.dvinesweb.com.br",
     port: 465,
     auth: {
       user: "budaweb",
       pass: "key!budaweb"
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