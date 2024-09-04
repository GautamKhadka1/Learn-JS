//type of data type
var x= "Gautam";//string
let a= 15.50; //number
let b= true; //boolean
const Animal = {Color: "black", Type: "Dog"};//object  
const y= ["Gautam", "Khadka"]; //array


//Type of Operation
let c =typeof "hello world";
document.write(c + "<br>");
//Declaring Function 
let d = Sum(5,6);

function Sum(x,y) {
    return x+y;
}
document.write("\nThe sum of is "+ d+"<br>");

//Function Expression which means function can be assigned to variable as well as can be used in expressions as well

var e = function (x,y) { return x*y; };//anonymous function
var z = e(5,67);
document.write("\nThe multiplication of 5 & 67 is "+ z +"<br>");

//hoisting mean calling function before they are declared 


//Object 
//declaring function inside of an object

const Student={
    firstName: "Gautam",
    lastName: "Khadka",
    age: 15,
    address: "Bangalore",
    fullName: function(){ return this.firstName+""+this.lastName;}
};
document.write(Student.fullName()+ "<br>");

//Concept of NaN Not A Number which means that it is not a number eg below
var x= "gautam";
document.write(x/10 + "<br>");

//but if the string is number then it will compute as numeric value
var x= "100";
document.write(x/10);


