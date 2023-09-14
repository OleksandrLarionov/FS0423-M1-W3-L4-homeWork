const tabellone = document.getElementById("tabellone");
const bottone = document.getElementById("btn");
const arrayCells = [];
const extractedNumbers = [];

const numberCells = () => {
	for (let i = 1; i <= 76; i++) {
		arrayCells.push(i);
	}
};
numberCells();

const createCells = () => {
	for (let i = 0; i < arrayCells.length; i++) {
		const numeroCella = arrayCells[i];
		const divCell = document.createElement("div");
		divCell.classList.add("cella");

		divCell.innerText = `${numeroCella}`;
		tabellone.appendChild(divCell);
	}
};
createCells();

const extractRandom = () => {
	return (randomNumber = Math.floor(Math.random() * arrayCells.length));
};

const colorCels = (number) => {
	const myCell = document.getElementsByClassName("cella")[number];
	if (myCell)
		do {
			myCell.classList.add("peppa");
			myCell.classList.remove("cella");
		} while (number === parseInt(myCell.innerText));
};

bottone.addEventListener("click", () => {
	let randomNumber = extractRandom();
	arrayCells.splice(arrayCells.indexOf(randomNumber), 1);
	do {
		colorCels(randomNumber);
		extractedNumbers.push(randomNumber);
	} while (!extractedNumbers.includes(randomNumber));
});
