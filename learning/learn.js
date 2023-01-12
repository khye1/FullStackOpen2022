"use strict";
var message = "Hello World";
console.log(message);

let array1 = [5, 4, -3, 11, 1];
array1.sort(
	function sapXepArray(a, b) {
		return a - b;
	});


console.log(array1);