//Java script Objects THis concept is used in older projects only now replaced with CLass.
const car = {
    model: "ponto",
    year: 2015,
    brand: "volvo"
}
console.log(car.model);

//object constructor
function person (fname,lname)
{
    this.FirstName = fname;
    this.LastName = lname;
}
//creating object
const Dad = new person("Ram", "Karki");
const Mom = new person("Sita", "Karki");
Dad.LastName = "Khadka";
console.log(Dad.FirstName);
//To add new property in constructor we can use prototype property
person.prototype.Name= function() {
    return (this.FirstName+" "+this.LastName);
}
console.log(Dad.Name());
// different methods of Objects
Object.assign(Dad, Mom);
const text = Object.entries(Mom);
const text2= Object.values(Dad);//same as entries but assign only values of properties as array 
console.log(text+"");
console.log(text2+"");
//property methods
Object.defineProperty(Dad, "FirstName", {value:"Gopal"});
console.log(Dad.Name());
