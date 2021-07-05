let str = 'adfghjkiuytr';

function EvenCharaters(str){
	str.split(); //строка разбивается на массив символов
	let evenChars=[];
	if(str.length<2 || str.length>100){return 'Invalid value.'}
	for(let i=1; i<str.length; i+=2){
		evenChars.push(str[i]);
	}
	return(evenChars);
}
let evenChars=EvenCharaters(str);
console.log(evenChars);