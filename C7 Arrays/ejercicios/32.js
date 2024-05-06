function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  console.log(string);

  let splitString = string.split('');
  
  console.log(splitString);

  let reverseString = splitString.slice().reverse();

  console.log(reverseString);

 /*
 for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] !== reverseString[i]) {
      return false;
    }
   }
  return true;
  */

  if (splitString.join('') === reverseString.join('')) {
    return true;
  } else {
    return false;
  }




  /*  THIS DOES NOT WORK --- BUT THERE MUST BE A WAY TO DO IT WITH TWO FOR LOOPS
  for (let i = 0; i < splitString.length; i++) {
    for (let j = 0; j < reverseString.length; j++) {
      if (splitString[i] !== reverseString[j]) {
        return false;
      }
    }
  }
  */
   
}

console.log(esPalindromo('ana'));

module.exports = esPalindromo;