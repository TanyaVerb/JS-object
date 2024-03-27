// let user = {
//   result: function (name, age, job) {
//     user[name] = prompt("Введите имя");
//     user[age] = prompt("Введите имя");
//     user[job] = prompt("Введите имя");
//     console.log(user.name);
//   },
// };
// user.result();
// // ______________

// const someObject = someFoo();

// function someFoo() {
//   user[name] = prompt("Введите имя");
// }

// ____________________________________
// const userName = prompt("Введите имя");
// const userAge = prompt("Введите возраст");
// const userJob = prompt("Введите работу");

// function createUserObj() {
//   let user = {};
//   user.name = userName;
//   user.age = userAge;
//   user.job = userJob;
//   return user;
// }
// const user = createUserObj();
// console.log(user);

// Написать функцию, которая при вызове будет возвращать объект user с заполненными пользователем через prompt при этом, вызов функции допускается 1 раз
// _____________________________________

// const Foo = () => {
// return 2
// }
// const Foo2 = (param) => typeof param ==='number'?
// 'вы ввели число':'вы ввели не число'                 //однострочная функция

// let user = ({})// выражение
// function f(){
//   return 2
// }

// const fooE = function(){

// }

// let a = Foo2 ();
// console.log("a",a)

// _______________________________________________________________
// создайте переменную и присвойте ей значение которое будет ровняться результатом выполнения сложения 3 функций, принимающих по одному параметру и возвращающие его умноженного на самого себя

// const foo1 = (a)=>  a * a

// const sum = foo1(2) + foo1(3) + foo1(4)

// console.log (sum);

// ____________________________________

// const sum =  foo1(2) + foo1(3) + foo1(4)
// function foo1 (a){
//   return a*a
// }
// function foo2 (b){
// return b*b
// }
// function foo3 (c){
// return c*c
// }

// console.log (sum);
//______________________________

// const foo1 = (a)=> a*a
// const sum =  foo1(2) + foo1(3) + foo1(4);
// console.log (sum);

// console.log(typeof null)

// -------------------------------------

// function foo1() {
//   console.log("Foo!!!");
// }
// foo1();
// const user1 = {
//   name: "Vlad",
//   newObj: { wife: true },
//   method1: function () {
//     console.log("method1", user1);
//   },
//   method2() {
//     console.log("method2", user1);
//   },
//   method3: () => {
//     console.log("method3", user1);
//   },
//   arr: [2, "2,", null, undefined, false, NaN, Infinity, foo1],
// };
// console.log(user1.newObj.wife);

// let simpleVar = [2, "2,", null, undefined, false, NaN, Infinity, foo1];
// let key = prompt("К какому полю ты хочешь обратится в объекте user1");

// console.log(user1[key]); // user1.name => user1['name']
// console.log(simpleVar[2]);
// ______________________________________________________
// let

// console.log(simpleVar[5]());
// console.log(user1.arr);
// ________________________________________________________
// const user2 = {
//   name: "Vlad",
//   newObj: { wife: true },
//   method1: function () {
//     console.log("method1", user1);
//   },
//   method2() {
//     console.log("method2", user1);
//   },
//   method3: () => {
//     console.log("method3", user1);
//   },
//   arr: [2, "2,", null, undefined, false, NaN, Infinity, foo1],
// };

// let simpleVar2 = [2, "2,", null, undefined, false, NaN, Infinity, foo1];
// console.log(user2.arr);

// console.log ({} === {});// не равны друг другу
// console.log ([] === []);// не равны друг другу
// str
// num (NaN/Infinity)
// null
// undefined
// Object ({}/function/Arra)
//Bool (true/false)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// У нас имеется объект, это объект имеет три ключа:
// 1 ключ = 10
// 2 ключ = 100
// 3 ключ = 1000

// необходимо данный объект передать в качестве параметра в функцию checkMoney . которая внутри себя должна проверить введенное значение (числовое) через promt
// и при вводе меньше 10 руб - выводить сообщение, что "Ничего не купишь"
// и при вводе больше 10 руб, но меньше 100 - выводить сообщение, что "Деньги есть - можно поесть"
// и при вводе больше 100 руб, но меньше 1000 - выводить сообщение, что "Пятница"
// при вводе больше 1000 - " Ого ты богач"
// Вводимое значение нужно сравнивать с полями объекта, кот в функцию передается

// const pocket = {
//   k: 10,
//   k2: 100,
//   k3: 1000,
// };

// const pocket2 = {
//   k: 5,
//   k2: 7,
//   k3: 10,
// };
// function checkMoney(obj) {
//   const value = prompt("Inter value");
//   if (!isNaN(Number(value)) && value !== null && value !== "") {
//     if (+value < obj.k) {
//       console.log("Ничего не купишь");
//     } else if (+value > obj.k && +value < obj.k2) {
//       console.log("Деньги есть - можно поесть");
//     } else if (+value > obj.k2 && +value < obj.k3) {
//       console.log("Пятница");
//     } else if (+value > obj.k3) {
//       console.log("Ого ты богач");
//     }
//   } else {
//     console.log("Вы ввели не числовое значение");
//   }
// }
// checkMoney(pocket);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// проверка на пустоту функции

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }

