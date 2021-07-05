let array = [1, 2, 3, 'a', 'f', 0, 'g', 8, 'e'];

function filter_list(arr){
	let filtered_arr=[];
	filtered_arr = arr.filter(item =>typeof (item)=='number');	
	return(filtered_arr);
}

let filtered_arr = filter_list(array);
console.log(filtered_arr);
