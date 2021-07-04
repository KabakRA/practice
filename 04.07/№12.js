const arr = ['a', 1, 2, false, 'b'];

function SortType(arr){
	let result ={
		number: [],
		string: [],
		boolean: []	
	}
	for(let i=0; i<arr.length; i++){
		if (typeof(arr[i])=='number') {result.number.push(arr[i])}
		else if (typeof(arr[i])=='string') {result.string.push(arr[i])}
		else if (typeof(arr[i])=='boolean') {result.boolean.push(arr[i])}
	}
	return(result);
}

types=SortType(arr);
console.log(types);