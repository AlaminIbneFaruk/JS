/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
var myscore,friendscore;
myscore=89;
friendscore=39;
if(!(myscore<80)){
  if(!(friendscore<80)){
    console.log("then go for a lunch");
  }
  else{
    if(!(friendscore<60)){
      console.log("Good luck! next time hopefully.");
    }
    else{
      if(!(friendscore<40)){
        console.log("keep your friend's message unseen");
      }else{
        console.log("block the friend");
      }
    }
  }
}else{
  console.log('go home quietly');
}