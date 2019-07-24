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
var numOne = 2;
var numTwo = 5;
var numThree = 7;
var numFour = 10;
var numTotal = numOne + numTwo + numThree + numFour;
var total = 0;
var STB = 500;

console.log(numOne);
console.log(numTwo);
console.log(numThree);
console.log(numFour);
console.log("total", numTotal);

// numOne = document.getElementById('imgone');
// numTwo = document.getElementById('imgtwo');
// numThree = document.getElementById('imgthree');
// numFour = document.getElementById('imgfour');
// numTotal = document.getElementById('totalscore');
// console.log(numOne);

$(document).ready(function () {


    $('.Wins').text("wins: " + win);
    $('.Losses').text("losses: " + lost);
    console.log(win);
    console.log(lost)
    

    $('.imgone').on("click", function () {
        $('.totalScore').text('totalScore' + numOne);
        alert("This Crystal Value Is: " + numOne);
    });

    $('.imgtwo').on("click", function () {
        $('.totalScore').text('totalScore' + numTwo);
        alert("This Crystal Value Is: " + numTwo);
    });

    $('.imgthree').on("click", function () {
        $('.totalScore').text('totalScore' + numThree);
        alert("This Crystal Value Is:: " + numThree);
    });

    $('.imgfour').on("click", function () {
        $('.totalScore').text('totalScore' + numFour);
        alert("This Crystal Value Is: " + numFour);
    });

    if (total >= STB) {
        win++
    } else {
        lost++
    }
    console.log("real total " + total);

});