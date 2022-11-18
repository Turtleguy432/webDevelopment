function run(outputLOC) {

	let selectionArray = getNewArray();

	let a = " ";
	for (let i = 0; i < selectionArray.length; ++i){
		a = a + selectionArray[i];
		if (i === selectionArray.length - 1) {
			continue;
		} else {
			a = a + ", ";
		}
	}
	let selectionSortOutput = document.getElementById('unsortedSelection');
	selectionSortOutput.textContent = a;


	selectionSort(selectionArray);
	a = " ";
	for (let i = 0; i < selectionArray.length; ++i){
		a = a + selectionArray[i];
		if (i === selectionArray.length - 1) {
			continue;
		} else {
			a = a + ", ";
		}
	}


	selectionSortOutput = document.getElementById('selection');
	selectionSortOutput.textContent = a;

	let insertionArray = getNewArray();
	a = " ";
	for (let i = 0; i < insertionArray.length; ++i){
		a = a + insertionArray[i];
		if (i === insertionArray.length - 1) {
			continue;
		} else {
			a = a + ", ";
		}
	}

	let insertionSortOutput = document.getElementById('unsortedInsertion');
	insertionSortOutput.textContent = a;


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

	insertionSortOutput = document.getElementById('insertion')
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

function printUnsorted(array, LOC) {
	let a = " ";
	for (var i = 0; i < array.length; ++i) {
		a = a + array[i];
		if (i === array.length) {
			return a;
		} else {
			a = a + ", ";
		}
}
	


	
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
	let link = DOM('#colorSheet');
	
	link.href = 'css/lightMode.css';
}

function darkMode() {
	let link = DOM('#colorSheet');
	
	link.href = 'css/darkMode.css';
}

function surprise() {
	let headers = DOM('.sectionHeaders');
	headers.style.color = randColor();
	let content = DOM('.sectionContent');
	content.style.color = randColor();
	let buttons = DOM('bar');
	buttons.style.backgroundColor = randColor();

}



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
	let clear = DOM('#question');
	clear.value = '';
}

