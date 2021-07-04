
const arr = [1,'one',true,0,'zero',false,null,undefined];
let str1;
let str2;

function FirstWay(arr, str){
for (let i=0; i<arr.length; i++){
	arr[i]=String(arr[i]);
}
str=arr[0];
for (let i=1; i<arr.length; i++){
	str=str+arr[i];
}

return str;
}

function SecondWay(arr, str){
	str=String(arr[0]);
for (let i=1; i<arr.length; i++){
	str=str+arr[i];
}
return str;
}

str1=FirstWay(arr);
str2=SecondWay(arr);

console.log(arr);
console.log(str1);
console.log(str2);