// function gym() {
//     var age = +prompt("Enter Your Age");
//     if (age >= 18) {
//         console.log("Welcome To Our Gym");
//     } else{
//         console.log("Try Again After 18+");
//     }
// }
// gym();


// function Age() {
//     var inputValue = document.getElementById('num').value;
//     document.getElementById('output').innerText = inputValue;
// }

// function printNumber() {
//     var age = document.getElementById("enterGym").innerHTML = +prompt("Enter Your Age");
//     if (age >= 18) {
//         document.getElementById("enterGym").innerHTML = "Welcome To My Website"
//     } else {
//         document.getElementById("enterGym").innerHTML = "Your Are Not Eligible for this Website"
//     }
// }

// function percentage() {
//     var chemMarks = +document.getElementById("chemMarks").value;
//     var phyMarks = +document.getElementById("phyMarks").value;
//     var urduMarks = +document.getElementById("urduMarks").value;
//     var MathMarks = +document.getElementById("MathMarks").value;
//     var compMarks = +document.getElementById("compMarks").value;

//     // document.getElementById("output").innerHTML = chemMarks , phyMarks , urduMarks , MathMarks , compMarks

//     var calc = chemMarks + phyMarks + urduMarks + MathMarks + compMarks
//     // document.getElementById("output").innerHTML = calc
//     var totalNum = +document.getElementById("obtNum").value;
//     var percent = calc / totalNum * 100;
//     document.getElementById("output").innerHTML = "You Got " + percent + "%"
// }
// function addMore() {
//     var heading = document.querySelector("#heading").innerHTML = prompt("Enter AnyThing You want")
// }

var userName = document.getElementById("userName")
var fatherName = document.getElementById("father-name")
var number = document.getElementById("number")
var age = document.getElementById("age")
var mail = document.getElementById("mail")
var city = document.getElementById("city")

// var output = document.getElementById("card")

function report() {
    document.getElementById("cardName").innerHTML = userName.value
    document.getElementById("cardFatherName").innerHTML = fatherName.value
    document.getElementById("cardNumber").innerHTML = number.value
    document.getElementById("cardage").innerHTML = age.value
    document.getElementById("cardmail").innerHTML = mail.value
    document.getElementById("cardcity").innerHTML = city.value
}