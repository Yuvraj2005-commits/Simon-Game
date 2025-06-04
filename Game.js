var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];


var userClickedPattern = [];

var level = 0;
var started = false;

function nextSequence(){

    level++;
    $("h1").text("Level " + level);
    var randnum = Math.random() * 4;
    randnum = Math.floor(randnum);
    console.log(randnum);
    
    var randomChosenColour = buttonColours[randnum];
     
    // gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    
    return randomChosenColour;
}


$(".btn").on("click", function(){
   
    var userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    
   
    userClickedPattern.push(userChosenColour);
   
    console.log(userClickedPattern);
    
    $("#" + userChosenColour).fadeOut(100).fadeIn(100);
    playbeat(userChosenColour);
    animatePress(userChosenColour);
});



$(document).keypress(function() {
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
})

function playbeat(userChosenColour){
    var audio = new Audio("sounds/" + userChosenColour + ".mp3");
    audio.play();
}

function animatePress(cureentcolor){
    $("#"+cureentcolor).addClass("pressed");
    setTimeout(function(){
        $("#"+cureentcolor).removeClass("pressed");
    },100);
}                       

// This duplicate button click handler can be removed since we already have the .btn handler above
// $("button").click(function(){
//     console.log("clicked");
// });
