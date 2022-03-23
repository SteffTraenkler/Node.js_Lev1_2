const { names, numbers } = require('./data.js')
const { firstArr, allExcLast, lastUnicorn, notFirst, eNte, specialRemove, doubleStuff, sumArr, randomNum, capitalString, uppercaseString, paraCheck } = require('./functions.js')

console.log(firstArr(names))
console.log(firstArr(numbers))

console.log(allExcLast(names));
console.log(allExcLast(numbers));

console.log(lastUnicorn(names));
console.log(lastUnicorn(numbers));

console.log(notFirst(names));
console.log(notFirst(numbers));

console.log(eNte(names, 2));
console.log(eNte(names, -2));
console.log(eNte(numbers, 3));
console.log(eNte(numbers, -2));

console.log(specialRemove(names, 'Eric'));
console.log(specialRemove(numbers, 2));

console.log('double Elements');
console.log(doubleStuff(numbers));

console.log('Summe (Reduce)');
console.log(sumArr(numbers));

console.log('Random Number');
console.log(randomNum(5, 15));

console.log('String with first letter Upper Case');
console.log(capitalString('york'));

console.log('uppercase String');
console.log(uppercaseString('york'));

console.log('Vergleich Parameter');
console.log(paraCheck('Test', 't'));
console.log(paraCheck('Test', 'q'));