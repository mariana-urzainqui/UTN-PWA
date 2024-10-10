import dotenv from 'dotenv'

//Internamente va a leer el archivo .env y guardara los valores en process.env(una variable global)
dotenv.config()

const ENVIRONMENT = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET
}

export default ENVIRONMENT