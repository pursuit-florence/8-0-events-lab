// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const currentColor = document.querySelector("#current-color") 
//when a color is clicked in the #pallete
// #current-color` element should have its background changed to that color.

//accesing the class color (#pallete div.color)
// we have to access the color by doing the queryselectorall which we select all the color
const getColorDiv = document.querySelectorAll("div.color")
getColorDiv.forEach((color) =>{
  color.addEventListener("click",() =>{
currentColor.style.background = color.style.background
  })
})

const cell = document.querySelectorAll("#canvas div.cell");
cell.forEach((cellColor)=> {
  cellColor.addEventListener("click",(event) =>{
     event.target.style.background = currentColor.style.background 
})
})
