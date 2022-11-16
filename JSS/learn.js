function popArray(leng){
	var arr= [" "];
	arr.length=leng;
	for (var i = 0; i < arr.length; i++) {
		arr[i]=" " + Math.floor(Math.random()* 100);
	}
	return arr;
}

function arrayMultiply(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] *=2;
	}
	return arr;
}

function check(arr){
	let string = "";
	for (var i = 0; i < arr.length; i++ ) {
		string = string + arr[i].toString();
		if (i != arr.length -1) {
			string += ", ";
		}
	}
	return string;
}

function print(array, LOC){
	LOC.textContent = array;
}

function swap(x, y){
	
}

function sorting(array) {
	for(let lowest = 0; lowest < array.length; lowest++){
		var min = lowest;
		for (let i = lowest + 1; i < array.length; ++i){
			if(array[lowest] > array[i]){
				min = i;
			}
		}
		var temp = array[lowest];
		array[lowest] = array[min];
		array[min] = temp;
	}	
	return array;
}
function run(NUM, id, id2){
	let preMult =document.getElementById(id2);
	let postMult = document.getElementById(id);
	var array = popArray(NUM);
	print(array, preMult);
	array = arrayMultiply(array);
	sortedMultArray =sorting(array);
	array = check(array);
	print(sortedMultArray, postMult);
}
function sort (array) {
	for (i = 0; i < array.length; ++i) {
		let min = i;
		for (l = i + 1; l < array.length; ++l) {
			if (array[l] < array[min]) {
				min = l;
			}
		}
		if (i !== min) {
			let temp = array[min];
			array[min] = array[i];
			array[i] = temp;
		}
	}
}