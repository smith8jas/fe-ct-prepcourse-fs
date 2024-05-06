function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  /*
    let sum = 0;

    for (var property in objetoUsuario) {
      sum = sum + objetoUsuario[posts][likes];
    }
    return sum;
  */

  let sum = 0;

  for (var i = 0; i < objetoUsuario['posts'].length; i++) {
    sum = sum + objetoUsuario['posts'][i]['likes'];
  }

  return sum;
}


module.exports = sumarLikesDeUsuario;
