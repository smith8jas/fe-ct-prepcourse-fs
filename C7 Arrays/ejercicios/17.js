function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let sumOfElements = 0;

  for (let i = 0; i < arrayOfNums.length; i++) {
    sumOfElements = sumOfElements + arrayOfNums[i];
  }
  return sumOfElements;
}

module.exports = agregarNumeros;
