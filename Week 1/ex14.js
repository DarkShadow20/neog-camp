var readlineSync=require("readline-sync");

var score=0;
var userName=readlineSync.question("May I know your name ? ");
console.log("Welcome "+ userName +" to DO YOU KNOW KUNAL GUPTA? ");

function play(question, answer){
    var userAnswer=readlineSync.question(question);
    if(userAnswer==answer){
        console.log("right!");
        score=score+1;
    }
    else{
        console.log("wrong");
    }
    console.log("current score: ", score);
    console.log("----------------");
}
play("Where do I live", "Hisar");