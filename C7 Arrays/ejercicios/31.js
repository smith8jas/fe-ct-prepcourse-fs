function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  // return texto.split('').reverse().join('');

  let splitText = texto.split('');

  console.log(splitText);


  let invertText = splitText.reverse();

  console.log(invertText);

  let newText = invertText.join('');

  console.log(newText);

  return newText;

}

console.log(invertirTexto('Jason'));

module.exports = invertirTexto;
