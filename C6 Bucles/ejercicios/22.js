function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

 /*
 
 for (let i = 0; i < 8; i++) {
    num = num + 5;
  }
  return num;

  */

  let i = 0;

  do {
    num = num + 5
    i++
  } while (i < 8)

  return num;

}

doWhile(0)
// console.log(doWhile(0))

module.exports = doWhile;