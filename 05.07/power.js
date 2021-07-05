const array = [1, 2, 3];
const N = 3;
function PowerN(arr, N){
	let result;
	if (arr[N]){result = arr[N]**N}
	else {result=-1}
	return(result);
}
let result = PowerN(array, N);
console.log(result);