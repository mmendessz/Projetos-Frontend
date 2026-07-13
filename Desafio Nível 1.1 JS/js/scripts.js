const clickBox = document.querySelector("#click-box");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const resetBtn = document.querySelector("#reset");

let count = 0;

addBtn.addEventListener("click", () => {
  count++;
  clickBox.textContent = count;
  clickBox.classList.remove("hide");
});

subBtn.addEventListener("click", () => {
  count--;
  clickBox.textContent = count;
  clickBox.classList.remove("hide");
});

resetBtn.addEventListener("click", () => {
    count = 0;
    clickBox.classList.add("hide");
})