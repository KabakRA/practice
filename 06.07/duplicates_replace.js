let str = 'heLlooOqQww122';
function Duplicates_replace(str){
	let arr = [];
	arr=str.split('');	
	for(let i=0; i<arr.length; i++){
		arr[i]=arr[i].toLowerCase();	
	}
	for(let i=0; i<arr.length-1; i++){
			if(arr[i]!=')' && arr[i]!='('){
			if(arr.indexOf(arr[i], i+1)!=-1){				
while(arr.indexOf(arr[i], i+1)!=-1){
	arr[arr.indexOf(arr[i], i+1)]=')';
}			
	arr[i]=')'
			}else{arr[i]='('}
	}
	}			
			str=arr.join('');
			console.log('Исходная строка после преобразования: '+str);
			}		
Duplicates_replace(str);
