import {EmailTemplete} from '@/app/components/EmailTemplete.jsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

 async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'yagya@resend.dev',
      to: ['yagyadeepahirwar@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplete({ firstName: 'John' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

export default POST;