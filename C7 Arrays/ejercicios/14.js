function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  let arrayContado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      arrayContado.push(array[i]);
    }
  }
  return arrayContado.length;
}

module.exports = contarElementosMayoresA10;
