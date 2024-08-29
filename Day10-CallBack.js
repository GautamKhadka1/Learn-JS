function calculate(x, y, callback)//this is asynchronous callback 
// call back is simply used to pass function as parameter to function.
{
    setTimeout(function(){
        console.log("Entered Values are "+x+" and "+y);
        callback(x,y);

    }, 1000)
}

function sum(x,y)
{
    let z = x+y;
    console.log("The sum of these two number is " + z);
}
function multiply(x,y)
{
    let z = x*y;
    console.log("The multiple of these two number is "+ z);
}
calculate(5,6,sum);
calculate(10,6,multiply);

//real life example
function getUserData(uid, callback)
{
    setTimeout(function(){
        const data = {
            1:{id:1, name:"Gautam"},
            2:{id:2, name:"Hari"},
            3:{id:3, name:"Shyam"}
        };
        const user = data[uid];
        if(user)
        {
            callback(null, user);

        }
        else
        {
            callback("User not found.", null);
        }

    }, 1000);
}

function handleUser(error, user)
{
    if(error)
    {
        console.log("Error: " + error);
    }
    else
    {
        console.log(user);
    }
}

getUserData(2, handleUser);
getUserData(4, handleUser);

//simple idea of asynchronous behaviour in js
console.log("start");
setTimeout(() => {
    console.log("TimeOut Ended.")
}, 5000);
console.log("end");

//promise in js
//promise is way to handle asynchronous operation in js

