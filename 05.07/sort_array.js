let array = [1, 2, 3, 0, 8, 5, 6, 4, 12, 100, -5];

function sort_array_incr(arr){
	let temp;
	
	for(let i=0; i<arr.length-1; i++){
		for(let j=i+1; j<arr.length; j++){
			if(arr[i]>arr[j]){
				temp=arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
			}
		}
	}
	return(arr);
}

function sort_array_decr(arr){
	let temp;
	
	for(let i=0; i<arr.length-1; i++){
		for(let j=i+1; j<arr.length; j++){
			if(arr[i]<arr[j]){
				temp=arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
			}
		}
	}
	return(arr);
}

let sorted_arr_incr = sort_array_incr(array);
console.log(sorted_arr_incr);
let sorted_arr_decr = sort_array_decr(array);
console.log(sorted_arr_decr);