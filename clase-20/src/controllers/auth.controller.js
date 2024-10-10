import ENVIRONMENT from "../config/environment.config.js"
import User from "../models/user.model.js"
import ResponseBuilder from "../utils/builders/responseBuilder.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
        res.status(201).json(response)
    }
    catch(error){
        console.error('Error al registrar el usuario', error)
        const response = new ResponseBuilder()
        .setOk(false)
        .setStatus(500)
        .setMessage('Internal server error')
        .setPayload(
            {
                detail: error.mensaje
            }
        )
        .build()
        res.status(500).json(response)
    }
}

const resultado = bcrypt.compareSync('pepe123', '$2b$10$jUn1/LAxlrENBC/TT0FkPezmG/RSLHRxxQa8UfBvl/O0zvadXPQdq')
console.log({resultado})