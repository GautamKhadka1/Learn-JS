const person = [
    {name:'Gautam', Age:12},
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
    return x.name === "Gautam";
})

console.log(findItem);
div2.innerHTML = findItem.name;

//foreach method is used to access each element of an array 
person.forEach((item)=>
{
    console.log(item.name + ", "  +item.Age);
})