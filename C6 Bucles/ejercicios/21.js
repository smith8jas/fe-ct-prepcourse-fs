function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  while (numero > 1) {
    // console.log(numero % 2);
    if (numero % 2 !== 0) {
     // console.log(numero)
      return false;
    }
   numero = numero / 2;
    console.log(numero);
  }
  return true;
}

console.log(esPotenciaDeDos(40));




module.exports = esPotenciaDeDos;
