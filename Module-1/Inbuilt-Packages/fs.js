//how to create file  using node js using fs module

const fs=require('fs');
const quote="Hello Everyone welcome to Node js"
fs.writeFileSync("Awesome.txt",quote);
fs.writeFileSync("Awesome.pdf",quote);