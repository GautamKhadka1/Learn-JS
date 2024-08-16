const body1 = document.body;
body1.append("Hello World", "Bye");//we can pass multiple string and elements using append 
const div1 = document.createElement("div");//creating element 
const div2 = document.createElement("span");
div1.innerText = "Basics of DOM Manipulation in JS";// adding sth into div 
div2.innerHTML ="<strong> Hello Guys From innerHtml</strong>";
body1.appendChild(div1);//appendchild only accepts elements and one at a time 
body1.append(div2);


//Now to remove the HTML elements we use remove function and queryselector

const span1 = document.querySelector("#container1");
span1.remove();

// now we manipulate attribute of html elements using getattribute and setattribute, removeattribute

const divhtml = document.querySelector("#id1");
console.log(divhtml.id);
divhtml.id= "newid";
console.log(divhtml.id);
divhtml.removeAttribute("id");

//manipulating custom attribute data from html elements using dataset method 
console.log(divhtml.dataset);
divhtml.dataset.test="This is changed dataset.";
console.log(divhtml.dataset);

//now to manipulate style through JS

divhtml.style.backgroundcolor ="red";



