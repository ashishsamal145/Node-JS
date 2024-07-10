const util=require('util');
let text="Congratulation %s on her %dth birthday";
let result=util.format(text,"Little",34);
console.log(result);
const name="Ashish";
const age=30;
const formattedString=util.format("Name:  %s Age: %d",name,age);
console.log(formattedString);