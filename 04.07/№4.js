const array = [1, 2, 3, 4, 5];
function SumAndProduct(arr){
	let sum=0;
	let product=1;
for (let i=0; i<arr.length; i++){
	sum=sum+ +arr[i];
	product=product* +arr[i];
}
console.log('Сумма значений в массиве: '+sum);
console.log('Произведение значений в массиве: '+product);
}

SumAndProduct(array);