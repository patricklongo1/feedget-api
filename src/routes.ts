import express from 'express';
import nodemailer from 'nodemailer';

import Feedbacks from './schemas/Feedbacks';

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '5b34aed29d9e02',
    pass: '78546cea16daa4',
  },
});

routes.post('/api/feedbacks', async (req, res) => {
  try {
    const { type, comment, screenshot } = req.body;

    const feedbackCreated = await Feedbacks.create({
      type,
      comment,
      screenshot,
    });

    await transport.sendMail({
      from: 'Equipe Feedget <contato@feedget.com>',
      to: 'Patrick Longo <ck.longo@bol.com.br>',
      subject: 'Novo feedback',
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentario: ${comment}</p>`,
        `</div>`,
      ].join('\n'),
    });

    return res.status(201).json(feedbackCreated);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Internal server error');
  }
});
