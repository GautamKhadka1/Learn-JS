const display = document.getElementById("display");
let [hrs, min, sec] = [0, 0, 0];
//this is called destructuring assignmentwhere we can assign variables in array values from  another array
let intid = null;
let flag = false;

function Start() {
  if (!flag) {
    intid = setInterval(DisplayTime, 1000);
    flag = true;
  }
}
function Stop() {
  clearInterval(intid);
  flag = false;
}
function Reset() {
  [hrs, min, sec] = [0, 0, 0];
  display.innerHTML = "00:00:00";
  clearInterval(intid);
  flag = false;
}
function DisplayTime() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      hrs++;
    }
  }
  let s = sec < 10 ? "0" + sec : sec; //this is ternary operator condition?trueoperation:falseoperation
  let m = min < 10 ? "0" + min : min;
  let h = hrs < 10 ? "0" + hrs : hrs;
  display.innerHTML = `${h}:${m}:${s}`;
}
