function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:


  if (numeros.length === 0) {
    return null;
  }

  let counter = numeros[0];

  for (let i = 1; i < numeros.length; i++) {

    console.log(i);

    if (numeros[i] === counter + 1) {
      counter = numeros[i];
    }
    else {
      return counter + 1;
    }
  }
  return null;
}

  encontrarNumeroFaltante([1, 2, 3, 4, 6, 7, 8, 9]);

module.exports = encontrarNumeroFaltante;