// const pocket = {
//   k: 10,
//   k2: 100,
//   k3: 1000,
// };

// console.log(isEmpty(pocket));
// _______________________________________________________________________

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum); // 390
// __________________________________________________________________________
// Умножаем все числовые свойства на 2

// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(multiplyNumeric(menu));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Методы объектов

// let user = {
//   name: "John",
//   age: 30,
// };

// user.sayHi = function () {
//   alert("Привет!");
// };

// user.sayHi(); // Привет!

// +++++++++++++++++++++ или +++++++++++++++++++++++++++++

// let user = {
//   // ...
// };

// // сначала, объявляем
// function sayHi() {
//   alert("Привет!");
// }

// // затем добавляем в качестве метода
// user.sayHi = sayHi;

// user.sayHi(); // Привет!
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// эти объекты делают одно и то же

// user = {
//   sayHi: function () {
//     alert("Привет");
//   },
// };
// _________________________________________________________________________
// сокращённая запись
// user = {
//   sayHi() {
//     // то же самое, что и "sayHi: function(){...}"
//     alert("Привет");
//   },
// };

// console.log(user.sayHi());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert(this.name);
// }

// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin["f"](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// калькулятор

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++Задача1+++++++++++++++++++++++++++++++++++++++++

const user1 = {
  name: "Vlad",
  salary: 0,
  department: "бухгалтерия",
};
const user2 = {
  name: "Oleg",
  salary: 100,
  department: "директория",
};
const user3 = {
  name: "Dima",
  salary: 50,
  department: "бухгалтерия",
  age: undefined,
};

const prise = {
  car: 100,
  hom: 1000,
  furniture: 20,
  products: 2,
};

// ++++++++++++++++++++++++++1ый вариант+++++++++++++++++++++++++
// const updatePrice = (obj) => {
//   for (let key in obj) {
//         if (typeof obj[key] == "number") {
//           // obj[key] =obj[key] + (obj[key]*13/100);

// _________________________2ой вариант_________________________________________
//           let dopPrice = obj[key] * 0.13
//           obj[key] += dopPrice
//         }
//       }
// }

// updatePrice(prise);
// console.log (prise);
// _________________________________________________
// +++++++++++++++++++2ой вариант+++++++++++++++++++++++++
const updatePrice = (obj) => {
  for (const key in obj) {
    const extraPrice = obj[key] * 0.13;
    console.log(extraPrice);
    obj[key] = obj[key] + extraPrice;
  }
  console.log(obj);
};
updatePrice(prise);

const updatePrice2 = (obj) => {
  // проверить
  for (const key in obj) {
    obj[key] *= 1.13;
  }
  console.log(obj);
};

updatePrice2(prise);

// ++++++++++++++++++++++++++++++++++++++
// console.log('age' in user3);

// for( let key in user3){
//   console.log(key);
// }

// console.log('!', key);

// for( let key in user3){
//   console.log('key', key);
//  console.log('value' ,user3[key])
// }

// console.log('!', key);

// const minSalary = 50;
// const maxSalary = 100;

// const setSalary = (obj)=>{
// if (!obj.salary && obj.salary !== 0 ){
//   obj.salary = 50
// }
// console.log(obj)
// }

// const setSalary = (obj)=>{
//   for (let key in obj){
//     if (key ===' salary' && (!obj[key] && obj[key] !== 0) ){
//         obj.salary = 50
//       }
//   }
//   console.log(obj);
// }

// const setSalary = (obj) => {
//   if ('salary' in obj){
//     console.log('Есть такое поле');
//     if (!obj [ 'salary']&& obj.salary !== 0 ){
//       obj.salary = minSalary
//     }
//     console.log(obj);
//   }
// }

// setSalary(user1)
// // user1.salary 50

// setSalary(user2)
// // user1.salary 50

// setSalary(user3)

// +++++++++++++++++++++Массивы++++++++++++++++++++++++++++++++++++
// const userList = [ user1, user2, user3]

// console.log (userList [2].age );

// const userName = {name:'Vlad'};
// let userName2 = userName;

// console.log(userName);
// console.log(userName===userName2);
// console.log(userName2);

// userName.age = 31;
// console.log(userName===userName2);
// userName2.job = 'FE';

// const userName3 = userName2;
// userName2 = 'Primat'

// console.log('userName');
// console.log(userName===userName2);
// console.log(userName2);

// userName3.name = "TTTTT"

// +++++++++++++++++++++++++++++++++++++++++++++++
const maArr = [];
const testObj = {
  foo() {
    console.log("Hello");
  },
  age: 31,
};
testObj.foo();

const userList = [user1, user2, user3];
// console.log(userList.length);
console.log(userList.push("4-ый элемент"));
// console.log(userList);

for (let i = 0; i <= userList.length - 1; i++) {
  if (typeof userList[i] === "object") {
    if (userList[i].department === "бухгалтерия") {
      userList[i].salary = 100;
    } else {
      userList[i].salary = 10;
    }
  } else {
    continue;
  }
}

console.log(userList);
console.log(user1);
console.log(user2);
console.log(user3);
