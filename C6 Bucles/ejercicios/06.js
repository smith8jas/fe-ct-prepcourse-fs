function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  if (num >= 100 && num < 1000) {
    return true;
  } else {
    return false;
  }
}

module.exports = tieneTresDigitos;
