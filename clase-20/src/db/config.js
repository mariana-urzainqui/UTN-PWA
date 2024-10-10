import mongoose from "mongoose";
import ENVIRONMENT from "../config/environment.config.js";

mongoose.connect(ENVIRONMENT.DB_URL)
.then(
    () => {
        console.log('Conexion exitosa con la DB!')
    }
)
.catch(
    (error) => {
        console.error('Error de conexion')
    }
)

export default mongoose