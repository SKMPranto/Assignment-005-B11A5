const btn = document.getElementById("btn-themeChanger");
let randomNum = () => {
  return Math.floor(Math.random() * 256);
};
let changeColor = () => {
  let color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
  document.body.style.backgroundColor = color;
};
btn.addEventListener("click", changeColor);