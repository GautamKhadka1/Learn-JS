const cont = document.querySelector("#btn_cont");
const cont2 = document.querySelector("#btn_cont2");
const txt = document.querySelector("#txt");
const txt2 = document.querySelector("#txt2");
function change()
{   
    let hex = Math.floor(Math.random()*16).toString(16);
    let hex2 = Math.floor(Math.random()*16).toString(16);

    for(let i=0; i<5; i++)
    {   
        let x = Math.floor(Math.random()*16).toString(16);
        let y = Math.floor(Math.random()*16).toString(16);
        hex =hex+x;
        hex2 =hex2+y;
    }
    //tostring function can be used to convert decimal to any base 
    cont.style.backgroundColor= `#${hex}`;//this is concept of template literal it allow you to embed expressions within string literals
    cont2.style.backgroundImage = `linear-gradient(to left, #${hex}, #${hex2})`;
    txt.textContent = `#${hex}`;
    txt2.textContent = `#${hex} and #${hex2}`;
    
}