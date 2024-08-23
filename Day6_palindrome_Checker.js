const button = document.getElementById("#button");
function check()
{
    const str = document.getElementById("text").value;
    let str1 = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let str2 = str1.split('').reverse().join('');
    if (str1 === str2)
    {
        alert(str+" is Palindrome.");
    }
    else
    {
        alert(str+" is not Palindrome.");
    }
    console.log(str1);
    console.log(str2);
}