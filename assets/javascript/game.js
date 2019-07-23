/*psuedo code brah 
so, we know we that the user has to click one of the four images.
we also know were going to need to make each image generate a different number.
we will make the first generated number (the score youre trying to beat) 500 points 
each image will be able to generated from 0-220 points
we need for and else statements for example matching the your score and the random number
if your number matches or is above the first random generated number then we will add a point to the win, if not we add it to the loss */
//mathResults is the first number we generate.

var randomResult;
var win = 0;
var lost = 0;
var numOne = Math.floor(Math.random() * 220);
var numTwo = Math.floor(Math.random() * 220);
var numThree = Math.floor(Math.random() * 220);
var numFour = Math.floor(Math.random() * 220);
var numTotal = numOne + numTwo + numThree + numFour;
var STB = 500;

console.log(numOne);
console.log(numTwo);
console.log(numThree);
console.log(numFour);
console.log(numTotal);

// numOne = document.getElementById('imgone');
// numTwo = document.getElementById('imgtwo');
// numThree = document.getElementById('imgthree');
// numFour = document.getElementById('imgfour');
// numTotal = document.getElementById('totalscore');
// console.log(numOne);

$(document).ready(function () {

    $('.imgone').on("click", function () {
        alert("The number for this crystal is:" + " " + numOne);
    });

    $('.imgtwo').on("click", function () {
        alert("The number for this picture is:" + " " + numTwo);
    });

    $('.imgthree').on("click", function () {
        alert("The number for this crystal is:" + " " + numThree);
    });

    $('.imgfour').on("click", function () {
        alert("The number for this crystal is:" + " " + numFour);
    });

});

    for (var i =0; i < STB; i++) {
        numTotal[i];
        wins++
    }




//work here and below, trying to get anything to work.

$('.imgone').on("click", function () {
    console.log("I've been clicked!");
});

console.log(win);
console.log(lost)

