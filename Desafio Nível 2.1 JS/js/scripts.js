const input = document.querySelector("#tarefa");
const btn = document.querySelector("#btnTarefa");
const lista = document.querySelector("#lista");

function addTarefa() {
  const text = input.value;

  if (text.trim() === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const btnRemover = document.createElement("button");
  btnRemover.textContent = "X";

  btnRemover.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btnRemover);
  lista.appendChild(li);
  lista.appendChild(li);

  input.value = "";
}

btn.addEventListener("click", addTarefa);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTarefa();
  }
});
