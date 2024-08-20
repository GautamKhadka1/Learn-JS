let count = 0;
const display = document.querySelector("#display");
display.innerText = count;

function Increase(){
    count++;
    display.innerText = count;
    color(count);
}
function Decrease(){
    count--;
    display.innerText = count;
    color(count);
}
function Reset(){
    count = 0;
    display.innerText = count;
    color(count);

    
}
function color(count)
{
if(count==0)
{
    display.style.color = "black";
}
else if(count>0)
{
    display.style.color = "green";
}
else
{
    display.style.color = "red";
}
}