// ### 1st Assignment

var num = parseFloat(prompt("Enter a decimal number !"));
alert(num);
var greaterNum = Math.ceil(num);
alert(greaterNum);

var text = "This is my dummy text";
var slicedText = text.slice(0, 4);
alert(slicedText);

for (var i = 0; i < slicedText.length; i++){
    var rev = slicedText.charAt(slicedText.length - 1);
    alert(rev);
    rev--;
}

// ### 2nd Assignment

var inputValue = prompt("Enter course name ! ");
 inputValue = inputValue.toUpperCase();
console.log(inputValue);

var firstWord = inputValue.splice(0,5);
var secondWord = inputValue.splice(6,12);
var thirdtWord = inputValue.splice(13);