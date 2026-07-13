# Contador de Cliques

Aplicação desenvolvida em JavaScript para praticar manipulação do DOM, controle de estados e tratamento de eventos através de botões.

# Autor:
Artur Mendes Israel

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Público-alvo

Projeto voltado para estudo e prática de JavaScript básico.

## Funcionalidades

- Incrementar o valor do contador;
- Decrementar o valor do contador;
- Resetar o contador para zero;
- Atualização dinâmica do valor exibido na tela;
- Exibição do contador após interação do usuário.

## Funcionamento

1. O contador é iniciado com o valor `0`.
2. O usuário pode aumentar ou diminuir o valor através dos botões disponíveis.
3. Cada clique altera o valor atual do contador.
4. O valor atualizado é exibido no display.
5. O botão de reset retorna o contador para `0`.

## Estrutura da lógica

- `contador`: variável responsável por armazenar o valor atual dos cliques.
- `eventListener`: monitora as ações realizadas nos botões.
- Botão de adicionar: aumenta o valor do contador em `+1`.
- Botão de remover: diminui o valor do contador em `-1`.
- Botão de reset: redefine o contador para `0`.
- `textContent`: atualiza o valor exibido na interface.
- `classList.remove()`: remove a classe `hide` para exibir o contador após a interação.

## Observações

A aplicação utiliza eventos de clique para modificar uma variável de estado (`contador`) e atualizar a interface automaticamente. A lógica de alteração dos valores fica no JavaScript, enquanto o CSS controla a exibição dos elementos através da classe `hide`.

## Adicional

- Adicionado botão de reset para restaurar o valor inicial do contador.
