var readlineSync=require('readline-sync');

var num=readlineSync.question('May I know your star pattern length? ');

for(var i=1; i<=num; i++){
    console.log("*".repeat(i));
 }