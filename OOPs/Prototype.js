/* 
`__proto__`: A property that references the prototype of the object, from which it inherits methods and properties.

`[[prototype]]`: An internal property that the javascript engine uses it to look up properties and methods in the prototype chain.

*/

const parent = { greet() { console.log('Hello!'); } };
const child = Object.create(parent);    //true

console.log(child.__proto__ === parent);
child.greet();

/*
const grandParents = { wisdom: 'Ancient Knowledge', recipe: 'Traditional Dish' };
const parents = Object.create(grandParents);
parents.modernKnowledge = 'New Techniques';

const child = Object.create(parents);
child.newSkills = 'Innovative Methods';

console.log(child.__proto__ === parents);
console.log(child.__proto__.__proto__ === grandParents);

console.log(child.wisdom);
console.log(child.newSkills);
*/