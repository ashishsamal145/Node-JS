const fs=require("fs");
const { buffer } = require("stream/consumers");
// const user={
//     user:"Ashish",
//     age:20
// }

// const userData=JSON.stringify(user);
// console.log(userData);

// const userParse=JSON.parse(userData);
// console.log(userParse);

const movie={
    name:"The Avenger",
    type:"Hollywood"

}

const movieData=JSON.stringify(movie);
console.log(movieData);


fs.writeFile("movie.json",movieData,(err,movieData)=>{
    console.log("Successfully updated the data");
});

fs.readFile("movie.json",(err,data)=>{
    if(err)
    {
        throw err;
    }
    let output=JSON.parse(data);
    console.log(output.name+" "+output.type);
})

const bufferData=fs.readFileSync("movie.json").toString();
let data=JSON.parse(bufferData);
data.name="IRON MAN";

const infoJSON=JSON.stringify(data);
fs.writeFileSync("movie.json",infoJSON);