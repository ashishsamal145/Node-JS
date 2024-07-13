// callback in Synchronous and Asynchronous 

//Asynchronous =writeFile(0)
const fs=require('fs')
// function callMe()
// {
//     console.log("I am a callback function");
// }
// function user(name,callback)
// {
//     console.log(`Hi I am ${name}`);
//     callback();
// }

// user("jack",callMe);

// const [,,noOfFiles]=process.argv;

// const quote="No beauty shies that that of a good heart😊";

// for(let i=1;i<=noOfFiles;i++)
// {
//     fs.writeFile(`./backup/text-${i}.html`,quote,()=>{
//         console.log(`Completed writing file text-${i}.html`)
//     });
// }


// Synchronous=fs.writeFileSync()

const [,,noOfFiles]=process.argv;

const quote="No beauty shies that that of a good heart😊";

for(let i=1;i<=noOfFiles;i++)
{
    fs.writeFileSync(`./backup/text-${i}.txt`,quote);
    console.log(`Completed writing file text-${i}.txt`)
    
}


//callback abstraction

function fetchData(callback)
{
    setTimeout(()=>{

        const data={message:"data fetched successfully"};
        callback(null,data);
    },3000);
}

function handleData(err,data)
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(data);
    }
}

fetchData(handleData);


//callback chaining

// const cartItems = ["shirts", "pants", "shoes", "watch"]

// api.createOrder(cartItems, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.orderSection()
//         })
//     })
// })
// inversion of control => callback hell => pyramid of doom

//callback chaining


function timeToDelay(sec, callback) {
    setTimeout(callback, sec * 2000)
}

console.log("Start Timer")

timeToDelay(2, () => {
    console.log("Two seonds")
    timeToDelay(3, () => {
        console.log("Three seonds")
        timeToDelay(4, () => {
            console.log("Four seonds")

        })
    })
})
