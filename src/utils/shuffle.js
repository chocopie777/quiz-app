//фунеция для перемешивания массива
export const shuffle = (array) => {
  let m = array.length, t, i;
  // Пока есть элементы для перемешивания
  while (m) {
    // Взять оставшийся элемент
    i = Math.floor(Math.random() * m--);
    // И поменять его местами с текущим элементом
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
