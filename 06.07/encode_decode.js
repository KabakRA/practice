let str = 'hello';

function encode(str){	
	let arr=str.split('');	
	for(let i=0; i<arr.length; i++){
		if (arr[i] == 'a') {arr[i]='1'};
		if (arr[i] == 'e') {arr[i]='2'};
		if (arr[i] == 'i') {arr[i]='3'};
		if (arr[i] == 'o') {arr[i]='4'};
		if (arr[i] == 'u') {arr[i]='5'};
	}
	
	str = arr.join('');
	return(str);
}

str = encode(str);
console.log(str);

function decode(str){	
	let arr=str.split('');	
	for(let i=0; i<arr.length; i++){
		if (arr[i] == '1') {arr[i]='a'};
		if (arr[i] == '2') {arr[i]='e'};
		if (arr[i] == '3') {arr[i]='i'};
		if (arr[i] == '4') {arr[i]='o'};
		if (arr[i] == '5') {arr[i]='u'};
	}
	
	str = arr.join('');
	return(str);
}

str=decode(str);
console.log(str);
