function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  
  let product = 1

  for (let i = a; i <= b; i++) {
    console.log(i, product) // test
    product = product * i
  } 
  if (product === -0) {
    return 0;
  }
  return product;
}
 
console.log(productoEntreNúmeros(-5, 5));

module.exports = productoEntreNúmeros;