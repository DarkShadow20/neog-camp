var readlineSync=require('readline-sync');
var score=0;

var userHomeTown=readlineSync.question('May I know your HomeTown ? ');
if(userHomeTown=="HISAR"){
    console.log("You are right");
    score++;
    console.log(score);
}
else{
    console.log("You are wrong");
    score--;
    console.log(score)
}