function randQuote() {
	let quotes = [
		'Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.  —Jack Handey',
		'Clothes make the man. Naked people have little or no influence in society. —Mark Twain',
		'Before you marry a person, you should first make them use a computer with slow Internet to see who they really are. —Will Ferrell', 
		'The greatest glory in living lies not in never falling, but in rising every time we fall.',
		'The way to get started is to quit talking and begin doing.',
		'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dog – which is living with the results of other peoples thinking.',
		'If life were predictable it would cease to be life, and be without flavor.',
		'If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough',
		'If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.',
		'Life is what happens when youre busy making other plans', 
		'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
		'When you reach the end of your rope, tie a knot in it and hang on',
		'Always remember that you are absolutely unique. Just like everyone else.',
		'Dont judge each day by the harvest you reap but by the seeds that you plant.',
		'The future belongs to those who believe in the beauty of their dreams',
		'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
		'The best and most beautiful things in the world cannot be seen or even touched they must be felt with the heart.',
		'It is during our darkest moments that we must focus to see the light',
		'Whoever is happy will make others happy too.',
		'Do not go where the path may lead, go instead where there is no path and leave a trail.',
		'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
		'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
		'Always remember that you are absolutely unique. Just like everyone else.',
		'You will face many defeats in life, but never let yourself be defeated.',
		'The greatest glory in living lies not in never falling, but in rising every time we fall.',
		'In the end, its not the years in your life that count. Its the life in your years.',
		'Never let the fear of striking out keep you from playing the game.',
		'Life is either a daring adventure or nothing at all.',
		'Many of lifes failures are people who did not realize how close they were to success when they gave up',
		'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
		'That which does not kill us makes us stronger.',
		'Remember no one can make you feel inferior without your consent.',
		'Your worth consists in what you are and not in what you have.',
		'Be yourself everyone else is already taken',
		'This above all to thine own self be true.',
		'Be who you are and say what you feel, because those who mind dont matter and those who matter dont mind.',
		'Behind every great man is a woman rolling her eyes.',
		'Adults are always asking children what they want to be when they grow up because theyre looking for ideas',
		'A perfect parent is a person with excellent child-rearing theories and no actual children.',
		'Just be good and kind to your children. Not only are they the future of the world, theyre the ones who can sign you into a home.',
		'When I was a kid my parents moved a lot, but I always found them.',
		'If you are not yelling at your kids, you are not spending enough time with them.',
		'When your mother asks, Do you want a piece of advice? it is a mere formality. It doesnt matter if you answer yes or no. Youre going to get it anyway',
		'Kids are expensive, I didnt even realize how broke I was until last year someone stole my identity and it ruined her life',
		'I want my children to have all the things I couldnt afford. Then I want to move in with them.',
		'There is no such thing as fun for the whole family.',
		'There are two classes of travel—first class and with children.',
		'Happiness is having a large, caring, close-knit family in another city.',
		'When your children are teenagers, its important to have a dog so that someone in the house is happy to see you.',
		'A dog teaches a boy fidelity, perseverance, and to turn around three times before lying down.',
		'If dogs could talk, it would take a lot of fun out of owning one.',
		'If you think dogs cant count, try putting three dog biscuits in your pocket and then giving Fido only two of them.',
		'The cat could very well be mans best friend but would never stoop to admitting it',
		'Cats are smarter than dogs. You cant get eight cats to pull a sled through snow.',
		'In order to maintain a well balanced perspective, the person who has a dog to worship him should also have a cat to ignore him.',
		'Thousands of years ago, cats were worshipped as gods. Cats have never forgotten this',
		'Friends are Gods way of apologizing to us for our families.',
		'The statistics on sanity are that one out of every four Americans is suffering from some form of mental illness. Think of your three best friends. If theyre okay, then its you',
		'The holy passion of friendship is of so sweet and steady and loyal and enduring a nature that it will last through a whole lifetime, if not asked to lend money.',
		'Always forgive your enemies, nothing annoys them so much.',
		'The Bible tells us to love our neighbors, and also to love our enemies probably because they are generally the same people.',
		'If you cant beat them, arrange to have them beaten',
		'If you want to know what God thinks of money, look at the people he gave it to.',
		'Before borrowing money from a friend, decide which you need most.',
		'Never keep up with the Joneses. Drag them down to your level. Its cheaper',
		'People say money is not the key to happiness, but I have always figured if you have enough money, you can have a key made',
		'Anybody who tells you money cant buy happiness never had any',
		'Misers are no fun to live with, but they make great ancestors.',
		'Anyone can do any amount of work, provided it isnt the work he is supposed to be doing at that moment.',
		'I like work; it fascinates me. I can sit and look at it for hours.',
		'Doing nothing is very hard to do. You never know when youre finished.',
		'Hard work never killed anybody, but why take a chance?',
		'Dont go around saying the world owes you a living. The world owes you nothing. It was here first.',
		'All Ive ever wanted was an honest weeks pay for an honest days work',
		'A college education is one of the few things a person is willing to pay for and not get.',
		'In real life, I assure you, there is no such thing as algebra.',
		'True terror is to wake up one morning and discover that your high school class is running the country.',
		'The secret of staying young is to live honestly, eat slowly, and lie about your age.',
		'You are only young once. After that you have to think up some other excuse.',
		'By the time youre 80 years old you’ve learned everything. You only have to remember it',
		'You can’t believe everything you hear—but you can repeat it.',
		'A gossip is a person who creates the smoke in which other people assume theres fire',
		'The only thing worse than being talked about is not being talked about.',
		'If you cant be kind, at least be vague',
		'It’s so much easier to suggest solutions when you dont know too much about the problem',
		'Any fool can criticize, condemn and complain—and most do',
		'People cant drive you crazy if you dont give them the keys',
		'Sometimes you lie in bed at night and you dont have a single thing to worry about. That always worries me!',
		'Keep your temper. Nobody else wants it',
		'If God did not intend for us to eat animals, then why did he make them out of meat',
		'Never eat more than you can lift.',
		'When the waitress asked if I wanted my pizza cut into four or eight slices, I said, Four. I dont think I can eat eight',
		'Not all chemicals are bad. Without hydrogen and oxygen, for example, there would be no way to make water, a vital ingredient in beer.',
		'I always cook with wine. Sometimes I even add it to the food.',
		'Always do sober what you said you’d do drunk. That will teach you to keep your mouth shut.',
		'All the things I like to do are either immoral, illegal, or fattening',
		'Health nuts are going to feel stupid someday, lying in hospitals dying of nothing',
		'Be careful about reading health books. You may die of a misprint.',
		'It is useless to try to hold a person to anything he says while hes madly in love, drunk, or running for office.',
		'The only time some fellows are ever seen with their wives is after they’ve been indicted.',
		'If our Founding Fathers wanted us to care about the rest of the world, they wouldnt have declared their independence from it',
		'If at first you dont succeed, try, try again. Then quit. Theres no use being a damn fool about it.',
		'It is not enough to succeed. Others must fail.',
		'Thankfully, perseverance is a great substitute for talent.',
		'Some cause happiness wherever they go others whenever they go',
		'Whoever said money cant buy happiness simply didnt know where to go shopping',
		'One of the keys to happiness is a bad memory',
		'A bore is the kind of man who, when you ask him how he is, he tells you.',
		'She never lets ideas interrupt the easy flow of her conversation.',
		'By the time someone says, to make a long story short, its too late.'];
	var printedQuote = Math.floor(Math.random() * 100);
	document.getElementById('quoteBox').innerHTML = quotes[printedQuote];
}

const randomNumber = Math.floor(Math.random() * 100);

function numGame() {

	const previousGuess = DOM('#lastResult');
	const hint = DOM('#lowOrHi');

	const submitButton = DOM('#guessSubmit');
	const answerBox = DOM('#playerGuess');

  const userGuess = Number(answerBox.value);
  answerBox.value = '';

  if (userGuess === randomNumber) {
    previousGuess.textContent = 'Correct!'
    hint.textContent = '';
  } else {
    previousGuess.textContent = 'Wrong, Try Again';
    if (userGuess < randomNumber) {
      hint.textContent = userGuess + ' is too low!';
    } else if (userGuess > randomNumber) {
      hint.textContent = userGuess + ' is too high';
    }
  }
}
