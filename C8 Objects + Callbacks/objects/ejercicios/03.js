const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

  /*
  let newObject = objeto[propiedad] = valor;
  return newObject;
  */

  objeto[propiedad] = valor;
  return objeto;
};

module.exports = agregarNuevaPropiedad;
