function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   const randomElement = Math.floor(Math.random() * array.length);
   return array[randomElement];
}

module.exports = obtenerElementoAleatorio;
