let str = 'heLlooOqQww122';
function Duplicates(str){
	let arr = [];
	arr=str.split('');
	let duplicates=0;	
	for(let i=0; i<arr.length; i++){
		arr[i]=arr[i].toLowerCase();	
	}
	for(let i=0; i<arr.length-1; i++){
			if(arr[i]!=')' && arr[i]!='('){
			if(arr.indexOf(arr[i], i+1)!=-1){
				duplicates++;
while(arr.indexOf(arr[i], i+1)!=-1){
	arr[arr.indexOf(arr[i], i+1)]=')';
}			
	arr[i]=')'
			}else{arr[i]='('}
	}
	}
			console.log('Всего встречено символов-дубликатов: '+duplicates);		
			str=arr.join('');
			console.log('Исходная строка после преобразования: '+str);
			}		
Duplicates(str);
