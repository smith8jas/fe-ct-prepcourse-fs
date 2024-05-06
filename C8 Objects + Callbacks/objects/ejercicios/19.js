function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  objetoMuchosUsuarios.forEach(user => user.esPremium = true);

  
  return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;
