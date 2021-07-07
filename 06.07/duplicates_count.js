let str = 'heLlooOqQww122';
function Duplicates_count(str){
	let arr = [];
	arr=str.split('');
	let duplicates=0;	
	for(let i=0; i<arr.length; i++){
		arr[i]=arr[i].toLowerCase();	
	}
	for(let i=0; i<arr.length-1; i++){		
			if(arr.indexOf(arr[i], i+1)!=-1){
				duplicates++;
				delete(arr[arr.indexOf(arr[i], i+1)]);
			}
	}
			console.log('Всего встречено символов-дубликатов: '+duplicates);		
			}		
Duplicates_count(str);