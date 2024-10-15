import ENVIRONMENT from "../config/environment.config.js"
import User from "../models/user.model.js"
import ResponseBuilder from "../utils/builders/responseBuilder.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmail } from "../utils/mail.util.js"

export const registerUserController = async (req, res) => {
    try{
        const {name, email, password} = req.body
        const existentUser = await User.findOne({email: email})
        console.log({existentUser})
        if(existentUser){
            const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(400)
            .setMessage('Bad Request')
            .setPayload(
                {
                    detail: 'El email ya esta en uso!'
                }
            )
            .build()
            return res.status(400).json(response)
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const verificationToken = jwt.sign({email: email}, ENVIRONMENT.JWT_SECRET, {
            expiresIn: '1d'
        })

        const url_verification = `http://localhost:${ENVIRONMENT.PORT}/api/auth/verify/${verificationToken}`
        await sendEmail({
            to: email,
            subject: 'Valida tu correo electrónico',
            html: `
            <h1>Verificación de correo electrónico</h1>
            <p>Da click en el botón de abajo para verificar</p>
            <a 
            style= "background-color: black; color: white; padding: 5px; border-radius: 5px;"
            href="${url_verification}"
            >Click aqui</a>
            `
        })
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken: verificationToken,
            emailVerified: false
        })
        await newUser.save()

        const response = new ResponseBuilder()
        .setOk(true)
        .setStatus(200)
        .setMessage('Created')
        .setPayload({})
        .build()
        res.status(200).json(response)
    }
    catch(error){
        console.error('Error al registrar el usuario', error)
        const response = new ResponseBuilder()
        .setOk(false)
        .setStatus(500)
        .setMessage('Internal server error')
        .setPayload(
            {
                detail: error.message
            }
        )
        .build()
        res.status(500).json(response)
    }
}

export const verifyMailValidationTokenController = async (req, res) => {
    try{
        const {verification_token} = req.params
        if(!verification_token){
            const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(400)
            .setPayload({
                'detail': 'Falta enviar token'
            })
            .build()
            return res.json(response)
        }

        //Verificamos la firma del token, debe ser la misma que mi clave secreta, eso asegura que este token sea emitido por mi servidor
        //Si fallara la lectura]/verificacion/expiracion hara un throw
        // La constante decoded tiene el payload de mi token
        const decoded = jwt.verify(verification_token, ENVIRONMENT.JWT_SECRET)
        // Busco al usuario en 
        const user = await User.findOne({email: decoded.email})
        if(!user){
            //Logica de error de not found
        }
        if(user.emailVerified){
            //Logica de email ya verificado
        }
        //En caso de pasar las validaciones
        user.emailVerified = true
        //user.verificationToken = undefined

        await user.save()
        const response = new ResponseBuilder()
        .setOk(true)
        .setMessage('Email verificado con exito')
        .setStatus(200)
        .setPayload({
            message: "Usuario validado"
        })
        .build()
        return res.json(response)
    }
    catch(error){
        console.error(error)
    }
}