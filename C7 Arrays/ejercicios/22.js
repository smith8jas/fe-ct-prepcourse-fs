function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let resultadosTabla = [];

  for (let i = 0; i <= 10; i++) {

    console.log(i);

    resultadosTabla.push(i * 6);
  }
  return resultadosTabla;
}

console.log(tablaDelSeis());


module.exports = tablaDelSeis;
