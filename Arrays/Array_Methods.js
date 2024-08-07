// const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
// const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');

// console.log(salad[0]);
// console.log(salad[1]);
// len = salad.length;

// console.log(salad[len - 3]);

// salad.push('🥜');
// salad.unshift('🥜');

// let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];

// veg = fruits[4];
// const carrot =  veg[2]
////////////////////////////////////////////////////////////////////////////////////

// const nums = [29,24,56,22,21,26]
// const nums = [1,111,10001,101,100001,1000001]
// console.log(nums);
// console.log(nums.sort((a, b) => a-b));
////////////////////////////////////////////////////////////////////////////////////

// forEach()
// const veggies = ['🍅', '🥦', '🥕'];
// veggies.forEach(veggie => console.log(veggie));

////////////////////////////////////////////////////////////////////////////////////
//Map
// const junkFood = ['🍔', '🍕', '🍔', '🍔', '🍔']
// // const diet = junkFood.map(convert => '🥕')
// const diet = junkFood.map(item => item === '🍔' ? '🥕' : item)

// console.log(diet);
// console.log(junkFood);

////////////////////////////////////////////////////////////////////////////////////

//filter()
// const fruits = ['🍌', '🍉', '🍍', '🍉','🍉','🍋‍🟩','🍉','🍈','🍇','🍉','🍇','🍇']
// const watermelon = fruits.filter(item => item === '🍉')

////////////////////////////////////////////////////////////////////////////////////

//reduce()

// const array = [1, 2, 3, 4, 5]
// console.log(array.reduce((previousValue, currentValue) => previousValue/currentValue));

// const transactions = [
//     {id: 1, type: 'food', amount: 50},
//     {id: 2, type: 'entertainment', amount: 120},
//     {id: 3, type: 'food', amount: 30},
//     {id: 4, type: 'utilities', amount: 100},
//     {id: 5, type: 'entertainment', amount: 60},
// ]

// const categorizedTotals = transactions.reduce((acc, transaction) => {
//     if(!acc[transaction.type]) {
//         acc[transaction.type] = 0;
//     }

//     acc[transaction.type] += transaction.amount;

//     return acc;
// }, {});
// console.log(categorizedTotals);
////////////////////////////////////////////////////////////////////////////////////

//find()
// const fruits = ['🍌', '🍉', '🍍', '🍉','🍉','🍋‍🟩','🍉','🍈','🍇','🍉','🍇','🍇']
// console.log(fruits.find(item => item === '🍋‍🟩'));
// console.log(fruits.findIndex(item => item === '🍉'));

////////////////////////////////////////////////////////////////////////////////////

//fill()

// const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// const b = a.fill('🍅', 0, 20);
// console.log(b);


////////////////////////////////////////////////////////////////////////////////////

//every()
const junkFood = ['🍔', '🍕', '🍔', '🍔', '🍔']
console.log(junkFood.every(item => item === '🍔'));
console.log(junkFood.some(item => item === '🍕'));

//some()
const fruits = ['🍌', '🍉', '🍍', '🍉','🍉','🍋‍🟩','🍉','🍈','🍇','🍉','🍇','🍇']
console.log(fruits.some(item => item === '🍉'));


