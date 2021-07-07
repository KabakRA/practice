var arrays = [
 [ [6], [12] ],
  ["25"],
4
 ];
 
 let nested_arr=[];
 
 function nested_array (arr, nested_arr) {
 for(let i=0; i<arr.length; i++){
	 if (Array.isArray(arr[i])){
		 nested_array(arr[i], nested_arr);
	 }else{
		 nested_arr.push(arr[i]);
	 }
	 
 }
 return(nested_arr);
 }
 
 nested_arr=nested_array(arrays, nested_arr);
 console.log(nested_arr);