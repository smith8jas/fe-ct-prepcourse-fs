function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   let sum = 0;

   for (let i = 0; i < arrayOfNumbers.length; i++) {
      sum = sum + arrayOfNumbers[i];
   }

   cb(sum);

}

module.exports = sumarArray;
