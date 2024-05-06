const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  let counter = 0;

    for (let key in objeto) {
      counter = counter + 1
    }
    
    return counter;
};

module.exports = contarPropiedades;
