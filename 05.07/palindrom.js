let str = 'k abak';

function IsItPalindrom(str){
	str.split(); //строка разбивается на массив символов
	str1=[];
	for(let i=0; i<str.length; i++){
		if(str[i]!=' '){
			
			str1.push(str[i]);
			
		}
	}
	
	for(let i=0, j=str1.length-1; i<=j; i++, j--){
		if(str1[i]!=str1[j]){return('Not palindrom.')}
	}
	return('Palindrom.');
}
let message=IsItPalindrom(str);
console.log(message);