function run() {
	//Prototypes a new Array, and creates a new object until the specified number of objects have been created
	let alivePlayers = new Array (10);
	for (let i = 0; i < alivePlayers.length; ++i) {
		var playerdata = {
			name: 'Player ' + i,
			game: 'TTD',
			kills: 0,
			deaths: 0,
			hp: 20,
			speed: 5 + (2 * i),
			accuracy: Math.floor(Math.random() * 100),
			armor: (i * 4) - (i * 2),
			damage: (i * 3) + 4,

		}

	//Takes the object places it at i, then loops until all of alivePlayers has been populated
		alivePlayers[i] = playerdata;
	}


	//Loops combat until only one player remains
	do{

		let result = '';
	//Starts a battle between 2 random players in the array, while also checking to make sure P2 is not P1	
		let p1 = randomPlayer(alivePlayers.length);
		let p2 = randomPlayer(alivePlayers.length);
			while (p2 === p1) {
				p2 = randomPlayer(alivePlayers.length);
			}
		let attack = alivePlayers[p1];
		let defense = alivePlayers[p2];

	//Checks the result of the battle. If no damage was done, nothing changes, but if any was damage was dealt, lowers the defenders HP	
		let damage = isHit(attack, defense);
		if (damage > 0) {
			defense.hp -= damage;
			if (defense.hp > 0 ) {
				result = defense.name + ' has ' + defense.hp + ' hp left';
			}
		//After combat is completed, checks if the defender is dead, and if true, removes them from the array
			if (checkHP(defense) === true) {
				alivePlayers.splice(p2, 1);
				result = defense.name + ' is dead, only ' + alivePlayers.length + ' remain';				
			} 
		
		}else {
				result = attack.name + ' attacked ' + defense.name + ' and missed';
		}

		//Creates an element with the given content, and prints to the screen
		document.getElementById('result').innerHTML += result +' <br> <br>';
	} while (alivePlayers.length > 1);

//Gets the name of the 1 remaining player and displays it to the screen
	let winner = alivePlayers[0];
	document.getElementById('winningText').textContent = winner.name + ' IS THE WINNER!!!';

}

//Takes a random player out of the ones left alive and returns it to run()
//Works correctly
function randomPlayer(remaining) {
	return Math.floor(Math.random() * remaining);
}


function isHit(attack, defense, sendResult) {
	let damage = 0;
	if (attack.accuracy < defense.speed || attack.damage < defense.armor) {
		return 0;
	} else if (attack.accuracy >= 90) {
		damage = (attack.damage * 2) - defense.armor;
		 document.getElementById('result').innerHTML += "CRITICAL HIT! " + defense.name + ' gets hit for ' + damage + ' damage by ' + attack.name + ', ';
		return damage;
	} else {
		damage = attack.damage - defense.armor;
		 document.getElementById('result').innerHTML += attack.name + ' shot ' + defense.name + ' for a total of ' + damage + ' damage, ';
		return damage;
	}

}

//Works as intended
function checkHP(defense) {
	let isDead = false;
	if (defense.hp <= 0) {
		isDead = true;
	}
	return isDead;
}

