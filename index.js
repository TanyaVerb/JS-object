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
const user2 = {
  name: "Vlad",
  newObj: { wife: true },
  method1: function () {
    console.log("method1", user1);
  },
  method2() {
    console.log("method2", user1);
  },
  method3: () => {
    console.log("method3", user1);
  },
  arr: [2, "2,", null, undefined, false, NaN, Infinity, foo1],
};

let simpleVar2 = [2, "2,", null, undefined, false, NaN, Infinity, foo1];
console.log(user2.arr);

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
//   if (+value < obj.k) {
//     console.log("Ничего не купишь");
//   } else if (+value > obj.k && +value < obj.k2) {
//     console.log("Деньги есть - можно поесть");
//   } else if (+value > obj.k2 && +value < obj.k3) {
//     console.log("Пятница");
//   } else if (+value > obj.k3) {
//     console.log("Ого ты богач");
//   }
// }

// checkMoney(pocket);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
