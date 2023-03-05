// var d = new Date(getDay()), m = new Date(), y = new Date();
// var dateOfBirth = d.getDate();
// var monthOfBirth = m.getMonth();
// var yearOfBirth = y.getFullYear();
// var name = prompt("Enter your name !");
// var dOB = prompt("Enter your date of birth !", dateOfBirth);
// var mOB = prompt("Enter your month of birth !", monthOfBirth);
// var yOB = prompt("Enter your year of birth !", yearOfBirth);

// console.log("Hello",name,"Good Morning");
// console.log("date of birth : ",dOB);
// console.log("month of birth : ",mOB);
// console.log("year of birth : ",yOB);

// // console.log("Your Date of birth is : ",dOB);
// // console.log("Your detailed age is : ",yOB);
// // console.log("Your age in Days is : ",dOB);
// // console.log("Your Date of birth is : ", dOB);

// // console.log("Happy Birthday, ",name,"Today is your ",year,"th Birthday!");

var date = new Date();
var dateOfBirth = prompt("Enter your date of birth !", date);
var dOB = dateOfBirth.setDate(dateOfBirth);
alert(dOB.getDate());