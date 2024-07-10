let a=parseInt(process.argv[2]);
let b=parseInt(process.argv[3]);
let operator=process.argv[4];
if(operator=="+")
{
    console.log("a+b=",a+b);
}
else if(operator=="-")
{
    console.log("a-b=",a-b);
}
else if(operator=="*")
{
    console.log("a*b=",a*b);
}
else if(operator=="/")
{
    console.log("a/b=",a/b);
}
else if(operator=="%")
{
    console.log("a%b=",a%b);
}