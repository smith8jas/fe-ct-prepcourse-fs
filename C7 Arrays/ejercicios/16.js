function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let multipliedArray = []

  for (let i = 0; i < array.length; i++) {
    multipliedArray.push(array[i] * i);
  }
  return multipliedArray;
}

module.exports = multiplicarElementosPorIndice;
