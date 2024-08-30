/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
var score=59;
var grade;
if(score>=90){
  grade="A";
  console.log(grade);
}else if(score>=80&&score<90){
  grade="B";
  console.log(grade);
}else if(score>=70&&score<80){
  grade="C";
  console.log(grade);
}else if(score>=60&&score<70){
  grade="D";
  console.log(grade);
}else{
    grade="F";
    console.log(grade);
}