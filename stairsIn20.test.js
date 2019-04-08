// How many stairs will Suzuki climb in 20 years?

// 1 take in an array - reject if not just numbers
// 2 take in an array - add up the numbers and output the sum
// 3 take in 2 d array add up all the numbers and output the sum
// 4 take in 2d array. add then * by 20 output the amswer

"use strict";

const stairsIn20 = require("./stairsIn20");

describe("stairsIn20", () => {
	it("should reject if input not numbers", () => {
		expect(stairsIn20([["a"], ["b"], ["c"]])).toEqual(
			"error - input not numerical"
		);
	});
	it("should accept numerical input and output a number x 20", () => {
		expect(stairsIn20([[1], [2], [2]])).toEqual(100);
	});
	it("should add up the numbers and output the sum", () => {
		expect(stairsIn20([[1], [2], [3]])).toEqual(120);
	});
	it("should take in 2d array add up the numbers and output the sum", () => {
		expect(stairsIn20([[1, 2, 3], [4, 5, 6]])).toEqual(420);
	});
	it("should take in 2d array add up the numbers and output the sum x 20", () => {
		expect(stairsIn20([[1, 2, 3], [4, 5, 6]])).toEqual(420);
	});
});
