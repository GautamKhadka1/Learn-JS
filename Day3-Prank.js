//event Listener
// In this project when your mouse is over button it will disappear & reappear 3 times and display message at the end when clicked. 
let count =0;
let x = Math.random()*10;
console.log(x);

const button = document.querySelector("#clickme");
button.addEventListener("mouseover", e => {
    count++;
    if(count<x)
    {
    disappear();
    }
});
function disappear()
{
 button.style.display ="none";
 setTimeout(() => {
    button.style.display ="block";
 }, 700);
}
function Display()
{
    const display = document.getElementById("Display");
    button.style.display ="none";
    display.innerText = "Thank you for clicking."
}