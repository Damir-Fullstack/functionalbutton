let state = false;
const btn =
  document.getElementById("a");
const output =
document.getElementById("output");
btn.addEventListener("click", () =>{
  state = !state;
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
if (state) {
  output.innerText = "Hello World!";
  document.body.style.backgroundColor = randomColor;
} else {
  output.innerText = "";
  document.body.style.backgroundColor = randomColor;
}
})
