let arrays = [
 [ [6], [12] ],
  ["25"],
4
 ];
 
let f = ([[[1, [1.1]], 2, 3], [4, 5]]); // [1, 1.1, 2, 3, 4, 5]
 
 function NestedArrays(array){
	  let expanded_array = [];

 expanded_array=array.flat(Infinity);
 return(expanded_array);
 }
let expanded_array=[]=NestedArrays(arrays);
 console.log(expanded_array);
 
 let expanded_f=[]=NestedArrays(f);
 console.log(expanded_f);