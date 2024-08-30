/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age=69;
var fare=800;
var discount;
if(age<10){
  console.log("ticket is free!");
}else if(age>=60){
  discount=15/100;
  fare-=fare*discount;
  console.log("your fare is "+fare);
}else{
  console.log("your fare is "+fare);
}