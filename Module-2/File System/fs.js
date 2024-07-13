const fs=require('fs')
fs.open("./cool.txt",(err,file)=>{
    if(err)
    {
        console.log(err);
    }
    else
    console.log("File opened successfully");
})

// -------------------------------------------------------------------

fs.stat("./cool.txt",(err,stats)=>{
    
        console.log(stats.isFile());
        console.log(stats.isDirectory());
        console.log(stats.isCharacterDevice());
        console.log(stats.isBlockDevice());
        console.log(stats.isSymbolicLink());
    
    
})

// -------------------------------------------------------------------


fs.writeFile("writefile.txt","This is writeFile() of fs",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Data written successfully");
    }
})

// -------------------------------------------------------------------

fs.readFile("./cool.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error: ",err);
    }
    else
    {
        console.log("the content of the file is ",data);
    }

})

// -------------------------------------------------------------------

const quote="\nLive More worry less";

fs.appendFile("./cool.txt",quote,(err)=>{
    console.log("Completed appending data");
})

// -------------------------------------------------------------------

fs.unlink("./toremove.txt",(err)=>{
    if(err)
    {
        console.log("the file doesnot exist");
        console.log(err);
    }
    else
    {
        console.log("file deleted successfully");
    }
})

// -------------------------------------------------------------------
