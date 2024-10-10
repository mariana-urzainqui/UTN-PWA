1. En la carpeta que vamos hacer el proyecto de nodeJS
Para crear el package.json escribir en la consola:

npm init -y 

2. Crear archivo index.js manualmente

3. Crear node modules y package-lock.json tmb instalando a la dev dependencia nodemon

npm i -D nodemon

4. Agregar  "dev": "nodemon index.js" a scripts en el package.json
"scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
Despues de esto en la terminal puedo escribir "npm run dev" y ejecutara el index.js en la consola

