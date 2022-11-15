import { text } from 'express';
import nodemailer from 'nodemailer'

const emailOlvidePassword = async(datos) => {
    const transporter  = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAI_PASS
        }
      });
    const { email, nombre, token } = datos

    const info = await transporter.sendMail({
        from: "ADMINISTRADOR DE PACIENTES VETERINARIA",
        to: email, 
        subject: 'Reestablece tu password',
        text: 'Reestablece tu password en SIX PET SHOP!!!1',
        html:`<p>Hola: ${nombre}, Reestablece tu password en Six Pet Shop </p>
            <p> Entra al siguiente enlace para cambiar tu password
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablece tu password</a></p>

            <p> Si no fuiste tú, ignora este mensaje</p>


        `
    })
    console.log(datos);
    console.log('mensaje enviado : %s', info.messageId);
}


export default emailOlvidePassword