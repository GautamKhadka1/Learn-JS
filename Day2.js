//creating object 
const car = {};
car.model = "volvo";
car.color = "black";
car.price = 1000;
//deleting properties
delete car.color;
//accessing properties
console.log("I Have a "+car.model+" car");

//Nested Object and function in object

const person = {
    firstname: "Gautam",
    lastname: "Khadka",
    age: 22,
    student :{
        studentID: 101,
        course: "CSIT"
    },
    fullname: function()
    {
        return (this.firstname+" "+this.lastname);
    }
}
document.getElementById("id1").innerHTML = person.fullname();

//display all obj value as array
const myarray = Object.values(person);
document.getElementById("id1").innerHTML = myarray;

//constructor
