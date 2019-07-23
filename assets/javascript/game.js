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
console.log(numTotal);

    var numOne = document.getElementById('#imgone');
    var numTwo = document.getElementById('#imgtwo');
    var numThree = document.getElementById('#imgthree');
    var numFour = document.getElementById('#imgfour');
    var numTotal = document.getElementById('#ytsi');
    
    if (numTotal > STB) {
        win++
        console.log(win);
    };

 