//ПЕРЕМЕННЫЕ
var myMassage; //a-z, A-Z, 0-9, $, _ Можно использовать для имен переменных, чувствителен к реестру.

myMassage = 'Привет кашке';

var myNumber = 10.452;
var myString = 'Двойной кашке'; // '10.484' будет так же строкой.
var myBoolean = true; // false
var myNull = null; //Пустая переменная
var myUndefined = undefined; //Переменные не проинициализированы


//ЧИСЛА
/*var result = 40 + 10;
console.log(40 + myNumber);
console.log(40 - myNumber);
console.log(40 * myNumber);
console.log(40 / myNumber);
myNumber++;
console.log(myNumber);
console.log(Math.floor(5.45));
var newNumber = 2.457;
console.log(newNumber.toFixed(1));*/

//СТРОКИ
/*console.log('40' + myNumber); //Конкатинация
console.log(myString + ' Как ты');
console.log(myString.toUpperCase());*/

//МАССИВЫ
//var names = ['Кашке1', 'Кашке2', 'Кашке3'];
//console.log(names[1].toUpperCase());

//names[0] = 'Саша';
//console.log(names[0]);

//names.push('Паша');
//console.log(names);*

//УСЛОВИЯ
/*if ('Паша' !== 'Маша' || myNumber > 20) {
	console.log('Условие выполнилось');
}

if (myNumber > 20) {
	console.log('Число меньше 20');
} else {
	console.log('Число больше 20');
}*/

//ЦИКЛЫ
/*for (var i = 0; i <= 10; i++) {
	if (i == 5) {
		continue; 
	}

	console.log(i);
}

for (var j = 0; j < names.length; j++) {
	console.log(names[j]);
}*/

/*var i = 0;
while (i < 10) {
	console.log(i);
	i++;
}*/

//ФУНКЦИИ
/*function sum(x, y) {
	return x + y;
}

console.log(sum(10, 59)); 
console.log(sum(3, 65)); */

//ОБЪЕКТЫ
/*var myObject = {
	name: 'Кашке',
	surname : 'Кашкин',
	age: 21,
	getFullName : function() {
		return this.name + ' ' + this.surname;
	}
}; // это объекты

myObject.name = 'Брайн';
console.log(myObject.name);
console.log(myObject.getFullName());


var myString = "Bekzat";

var LastLatterstoMystring = myString[myString.length -2];

alert(LastLatterstoMystring);*/


/*function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "dog "+"quickly "+"cat "+" slowly"+" ran"+" big"+" little"+" hit";

  // Your code above this line
  return result;
}

// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));

*/

// Setup
/*function testStrictNotEqual(val) {
*/  // Only Change Code Below this Line
  
/*  if (val !== 17) {

  // Only Change Code Above this Line

    return "Не равно";
  }
  return "Равно";
}

// Change this value to test
console.log(testStrictNotEqual(17));
*/


/*var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

  for (var i = 0; i < myArr.length; i++) {

   console.log(total += myArr[i]);
  }*/
/*  var product = 1;
  var arr = [
  [1,2], [3,4], [5,6,7]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(product += arr[i][j]);
  }
}*/
//Тестовые объекты

/*var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}*/

// Alter values below to test your code
/*updateRecords(5439, "artist", "ABBA");*/

