//Дан массив состоящий из названий фильмов,
//выполните перебор массива с выводом в консоль названия каждого фильма

let arrMovies = [
  "Iron Man",
  "Thor",
  "Ant-Man",
  "Doctor Strange",
  "Avengers",
  "Spider-Man",
];

for (let i = 0; i < arrMovies.length; i++) {
  console.log(arrMovies[i]);
}

//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let arrCars = ["VAZ", "GAZ", "MAZ", "BelAZ"];

let strCars = arrCars.join(" ");
console.log(strCars);

let arrCarsAgain = strCars.split(" ");
console.log(arrCarsAgain);

//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let arrNames = ["Vlad", "Boris", "Alex", "Serg"];

let arrNamesHello = arrNames.map(function (name) {
  return name + " " + "Hello";
});

console.log(arrNamesHello);

//Преобразовать числовой массив в Boolean

let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let i = 0; i < arrNum.length; i++) {
  arrNum[i] = Boolean(arrNum[i]);
}
console.log(arrNum);

//Отсортировать массив по убыванию

let arrNumSort = [1, 6, 7, 8, 3, 4, 5, 6];

arrNum.sort(function (a, b) {
  return a - b;
});
console.log(arrNumSort);

// Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

function isLarger(value) {
  return value > 3;
}

let arrSortLarge = [1, 6, 7, 8, 3, 4, 5, 6].filter(isLarger);
console.log(arrSortLarge);

// Написать функцию, которая принимает два параметра -
//массив и число и выводит индекс элемента массива равный числу

function showIndex(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != num) continue;
    console.log(i);
  }
}
let arr = [9, 8, 5, 7, 3, 5, 2, 5];
showIndex(arr, 5);

// Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

let a = 20;
while (a >= 10) {
  console.log(a);
  a--;
}

// Реализовать цикл, который выводит в консоль простые числа
