let state = false;
const btn =
  document.getElementById("a");
const output =
document.getElementById("output");
btn.addEventListener("click", () =>{
  state = !state;
if (state) {
  output.innerText = "Hello World!";
} else {
  output.innerText = "";
}
})
