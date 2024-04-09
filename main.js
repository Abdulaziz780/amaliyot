// 1
var firstVar = 5;
var secondVar = 10;
console.log(firstVar + secondVar);

// 2
let a = '12';
a = Number(a);
console.log(typeof a, a);

// 3
var randomSon = Math.floor(Math.random() * 100) + 1;
var juftYokiToq = randomSon % 2 === 0 ? 'juft' : 'toq';
console.log(randomSon, juftYokiToq);

// 4
var soz = prompt('Bir so\'z kiriting:');
if (soz.toLowerCase() === 'mars') {
    console.log(soz);
} else {
    console.log('Mars It school');
}

// 5
var array = ['apple', 'banana', 'orange', 'grape', 'pineapple'];
var uzunSozlar = [];
for (var i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
        uzunSozlar.push(array[i]);
    }
}
console.log(uzunSozlar);

// 6
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i, 'juft');
    } else {
        console.log(i, 'toq');
    }
}