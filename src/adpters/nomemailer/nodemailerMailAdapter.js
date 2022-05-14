"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: "emarpel@gmail.com",
        pass: "Bud@3105"
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'David Gois <emarpel@gmail.com>',
            to: 'David Gois <emarpel@gmail.com>',
            subject,
            html: body,
        });
    }
    ;
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
