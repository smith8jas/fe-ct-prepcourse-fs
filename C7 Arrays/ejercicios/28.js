function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:

  /* 
  if (typeof arr === Array && arr.length >= 1) {
    return true;
  }
  return false;
  */

  if (Array.isArray(arr) && arr.length >= 1) {
    return true;
  }
  return false;

}


module.exports = esArrayNoVacio;