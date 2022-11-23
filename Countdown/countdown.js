let endPoint = new Date("Dec 25, 2022 00:00:00").getTime();

function countdown() {
			var counter = setInterval(function() {

				let timer = document.querySelector('#timer');

				let currentTime = new Date().getTime();

				var timeLeft = endPoint - currentTime;
				let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
				let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
				let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

				document.getElementById('timer').innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S "

				if (timeLeft < 0) {
					clearInterval(counter);
					document.getElementById("timer").innerHTML = "Time is up!";
					var audio = new Audio('jb.mp3');
					audio.play();
				}

			}, 1000);
}