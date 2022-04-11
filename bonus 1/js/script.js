for (let i = 1; i <= 100; i++) {
	let result;
	if (i % 3 === 0) {
		result = "Fizz";
		if (i % 5 === 0) {
			result += "Buzz";
		}
	} else if (i % 5 === 0) {
		result = "Buzz";
	} else {
		result = i;
	}
	console.log(result);

	const output = document.createElement("div");
	output.innerHTML = result;
	console.log(output);

	document.getElementById("container").appendChild(output);
}
