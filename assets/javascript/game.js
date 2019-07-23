/*psuedo code brah 
so, we know we that the user has to click one of the four images.
we also know were going to need to make each image generate a different number.
we also need another number generated for the score youre trying to beat.
we will make the first generated number (the score youre trying to beat) anywhere from 400-700 points 
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

console.log(numOne);
console.log(numTwo);
console.log(numThree);
console.log(numFour);
console.log(numTotal);

    var imgOne = $("<img>");
        imgOne.attr({
            "class": 'imgOne',
            "data-random": numOne
        });
        $("#cltwo").append(imgOne);
        console.log($0);