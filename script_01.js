"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"

// startApp();
function startApp() {
	output(calculator(getNumber1(),getNumber2(),getOp()));
}

function getNumber1() {
	return parseInt(prompt("Zahl 1 eingeben:"));
}

function getNumber2() {
	return parseInt(prompt("Zahl 2 eingeben:"));
}

// module: operator input| Test:
output(getOp());
function getOp() {

	let op = prompt("Operator eingeben:");
	
	if (op == "+" || op == "-" || op == "*" || op == "/" || op == ":") {

		return op;
	
	} else {
	
		return ERROR_STR_GEN;
	
	}

}


// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
function calculator(a,b,op) {
	switch (op) {
		case "+": // addition
			return add(a,b);
		case "-": // subtraktion
			return subtract(a,b);
		case "*": // multiplikation
			return multiply(a,b);
		case ":": // divison
		case "/": // divison
			return divide(a,b);
		default:
			return ERROR_STR_GEN;
	}
}

// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(3,0));
function divide(a,b) {
	if (b == 0) { 
		return ERROR_STR_DIV;
	} 
	return a / b;
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
    return a * b; 
}

// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
function subtract(a,b) {
	return a - b;
}

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	return a + b;
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  