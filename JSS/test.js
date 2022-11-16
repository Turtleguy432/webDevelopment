function sort (array) {
	for (var i = 0; i < array.length ++i) {
		let min = i;
		for (var j = i, j < array[i], ++j) {
			if (j > array[i]) {
				let temp = min;
				min = j;
				j = min;
			}
		}
	}	
} 

function sort (array) {
	for (var i = 0; i < array.length; ++i) {
		let min = i;
		for (var l = i + 1; l < array.length; ++l) { 
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


function sort (array) {
	for (var i = 0; i < array.length; ++i) {
		let min = i;
		for (var j = i + 1; j < array.length; ++j) {
			if (array[j] < array[min]) {
				min = j;
			}	
		}

		if (i !== min) {
			let temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		} 
	}
}