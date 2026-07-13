# Consulta de Clima
Aplicação desenvolvida em JavaScript para consultar informações meteorológicas em tempo real utilizando a API do OpenWeatherMap.

# Autor:
Artur Mendes Israel

## Tecnologias
* HTML5
* CSS3
* JavaScript
* OpenWeatherMap API

## Público-alvo
Projeto voltado para estudo e prática de consumo de APIs, programação assíncrona e manipulação do DOM.

## Funcionalidades
* Busca de informações climáticas por cidade;
* Exibição da temperatura atual;
* Exibição da sensação térmica;
* Exibição da umidade do ar;
* Exibição da velocidade do vento;
* Exibição da descrição do clima em português;
* Tratamento para cidade inexistente.

## Funcionamento
1. O usuário informa o nome de uma cidade.
2. Ao enviar o formulário, a aplicação impede o recarregamento da página.
3. É realizada uma requisição para a API do OpenWeatherMap.
4. Caso a cidade exista, os dados climáticos são exibidos na tela.
5. Caso a cidade não seja encontrada, uma mensagem de erro é apresentada ao usuário.
6. Após a consulta, o campo de busca é limpo automaticamente.

## Estrutura da lógica
* `form`: captura o envio do formulário.
* `inputCidade`: recebe o nome da cidade informado pelo usuário.
* `buscarClima()`: realiza a requisição para a API e processa os dados retornados.
* `fetch()`: envia a requisição HTTP para o OpenWeatherMap.
* `dados`: armazena a resposta da API em formato JSON.
* `climateInfo`: remove a classe `hide` para exibir as informações climáticas após uma busca bem-sucedida.

## Observações
A aplicação utiliza programação assíncrona com `async/await` para consumir a API do OpenWeatherMap. A chave de acesso (`API Key`) deve ser informada na variável `chave` para que as consultas funcionem corretamente.
