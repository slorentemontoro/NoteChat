const bcrypt = require('bcrypt'); 




const encriptar = async function encriptar(contraseña) {
  const salt = 10; //Genera el tipo de algortimo para la encriptación
  const password = await bcrypt.hash(contraseña, salt); //Se encarga de encriptar la contraseña

  return password;
}

module.exports={
    encriptar
}