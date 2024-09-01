//Arrow function
function sum(a,b)
{
    return a+b;
}
let sum1 = (a,b) => a+b; //this is arrow function of above function sum
//anonymous function
document.addEventListener("click", function(){ console.log('click'); })
//this anonymous can be rewritten using arrow function as
document.addEventListener("click", () => console.log("CLICK"));
//Note: this keyword used inside arrow function is same as in other programming language that is 'this' is used to access elements of class where arrow function is defined but in other function it is redefined as global 

//promise in js is like in real life, 
let p = new Promise((resolve, reject) => {
 let x=1+2;
 if(x==2)
 {
    resolve("Promise is resolved.");
 }
 else
 {
    reject("Promise is rejected.");
 }
});2

p.then((msg) => {
console.log("Accepted:" + msg);
}).catch((msg) => {
    console.log("Rejected:"+msg)
})

//promise has same usecase as callback but much more efficient. eg: give example of callback is converted to promise 
function walkDog(callback){
    setTimeout(() => {
    console.log("You walk the dog");
    callback();}, 1500);
}
    
function cleanKitchen(callback){
    setTimeout( () => {
    console.log("You clean the kitchen");
    callback();}, 2500);
}

function takeoutTrash(callback){
    setTimeout(() => {
    console.log("You take out the trash");
    callback();}, 5000);
}

walkDog(() => {
    cleanKitchen(() => {
        takeoutTrash(() => {
            console.log("All task completed.");
        })
    })
})
//now converting these into promise
function walkDog1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walk the dog2");
            }, 1500);
    });
}
    
function cleanKitchen1(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("You clean the kitchen2");
            }, 2500);
    });;
}

function takeoutTrash1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You take out the trash2");}, 500);
    });
}

walkDog1().then((msg) =>{ console.log(msg);
    return cleanKitchen1().then((msg) => {
        console.log(msg);
        return takeoutTrash1().then((msg) => {
            console.log(msg);
            console.log("All Task Completed2");
        })
    })
})
    