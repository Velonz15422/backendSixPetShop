import { text } from 'express';
import nodemailer from 'nodemailer'

const emailRegistro = async(datos) => {
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
        subject: 'Comprueba tu cuenta',
        text: 'Comprueba tu cuenta en SIX PET SHOP!!!1',
        html:`<p>Hola: ${nombre}, comprueba tu cuenta en Six Pet Shop </p>
            <p>Casi todo está listo, entra al siguiente enlace para autenticar tu cuenta
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}"> Comprobar cuenta </a></p>

            <p> Si no fuiste tú, ignora este mensaje</p>


        `
    })
    console.log(datos);
    console.log('mensaje enviado : %s', info.messageId);
}


export default emailRegistro