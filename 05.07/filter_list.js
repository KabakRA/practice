let array = [1, 2, 3, 'a', 'f', 0, 'g', 8, 'e'];

function filter_list(arr){
	let filtered_arr=[];
	
	for(let i=0; i<arr.length; i++){
		if(typeof(arr[i])!='string'){
			filtered_arr.push(arr[i]);
		}
	}
	return(filtered_arr);
}

let filtered_arr = filter_list(array);
console.log(filtered_arr);