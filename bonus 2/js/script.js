//genera numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
	let result;
	//stabilisci se sono divisibile per 3, per 5 o per entrambi e assegna output in base al risultato
	if (i % 3 === 0) {
		result = "fizz";
		if (i % 5 === 0) {
			result += "buzz";
		}
	} else if (i % 5 === 0) {
		result = "buzz";
	} else {
		result = i;
	}
	console.log(result);

	//crea div per ogni numero generato
	const output = document.createElement("div");
	//assegna classi in base al risultato
	if (result === "fizz" || result === "buzz" || result === "fizzbuzz") {
		output.innerHTML = `<div class="box ${result}">${result}</div>`;
	} else {
		output.innerHTML = `<div class="box i">${result}</div>`;
	}
	console.log(output);

	document.getElementById("container").appendChild(output);
}
