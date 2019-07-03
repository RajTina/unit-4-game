
$(document).ready(function(){

var crystal = {
crystalOne:{
    name : "crystalOne",
    value: 0
}, 
crystalTwo:{
    name : "crystalTwo",
    value: 0
},
crystalThree:{
    name : "crystalThree",
    value : 0
},
crystalFour:{
    name : "crystalFour",
    value: 0
}
};

var win = 0;
var loses = 0;
var currentScore = 0;
var targetScore = 0;

//function
//reset the current score and set a new target score(between 20 and 80)

//helper function for getting random number
var getRandom = function (min, max) {
    return Math.floor (Math.random () * (max-min + 1)) +min;
}

//start the game and restart the game
var startGame = function() {
//reset the current score
    var currentScore = 0;

    targetScore = getRandom(19,120);

    crystal.crystalOne.value = getRandom(1,12);
    crystal.crystalTwo.value = getRandom(1,12);
    crystal.crystalThree.value = getRandom(1,12);
    crystal.crystalFour.value = getRandom(1,12);
    
//change the html to reflect all of these changes
$("#yourScore").text(currentScore);
$("#targetScore").text(targetScore);
// console.log(currentScore);

// console.log("..............................")
// console.log("targetScore: "+ targetScore);
// console.log("crystalOne: " + crystal.crystalOne.value + "| crystalTwo: " + crystal.crystalTwo.value + "|crystalThree: " + crystal.crystalThree.value + "|crystalFour: " + crystal.crystalFour.value);
// console.log("..............................")
}

var addValues = function(crystal){
    currentScore = currentScore + crystal.value;
    $("#yourScore").text (currentScore);

    //call the checkWin function
    checkWin();
    //console.log ("yourScore:" + currentScore);

}
//check if user won or lost reset the game
var checkWin = function(){
//check if current score is larger then target score
if (currentScore > targetScore){
    alert("sorry you lost !");
   // console.log("you lost");

     //add to loss
     loses++;
     $("#loses").text(loses);
    currentScore = 0;
     //restart the game
     startGame();
}
else if (currentScore === targetScore){
    alert ("congratulations! you won!");
    //console.log("you won");
    //add to win
    win++;
    $("#win").text(win);

    //restart the game 
    startGame();
   
    }

}

startGame();

$('#crystalOne').click(function () {
   addValues(crystal.crystalOne);
});

$('#crystalTwo').click(function () {
    addValues(crystal.crystalTwo);
});

$('#crystalThree').click(function () {
    addValues(crystal.crystalThree);
});

$('#crystalFour').click(function () {
    addValues(crystal.crystalFour);
});

})
//speudo coding
//craete a random number for total value less then 100.
// a game of 4 crystal, 
//each crystal will have random value which should less than the total, betweeen 1-80
//a new random number should be generate every single time we win or lost
//upon clicking a crystal add the value to user total.
//if the user total greater than random total add to losses
//if the user total matches the random total value than add to wins.
//have a reset or start buttton upon clicking this button genarate random totaled value and crystal values.
//when clicking any crystal,  it should adding with the previous result until it equals the total score.
//if it is greater than the random result, we decrement a lost counter
//if it is equal, than we increment a win counter
