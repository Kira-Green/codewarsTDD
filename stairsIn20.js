function stairsIn20(s) {
	let output = 0;
	s.map(arr => {
		return arr.map(num => {
			if (typeof num !== "number") {
				output = "error - input not numerical";
			} else {
				output += num;
			}
		});
	});
	if (typeof output === "number") {
		return output * 20;
	} else {
		return output;
	}
}

module.exports = stairsIn20;
