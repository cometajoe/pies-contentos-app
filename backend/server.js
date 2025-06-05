// backend/server.js
import dotenv from 'dotenv';
dotenv.config(); // Initialize dotenv

import express from 'express';
import cors from 'cors';
import { Resend } from 'resend'; // Correct import for Resend

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend with your API Key from .env
const resend = new Resend(process.env.RESEND_API_KEY);

// Endpoint to send emails
app.post('/api/send-email', async (req, res) => {
    const { name, email, reason, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Nombre, email y mensaje son requeridos.' });
    }

    // Construct the email body correctly
    const emailHtmlBody = `
      <h1>Nuevo Mensaje del Formulario de Contacto</h1>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Motivo:</strong> ${reason || 'No especificado'}</p>
      <hr>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Este correo fue enviado desde el formulario de contacto de la web Pies Contentos.</em></p>
    `;

    const emailTextBody = `
      Nuevo Mensaje del Formulario de Contacto:
      Nombre: ${name}
      Email: ${email}
      Motivo: ${reason || 'No especificado'}
      Mensaje:
      ${message}

      Este correo fue enviado desde el formulario de contacto de la web Pies Contentos.
    `;

    const subject = `Nuevo Contacto: ${reason || 'General'} - De: ${name}`;

    try {
        // Use await for the asynchronous email sending operation
        const { data, error } = await resend.emails.send({
            from: 'Pies contentos <onboarding@resend.dev>', // e.g., "Pies Contentos Web <noreply@yourdomain.com>"
            to: [process.env.RECIPIENT_EMAIL], // Array of recipient emails
            subject: subject,
            html: emailHtmlBody,
            text: emailTextBody, // Optional: include a plain text version
            reply_to: email, // Set the user's email as the reply-to address
        });

        if (error) {
            console.error('Error al enviar el email con Resend (desde respuesta Resend):', error);
            return res.status(400).json({ success: false, message: `Error al enviar el mensaje: ${error.message || 'Error desconocido de Resend'}` });
        }
        
        console.log('Email enviado exitosamente via Resend. ID:', data ? data.id : 'N/A');
        res.status(200).json({ success: true, message: 'Mensaje enviado correctamente.' });

    } catch (error) { // Catching other potential errors (e.g., network issues with Resend call itself)
        console.error('Error general al intentar enviar el email con Resend:', error);
        res.status(500).json({ 
            success: false, 
            message: `Error interno del servidor al enviar el mensaje: ${error.message || 'Error desconocido'}` 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});