//Exercise 1
function printsTriangle() {
	for (var asc = "#"; asc.length <= 7; asc +="#") {
		console.log(asc);
	}
}

// Book solution
for (var line = "#"; line.length < 8; line += "#") 
	console.log(line)

// #
// ##
// ###
// ####
// #####
// ######
// #######

var char ="#######";
for (var a = char.length; a > 0; a--) {
	list = char.substring(0, a);
	console.log(list); 
}
// #######
// ######
// #####
// ####
// ###
// ##
// #

//Exercise 2 - FizzBuzz
for(var num = 1; num <=100; num++){
	var result = "";
	if (num % 3 === 0) result += "fizz"
	if (num % 5 === 0) result += "buzz"
	if (num.length === 0) result += ""
}

//Exercise 3 - ChessBoard 
var result = "";
for(var hori = 0; hori < 9; hori++) {	
	if (hori % 2 == 0) result = "01010101"
	if (hori % 2 == 1) result = "10101010"
	console.log(result);
}
// Book solution
var size = 8;
var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);

//Growing Functions - Solution 1
function printFarmInventory(cows, chicken) {
	var cowString = String(cows);
	while(cowString.length < 3)
		cowString += "0" + cowString
	console.log(cowString + " Cows");

	var chickenString = String(chicken);
	while(chickenString.length < 3)
		chickenString = "0" + chickenString
	console.log(chickenString + " Chickens");	
}

//Growing Functions - Solution 2
function zeroPad(number, width) {
	var numString = String(number);
	while(numString.length < width)
		numString = "0" + numString
	return numString;
}

function printInventory(animalT, num, wid) {
	console.log(zeroPad(num,wid) , animalT);
}

//Exercise 4 - Minimum
function minNum(n1, n2) {
	if (Number(n1) > Number(n2)) 
		console.log(n2);
	else (Number(n1) < Number(n2)) 
		console.log(n1);
}