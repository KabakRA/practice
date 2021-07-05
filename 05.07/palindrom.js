let str = 'А-ро,за упала на л-апу Азора';
function IsItPalindrom(str){
	str = str.replace(/[^a-zа-яё]/gi, '');//убрать все, кроме букв
	
	str.split(); //строка разбивается на массив символов
	let str1=[];
	for(let i=0; i<str.length; i++){				
			str1.push(str[i].toLowerCase());			
		
	}	
	
	for(let i=0, j=str1.length-1; i<=j; i++, j--){
		if(str1[i]!=str1[j]){return('Not palindrom.')}
	}
	return('Palindrom.');
}
let message=IsItPalindrom(str);
console.log(message);
