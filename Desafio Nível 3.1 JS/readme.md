# Calculadora Básica

Uma calculadora desenvolvida em JavaScript para praticar lógica de programação, manipulação do DOM e tratamento de eventos.

# Autor: 
Artur Mendes Israel

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Público-alvo

Projeto voltado para estudo e prática de JavaScript básico/intermediário.

## Funcionalidades

- Operações de soma, subtração, multiplicação e divisão;
- Atualização dinâmica do display;
- Tratamento para divisão por zero;
- Botão para limpar todos os valores;
- Início automático de uma nova operação após um cálculo concluído.

## Funcionamento

1. O usuário informa o primeiro número.
2. Seleciona uma operação matemática.
3. Informa o segundo número.
4. Ao pressionar o botão de calcular, o resultado é exibido no display.
5. Após o cálculo, um novo número inicia automaticamente uma nova operação.

## Estrutura da lógica

- `numAtual`: armazena o número que está sendo digitado.
- `primeiroNum`: guarda o primeiro operando.
- `ops`: armazena o operador selecionado.
- `resultado`: guarda o resultado da operação.
- `resetNext`: indica que um cálculo acabou de ser realizado e que a próxima entrada deve iniciar um novo número.

## Observações

A variável `resetNext` evita que o próximo número digitado seja concatenado ao resultado anterior. Quando seu valor é `true`, a próxima entrada limpa o display antes de iniciar um novo número.
