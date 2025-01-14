console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const section = document.createElement("section")
	section.id = "middle-earth"
	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0 ; i < lands.length; i++ ) {
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const landArticle = document.createElement("article")
		//   2b. gives each land article an `id` tag of the corresponding land name
		landArticle.id = lands[i]
		//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement("h1")
		landName.textContent = lands[i]
		//   2d. appends each land to the middle-earth section 
		landArticle.appendChild(landName)
		section.appendChild(landArticle)

	}
	

	// 3. append the section to the body of the DOM.
	document.body.appendChild(section)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	//how can I get, 'the shire'? how can i append a ul to it?
	// I can use queryselector
	//we can also use getElementById
	const theShire = document.getElementById("The-Shire")
	// console.log('this is the shire', theShire)

	const ulHobbits = document.createElement("ul")
	ulHobbits.id = "hobbits"


	// give each hobbit a class of `hobbit`

	for (let i = 0 ; i < hobbits.length; i++) {
		//create a list item for each hobbit
		const liHobbit = document.createElement("li")
		// give each li a class 'hobbit'
		liHobbit.className = "hobbit"
		//give each li some text
		liHobbit.textContent = hobbits[i]
		//append each hobbit to hobbits
		ulHobbits.appendChild(liHobbit)
	}

	theShire.appendChild(ulHobbits)

	console.log('theShire contents' , theShire)
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const theRing = document.createElement("div")
	theRing.id = "the-ring"

	// give the div a class of `'magic-imbued-jewelry'`
	theRing.className = "magic-imbued-jewelry"

	// add the ring as a child of `Frodo`
	//first we'll need to find the UL where frodo lives
	// console.log(document.querySelector("#hobbits"))
	const ulHobbits = document.querySelector("#hobbits")

	//next we'll need to figure out which li is frodo
	const hobbitsArray = ulHobbits.children
	// console.log("is this Frodo", hobbitsArray[0])
	const frodoLi = hobbitsArray[0]
	//then we can attach the ring to our frodo li
	frodoLi.appendChild(theRing)


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const morder = document.getElementById("Mordor")
	const ulBaddies = document.createElement("ul")
	ulBaddies.id = "baddies"

	for (let i = 0 ; i < baddies.length ; i++) {
		const liBaddie = document.createElement("li")
		liBaddie.className = 'baddie'
		liBaddie.textContent = baddies[i]
		ulBaddies.appendChild(liBaddie)
	}



	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
	morder.appendChild(ulBaddies)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const aside = document.createElement("aside")
	//get rivendell
	const rivendell = document.getElementById("Rivendell")

	// put an `unordered list` of the `'buddies'` in the aside
	const ulBuddies = document.createElement('ul')
	ulBuddies.id = "buddies"

	
	//loop through buddies putting them in the unorderled list
	for (let i = 0 ; i < buddies.length ; i++) {
		const liBuddies = document.createElement('li')
		liBuddies.className = 'buddy'
		liBuddies.textContent = buddies[i]
		ulBuddies.appendChild(liBuddies)
	}
	//put the unordered list into aside
	aside.appendChild(ulBuddies)
	//put asside into rivendell
	rivendell.appendChild(aside)
	


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const grabHobbits = document.getElementById('hobbits')
	const hobbitDestination = document.getElementById('Rivendell')

	//append the hobbits ul to rivendell
	hobbitDestination.append(grabHobbits)

	//console log to ensure they arrived. 
	console.log("Who is in Rivendell now?" , hobbitDestination)


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`

	const buddiesList = document.getElementById('buddies')
	const buddiesArray = buddiesList.children
	const theHeir = buddiesArray[3]
	console.log('Is this Strider?' , theHeir)


	//change the text of Strider to Aragorn
	theHeir.textContent = 'Aragorn'



}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const theFellowship = document.createElement('div')
	theFellowship.id = 'the-fellowship'
	const theElves = document.getElementById('Rivendell')
	theElves.appendChild(theFellowship)

	console.log('is the fellowship in rivendell?' , theElves)


	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	const buddyList = document.getElementsByClassName("buddy")
	
	const hobbitsList = document.getElementsByClassName("hobbit")
	const buddyArray = Object.values(buddyList)
	const hobbitsArray = Object.values(hobbitsList)

	for(let i=0 ; i<hobbits.length ; i++){
		theFellowship.appendChild(hobbitsArray[i])
		console.log(`${hobbitsArray[i].textContent} has joined your party`)
	}
	

	for(let i=0 ; i<buddies.length ; i++){
		theFellowship.appendChild(buddyArray[i])
		console.log(`${buddyArray[i].textContent} has joined your party`)
	}

	

	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const theFellowship = document.getElementById('the-fellowship')

	const theFellowshipArray = theFellowship.children

	// console.log(theFellowshipArray)

	//gandalf is the 4th element
	theFellowshipArray[4].textContent = 'Gandalf The White'
	// console.log(theFellowshipArray)

	theFellowshipArray[4].style.backgroundColor = "white" ;
	theFellowshipArray[4].style.border = "3px solid grey" ;

	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown

	console.log("The Horn of Gonder has been blown!")
	// Boromir's been killed by the Uruk-hai!
	console.log('Boromir has fallen to the Uruk-hai')
	// Remove `Boromir` from the Fellowship
	const theFellowship = document.getElementById('the-fellowship')
	const theFellowshipArray = theFellowship.children
	theFellowshipArray[8].remove();
	console.log('who is left in the fellowship', theFellowshipArray)

	//forgot to commit gandalf, making change to code to allow commit 10

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const mordor = document.getElementById('Mordor')
	const theFellowship = document.getElementById('the-fellowship')

	const theFellowshipArray = theFellowship.children
	console.log('where is frodo and sam', theFellowshipArray)
	
	mordor.appendChild(theFellowshipArray[0])
	mordor.appendChild(theFellowshipArray[0])

	console.log('did our brave adventurers make it' , mordor)
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div')
	mountDoom.id = 'mount-doom'
	mordor.appendChild(mountDoom)

	console.log('is there a volcano in Mordor?', mordor)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const mordor = document.getElementById('Mordor')
	const createGollum = document.createElement('div')
	createGollum.id = 'gollum'
	mordor.appendChild(createGollum)

	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const theRing = document.getElementById('the-ring')
	createGollum.appendChild(theRing)

	console.log('the creature has stolen the precious', mordor)


	// Move Gollum into Mount Doom
	const mountDoom = document.getElementById('mount-doom')
	mountDoom.appendChild(createGollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	const mordor = document.getElementById('Mordor')
	const mountDoom = document.getElementById('mount-doom')
	const gollum = document.getElementById('gollum')

	const mountDoomInhabitants = mountDoom.children
	mountDoomInhabitants[0].remove();

	console.log('is he dead yet' , mountDoom)


	// Move all the `hobbits` back to `the shire`
	const theShire = document.getElementById('The-Shire')
	const theFellowship = document.getElementById('the-fellowship')
	const mordorinhabitants = mordor.children
	const theFellowshipArray = theFellowship.children

	theShire.appendChild(mordorinhabitants[2])
	theShire.appendChild(mordorinhabitants[2])
	theShire.appendChild(theFellowshipArray[0])
	theShire.appendChild(theFellowshipArray[0])

	console.log('We are home' , theShire)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
