function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    if (array[0] !== array[i]) {
      return false;
    }
  }
  return true;
}

module.exports = todosIguales;
