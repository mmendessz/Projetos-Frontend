const form = document.querySelector("#form-inputs");
const inputCidade = document.querySelector("#city");

const climateInfo = document.querySelector("#climate-info");

const cidade = document.querySelector("#cidade");
const temperatura = document.querySelector("#temperatura");
const sensacao = document.querySelector("#sensacao");
const umidade = document.querySelector("#umidade");
const descricao = document.querySelector("#descricao");
const vento = document.querySelector("#vento");

const chave = "ESCONDIDO";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  buscarClima();
});

async function buscarClima() {
  const nomeCidade = inputCidade.value;

  if (nomeCidade === "") {
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${chave}&units=metric&lang=pt_br`;

  console.log(url);

  const resposta = await fetch(url);
  const dados = await resposta.json();
  console.log(dados);

  if (dados.cod === "404") {
    alert("Erro! Cidade Não Encontrada.");
    return;
  }

  cidade.innerText = `${dados.name}`;
  temperatura.innerText = `${dados.main.temp} °C`;
  sensacao.innerText = `${dados.main.feels_like} °C`;
  umidade.innerText = `${dados.main.humidity} %`;
  descricao.innerText = `${dados.weather[0].description}`;
  vento.innerText = `${dados.wind.speed} km/h`;

  climateInfo.classList.remove("hide");

  inputCidade.value = ""
}
