var readlineSync=require('readline-sync');
var score=0;

function questionnaire(question, answer){
    var userAnswer=readlineSync.question( question);
    if(userAnswer==answer){
        console.log("You are right");
        score=score+1;
        console.log(score)
    }
    else{
        console.log("You are wrong");
        score=score+1;
        console.log(score);
    }
}

questionnaire("Name of you school ?", "OPJMS");