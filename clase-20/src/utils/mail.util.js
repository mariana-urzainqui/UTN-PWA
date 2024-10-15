import transporter from "../config/transporter.config.js"

const sendEmail = async (options) => {
    try{
        let response = await transporter.sendMail(options)
    }
    catch(error){
        // Para poder trackear mejor al error
        console.error('Error al enviar mail:', error)
        // Para que la funcion que invoque a esta funcion tambien le salte el error
        throw error
    }
}

export { sendEmail }