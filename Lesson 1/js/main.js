/*
let str = 'урок-3-был слишком легким';
console.log(str[0].toUpperCase() + str.slice(1));

console.log(str[6] = ' ');


let options = {

  name: 'test',
  width : 1024,
  height : 1024
}

options.bool = false;
options.colors = {
    border: 'black',
    background: 'red'
}

delete options.bool;

for ( let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(options);
console.log(Object.keys(options).length);

console.log(first.pop()); // Удаление последнего элемента в массиве

first.push(6); // Добавление нового элемента в конец массива

first.shift(); // Удалает первый элемент в массиве
first.unshift(); // Добавляет в начало массива элемент*/


let first = [5,52,6,22,9];

let i = prompt('', '');

function sortNumbers(a,b) {
    
    return a - b;
}

/*let i = first.sort(sortNumbers); */  //split() Записывает веденые пользовотелем данные в массив 

console.log(i);

/*
for (var i = 0; i < first.length; i++) {
    
    alert(first[i]);
}
*/
first.forEach(function( item,i,arr ){
    console.log( i + ": " + item + ' массив: ' + arr + ")" );

});


/*let solider = {
    health: 400,
    armor: 100
}

let john = {    
    health: 100
}

john.__proto__ = solider;

console.log(john);
console.log(john.armor);*/