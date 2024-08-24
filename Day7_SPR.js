const compS = document.getElementById("compS");
const compP = document.getElementById("compP");
const compR = document.getElementById("compR");
const playS = document.getElementById("playS");
const playP = document.getElementById("playP");
const playR = document.getElementById("playR");
const result =document.getElementById("result");
const intervals = {};
const ran = Math.floor(Math.random()*3);
function flicker(x) {
    // Create a unique key for each element
    const key = x.id;

    // Start the interval to toggle transparency every 300ms
    intervals[key] = setInterval(() => {
        x.classList.toggle("transparent");
    }, 300);

    // Stop the interval after the specified duration
    setTimeout(() => {
        clearInterval(intervals[key]);
        x.classList.add("transparent"); // Ensure the element is not transparent after stopping
        delete intervals[key]; // Clean up the interval ID
    }, 1960);
}
function effect()
{   
    flicker(compS);
    setTimeout(() => {flicker(compP);
    }, 100);
    setTimeout(() => {flicker(compR);
    }, 200);

}
function logic()
{
    
    if( ran === 0)
    {
        compS.style.opacity = 1;
    }
    else if( ran === 1)
    {
        compP.style.opacity = 1;
    }
    else
    {
        compR.style.opacity = 1;
    }
    
}
function gamelogic(inp)
{
    if (inp == ran) {
        setTimeout(function (){result.innerText = "It's a Draw.";}, 2500);
    } else if ((inp == 0 && ran == 1) || (inp == 1 && ran == 2) || (inp == 2 && ran == 0)) {
        setTimeout(function (){result.innerText = "You Win.";result.style.color = "Green";}, 2500);
    } else {
        setTimeout(function (){result.innerText = "You Loss.";result.style.color = "Red";}, 2500);
    }
}
function effectplay(inp)
{   
    if( inp == 0)
    {
        playP.style.opacity = 0.2;
        playR.style.opacity = 0.2;
    }
    else if( inp == 1)
    {
        playS.style.opacity = 0.2;
        playR.style.opacity = 0.2;   
    }
    else
    {
        playS.style.opacity = 0.2;
        playP.style.opacity = 0.2;
    }

}
function game(button)
{   
    effect();
    setTimeout(logic, 2000);
    const inp = button.value;
    gamelogic(inp);
    effectplay(inp);
    
}
