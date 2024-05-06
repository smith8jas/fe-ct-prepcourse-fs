function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:

  newObject = {
    nombre: nombre,
    email: email,
    password: password
  }
  return newObject;
}

module.exports = nuevoUsuario;
