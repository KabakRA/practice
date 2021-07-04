

function Person(){
	let person = [];
person[0] = prompt('Как Вас зовут?');
person[1] = prompt('Сколько Вам лет?');
person[2] = prompt('Из какой Вы страны?');
person[3] = prompt('Какого Вы роста?');
return(person)
}
person=Person();
console.log(person);