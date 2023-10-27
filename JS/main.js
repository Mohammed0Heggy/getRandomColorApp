let body = document.getElementById("body");
let bodyColor = document.getElementById("colorName");
let btn = document.getElementById("btn");

let x = Math.floor(((Math.random() * 100))).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  ;
let y = Math.floor(((Math.random() * 100))).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  ;
let z = Math.floor(((Math.random() * 100))).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  ;
body.style.backgroundColor = `#${x}${y}${z} `

let colorName = document.createTextNode(`Hexadecimal code of the color is #${x}${y}${z}`);
bodyColor.appendChild(colorName);
function randomColor() {
  location.reload();

}
btn.addEventListener("click", () => {
  randomColor()
});