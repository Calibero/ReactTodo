// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA];
//
// console.log(final);

var person = ['Pavel', 23];
var personTwo = ['Martin', 19];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Pavel', 'Martin'];
var final = ['Franta', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
