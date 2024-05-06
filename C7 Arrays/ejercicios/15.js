function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  
  let mayor = array[0];
  let indexOfLargest = 0;

  for (let i = 0; i < array.length; i++) {

    console.log('Loop Variable', i);
    console.log('Value at Array Index', array[i]);

    if (array[i] > mayor) {
      mayor = array[i];
      indexOfLargest = i;

      console.log(indexOfLargest);

    }
  }
  return indexOfLargest;
}

encontrarIndiceMayor([5, 8, 4, 5, 2]);

module.exports = encontrarIndiceMayor;
