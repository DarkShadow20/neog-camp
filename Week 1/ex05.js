var readlineSync=require('readline-sync');

var userAge=readlineSync.question('May I have your age ? ');
if(userAge>25){
    console.log("You are right");
}
else{
    console.log("You are wrong");
}