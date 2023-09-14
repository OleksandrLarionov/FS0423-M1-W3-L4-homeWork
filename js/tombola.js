const tabellone = document.getElementById("tabellone");
const arrayCells = [];

const numberCells = () => {
	const arrayCells = Array.from(tabellone);
	for (let i = 0; i < 76; i++) {
		arrayCells.push(i);
	}
	console.log(arrayCells);

	tabellone.innerHTML = arrayCells
		.map(
			(numeri) => `<div class="numberCell">${numeri + 1}</div>

`
		)
		.join("");

	const btn = document.getElementById("btn");
	btn.addEventListener("click", (e) => {
		console.log("premo il bottone");

		const randomNumber = Math.floor(Math.random() * arrayCells.length);

		for (let i = 0; i < arrayCells.length; i++) {
			const backgroundCell =
				tabellone.querySelectorAll(".numberCell")[randomNumber];

			if (randomNumber === arrayCells[i - 1]) {
				console.log(backgroundCell);
				backgroundCell.classList.add("peppa");

				console.log("coincide", arrayCells[i]);
			}
		}
	});
	console.log(arrayCells);
};

numberCells();
