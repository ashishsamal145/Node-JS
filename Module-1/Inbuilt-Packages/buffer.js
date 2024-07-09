var buffer1=Buffer.from("123456789");
var buffer2=Buffer.from("hello");
console.log(buffer1);
console.log(buffer2);
console.log(buffer1.toString());
console.log(buffer2.toString());

var result=buffer2.copy(buffer1,3);
console.log(result);
console.log(buffer1);
console.log(buffer2);
console.log(buffer1.toString());
console.log(buffer2.toString());

console.log(Buffer.concat([buffer1,buffer2]),toString());
console.log(buffer1.equals(buffer2));
var buffer3=Buffer.from("Hello");
console.log(Buffer.compare(buffer1,buffer2));
console.log(Buffer.compare(buffer1,buffer3));
console.log(Buffer.compare(buffer2,buffer3));
console.log(Buffer.compare(buffer3,buffer1));
console.log(Buffer.compare(buffer3,buffer2));

