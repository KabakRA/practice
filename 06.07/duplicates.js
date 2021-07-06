let str = 'heLlooOqQww122';
function Duplicates(str){
	let arr = [];
	arr=str.split('');
	let temp_arr = [];
	temp_arr=str.split('');
	let duplicates=0;	
	for(let i=0; i<arr.length; i++){
		arr[i]=arr[i].toLowerCase();
		temp_arr[i]=temp_arr[i].toLowerCase();
	}
	for(let i=0; i<arr.length; i++){
			if ((arr[i] != ')') && (arr[i] != '(')){ 
				temp_arr[i]='used';	
			if(temp_arr.includes(arr[i])){
			duplicates++;	
			for(let j=i+1; j<arr.length; j++){
				if (arr[j]==arr[i]) {arr[j] = ')'} //символы-дубликаты преобразуем в ')'
				
			}
			arr[i]=')';
			}	else { arr[i]='('} //встречающиеся единожды преобразуем в '('
			
			}				
	}
			console.log('Всего встречено символов-дубликатов: '+duplicates);		
			str=arr.join('');
			console.log('Исходная строка после преобразования: '+str);
			}		
Duplicates(str);