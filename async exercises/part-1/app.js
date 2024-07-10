let favNumber = 23;
let baseURL = "http://numbersapi.com";

// 1.
async function partOne() {
	let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
	console.log(data);
}
partOne();

// 2.
const favNumbers = [23, 32, 42];
async function partTwo() {
	let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
	console.log(data);
}
partTwo();

// 3.
async function partThree() {
	let facts = await Promise.all(
		Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
	);
	facts.forEach((data) => {
		$("body").append(`<p>${data.text}</p>`);
	});
}
partThree();
