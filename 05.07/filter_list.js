let array = [1, 2, 3, 'a', 'f', 0, 'g', 8, 'e'];

function filter_list(arr){
	let filtered_arr=[];
	
	arr.forEach((item)=>{
		if(typeof(item)=='number'){
			filtered_arr.push(item);
		}
	})
	return(filtered_arr);
}

let filtered_arr = filter_list(array);
console.log(filtered_arr);
