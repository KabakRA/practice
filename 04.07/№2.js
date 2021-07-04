const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
n=8;

function getFirst(array, n){
	let array1=[];
	if(n<=array.length){
		for (let i=0; i<n; i++){
	array1.push(array[i]);
}
console.log(array1);
	}else{
		console.log('В массиве меньше, чем '+n+' элементов.');
}
	}

getFirst(array, n);