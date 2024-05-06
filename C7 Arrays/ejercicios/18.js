function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  let sumaNotas = 0
  let contador = 0

  for (let i = 0; i < resultadosTest.length; i++) {
    sumaNotas = sumaNotas + resultadosTest[i]
    contador = contador + 1
  }

  let promedioNotas = sumaNotas / contador;

  // return sumaNotas / contador;
  return promedioNotas;
}

module.exports = promedioResultadosTest;
