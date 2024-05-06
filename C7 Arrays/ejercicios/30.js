function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let emptyArray = [];

  for (let i = 0; i < numeros.length; i++) {
    if (emptyArray.includes(numeros[i])) {
      return numeros[i];
    }
    else {
      emptyArray.push(numeros[i]);
    }
  }

}

module.exports = encontrarElementoRepetido;