        //  Make a Calculator

var a = parseInt(prompt("Enter a number : "));
var b = parseInt(prompt("Enter another number : "));
var c;
var operation = prompt("Enter any operator(+,-,*,/) : ");

if (operation == "+") {
    c = a + b;
} else if (operation == "-") {
    c = a - b;
} else if (operation == "*") {
    c = a * b;
} else if (operation == "/") {
    c = a / b;
} else { 
    alert("Invalid input!")
}

alert(a + operation + b + " = " + c)


    // Second Assignment - Make a Percentage Calculator



var English = parseInt(prompt("Enter English numbers : "));
var Maths = parseInt(prompt("Enter Maths numbers : "));
var Physics = parseInt(prompt("Enter Physics numbers : "));
var Chemistry = parseInt(prompt("Enter Chemistry numbers : "));
var Computer_Science = parseInt(prompt("Enter Computer Science numbers : "));
var obtained_marks = English + Maths + Physics + Chemistry + Computer_Science;
var totalMarks = 500;
var percentage = obtained_marks * 100 / totalMarks 
alert("Percentage = "+ percentage + "%")
