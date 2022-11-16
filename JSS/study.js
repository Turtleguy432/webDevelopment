function run(outputLOC) {

	let selectionArray = getNewArray();

	selectionSort(selectionArray);

	let a = " ";

	for (let i = 0; i < selectionArray.length; ++i){
		a = a + selectionArray[i];
		if (i === selectionArray.length - 1) {
			continue;
		} else {
			a = a + ", ";
		}
	}


	let selectionSortOutput = document.getElementById('selection');
	selectionSortOutput.textContent = a;

	let insertionArray = getNewArray();

	insertionSort(insertionArray);
	a = " ";

	for (let i = 0; i < insertionArray.length; ++i){
		a = a + insertionArray[i];
		if (i === insertionArray.length - 1) {
			continue;
		} else {
			a = a + ", ";
		}
	}

	let insertionSortOutput = document.getElementById('insertion')
	insertionSortOutput.textContent = a;

	return;
}

function getNewArray() {
	let array = new Array (Math.floor(Math.random() * (15 - 5) + 15));
	for (let i = 0; i < array.length; ++i) {
		array[i] = Math.floor(Math.random() * 100);
	}
	return array;
}

function selectionSort (array) {
	for (i = 0; i < array.length; ++i) {
		let min = i;
		for (l = i + 1; l < array.length; ++l) {
			if (array[l] < array[min]) {
				min = l;
			}
		}
		if (i !== min) { 
			let temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}

	}
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let l = i - 1
    let temp = array[i]
    while (l >= 0 && array[l] > temp) {
      array[l + 1] = array[l];
      l--;
    }

    array[l + 1] = temp;
  }

  return array;
}
function randColor() {
	let maximumColorValue = 0xFFFFFF;
	let randomColorValue = Math.floor(Math.random() * maximumColorValue);
	randomColorValue = randomColorValue.toString(16);
	let randomColor = randomColorValue.padStart(6, 0);

	let hexCode = "#" + randomColor.toUpperCase();
	return hexCode;
}

function lightMode() {
	document.getElementById("selection").style.color = '#f72635';
	document.getElementById("insertion").style.color = '#f72635';
	document.getElementById("h2_1").style.color = '#a72540';
	document.getElementById("h2_2").style.color = '#a72540';
	document.getElementById("Title").style.color = '#a72540';
	document.getElementById("clock").style.color = '#a72540';
	document.getElementById("clock").style.borderColor = '#eb3c48'
	document.getElementById("content").style.backgroundColor = '#bcc4ce';
	document.getElementById("bar1").style.color = '#eb3c48 ';
	document.getElementById("bar2").style.color = '#eb3c48';
	document.getElementById("bar3").style.color = '#eb3c48';
	document.getElementById("darkMode").style.backgroundColor = '#bcc4ce';
	document.getElementById("lightMode").style.backgroundColor= '#bcc4ce';
	document.getElementById("run").style.backgroundColor = '#bcc4ce';
	document.getElementById("surprise").style.backgroundColor = '#bcc4ce';

}
function darkMode() {
	document.getElementById("selection").style.color = '#bebebe';
	document.getElementById("insertion").style.color = '#bebebe';
	document.getElementById("h2_1").style.color = '#bcc4ce';
	document.getElementById("h2_2").style.color = '#bcc4ce';
	document.getElementById("Title").style.color = '#bcc4ce';
	document.getElementById("clock").style.color = '#bcc4ce';
	document.getElementById("clock").style.borderColor = '#082c6c';
	document.getElementById("content").style.backgroundColor = '#444444';
	document.getElementById("bar1").style.color = '#082c6c';
	document.getElementById("bar2").style.color = '#082c6c';
	document.getElementById("bar3").style.color = '#082c6c';
	document.getElementById("darkMode").style.backgroundColor = '#bebebe';
	document.getElementById("lightMode").style.backgroundColor= '#bebebe';
	document.getElementById("run").style.backgroundColor = '#bebebe';
	document.getElementById("surprise").style.backgroundColor = '#bebebe';

}

function surprise() {
	document.getElementById("selection").style.color = randColor();
	document.getElementById("insertion").style.color = randColor();
	document.getElementById("h2_1").style.color = randColor();
	document.getElementById("h2_2").style.color = randColor();
	document.getElementById("Title").style.color = randColor();
	document.getElementById("clock").style.color = randColor();
	document.getElementById("clock").style.borderColor = randColor();
	document.getElementById("content").style.backgroundColor = randColor();
	document.getElementById("bar1").style.color = randColor();
	document.getElementById("bar2").style.color = randColor();
	document.getElementById("bar3").style.color = randColor();
	document.getElementById("darkMode").style.backgroundColor = randColor();
	document.getElementById("lightMode").style.backgroundColor = randColor();
	document.getElementById("run").style.backgroundColor = randColor();
	document.getElementById("surprise").style.backgroundColor = randColor();

}

/*
  function hexadecimalAlph() {
  	




  }

  function getAlphaHexval() { 


  }
*/









setInterval(showClock, 1000);

function DOM(desiredElement) {
	return document.querySelector(desiredElement)
}

function showClock() {
	let clockContent = new Date();
	let month = clockContent.getMonth();
	let dayOfMonth = clockContent.getDate();
	let year = clockContent.getFullYear();
	let hour = clockContent.getHours();
	let dateContent = new Date(year, month, dayOfMonth);
	let date = clockContent.toDateString();
	let minute = clockContent.getMinutes();
	let second = clockContent.getSeconds();

	let amOrPm = "AM";

		if (hour > 12) {
			hour -= 12;
			amOrPm = "PM";

		}

		if ( hour == 0) {
			hour = 12;
			amOrPm = "AM";
		}

		if (hour < 10) {
			hour = "0" + hour;
		}

		if (minute < 10) {
			minute = "0" + minute;
		}
		if (second < 10) {
			second = "0" + second;
		}
	let currentTime = date + " " + hour + ":" + minute + ":" + second + " " + amOrPm;

	DOM('#clock').innerText = currentTime;
}

function eightBall(img) {
	let response = Math.floor(Math.random() * 12);
	response = "balls\\" + "ball" + response +".jpg";
	document.getElementById('ball').src = response;
}

