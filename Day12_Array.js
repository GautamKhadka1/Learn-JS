const person = [
    {name:'Gautam', Age:22},
    {name:'Hari', Age:22},
    {name:'Narayan', Age:32},
    {name:'Ribash', Age:70},
    {name:'Sajan', Age:152},
    {name:'Anuj', Age:42},//alt+shift+down
];

//filter method
const filterItem = person.filter((x)=>
{
    return x.Age<42;
})
let div1 = document.getElementById("display");
let div2 = document.getElementById("display2");

//map method is used to extract specific properties of array of object

div1.innerText = filterItem.map((item)=>{
    return `${item.name} , ${item.Age}`
}).join(`, `);
console.log(filterItem);

//find method is used to find specific object in an array using condition 
//find returns object not an array
const findItem = person.find((x) =>
{
    return x.Age === 22;
})

console.log(findItem);
div2.innerHTML = findItem.name;

//foreach method is used to access each element of an array 
person.forEach((item)=>
{
    console.log(item.name + ", "  +item.Age);
})
//some method check the array and if any one match the condition it returns true
//similar to some there is another method called every it check every item with condition if every item follows the condition then only its value is true

const checkOld= person.some((item) =>
{
    return item.Age>50;
})

console.log(checkOld);
//reduce method is 

//simple array
const number = [3,1,5,6,9,7,8,2,4];
//some method of simple array

//adding element in array
number.push(0);
number.sort();
console.log("length of number array is " + number.length, number[0]);
console.log(number.toString());

//flatmap method is used to create different array using existing array 
const newArray = number.flatMap((x)=>[x+1]);
newArray.splice(2,0,25,100);//1st param rep position to add 2nd param rep item to remove
console.log(newArray);
//adding new element in middle of array 
console.log(newArray.includes(25));
const foundx= newArray.find((x) => {return x>3;})
console.log(foundx);//find return first item that satisfies the condition 

//sort method sorts numeric value as string so we need use comparision function to sort numeric value 

console.log(newArray.sort());//see here
console.log(newArray.toSorted((a,b) => a-b).toReversed())//this will solve above problem
//the difference between sort and toSorted is that toSorted method sort without affecting main array

//min max from ana array
console.log(Math.max.apply(null, newArray));


