let array = [1, 2, 3];

function RemoveMin(arr){
	let min=arr[0];
	let imin=0;
	for(let i=1; i<arr.length; i++){
		if(arr[i]<min){
			min=arr[i];
			imin=i;
		}
		arr.splice(imin, 1); //удалить 1 элемент, начиная с imin
	}
	return(arr);
}

console.log(RemoveMin(array));