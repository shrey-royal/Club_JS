// Iterable: it is an object that implements the iterable protocol, meaning it has a `symbol.iterator` method. this method returns an iterator, which is an object with a `next` method that return object with two properties: `value` and `done`.

// const arr = [1, 2, 3];

// for (const elem of arr) {
//     console.log(elem);
// }

// Optional Chaining (?.): It is a feature that allows you to safely access deeply nested properties of an object without having to explicitly check each level for `null` or `undefined`

// const user = {
//     fname: 'Divy',
//     lname: 'Soni',
//     address: {
//         city: "Gandhinagar",
//         state: "Gujarat",
//         country: "India"
//     }
// }

// console.log(user);
// console.log(user.gender);

// -> calling objects
// const user = { 
//     profile: {
//         name: 'Dhairya',
//     } 
// };

// console.log(user.profile?.name);
// console.log(user.profile?.city);


// -> calling methods
// const obj = {
//     greet: () => 'Hello'
// };

// console.log(obj.greet?.());
// console.log(obj.farewell?.());

// -> array index
// const data = [1, 2, 3]
// console.log(data[2].toFixed);




