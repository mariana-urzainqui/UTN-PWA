const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

const validarNumero = (numero) => {
    return numero && !isNaN(numero)
}

const validarNombre = (nombre) => {
    return nombre && isNaN(nombre)
}

module.exports = {
    validarEmail,
    validarNumero,
    validarNombre
}