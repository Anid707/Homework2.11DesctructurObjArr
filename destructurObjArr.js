// 1. Задачи на деструктуризацию.
// 1.1 Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".

// 1.2 Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива

// 1.3 Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.

//1
let arr = ["Madina", "Assel", "Diana", "Zhanibek", "Sultan"];
let [employee1, employee2] = arr;
console.log("Employee1: " + employee1);
console.log("Employee2: " + employee2);

let [student1, student2, ...names] = arr;

names.forEach(el => {
    if (names.length < 2) {
        student2 = "Alex";
    }
    console.log(el);
})
console.log(`Student2: ${student2}`);

//2
let arr1 = ["Madina", "Assel", "Diana", "Zhanibek", "Sultan"];
const funcArr = ([name1, name2, name3]) => {
    console.log(name1 + "\n" + name2 + "\n" + name3);
}
funcArr(arr1);

//3
let movieObj = { 
    movie: "The age of Adaline",
    actor: "Blake Lively",
    year: 2015,
    genre: "romance",
}

let {movie, actor, ...fields} = movieObj;

const funcObj = ({movie, actor}) => {
    if (movie === undefined || actor === undefined){
        movie = 1;
        actor = 2;
    } else if (movie === undefined) {
        movie = 1;
    } else if (actor === undefined){
        actor = 2;
    }
    console.log(movie + "\n" + actor + "\n");
}
funcObj(movieObj);

for (const key in fields) {
    console.log(key + ": " + fields[key]);
}
