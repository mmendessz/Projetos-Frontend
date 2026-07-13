# Calculadora Básica
- calculadora simples para testar lógica e estrutura em JS
 
## Público-alvo: Experientes

## Fluxo: 
- inicializa numAtual, primeiroNum e ops;
- inicializa resultado em 0 e resetNext como false;
- utiliza forEach para percorrer na lista de números;
- eventListener para o botão do número e trata com if;
- se numAtual for vazio, resetNext mantém em falso;
- concatena o target do textContent no numAtual;
- muda o display para o numAtual;
- utiliza forEach para percorrer na lista de operadores;
- EventListener para o botão de operador;
- declara que: primeiroNum vira numAtual, ops vira o textContent do target, numAtual zera;
- EventListener para calc com tratamento para ops e numAtual, caso estejam preenchidos, retorna;
- declara num1 como number de primeiroNum e num2 como number de numAtual;
- if e else if para operadores;
- caso seja o operador selecionado, resultado é igual a num1 *operador* num2; (válido para todos)
- tratamento para divisão: se num2 for zero, display entrega erro, reseta numAtual, primeiroNum, ops e retorna;
- fora do fluxo de calc, numAtual obtém resultado, entrega o resultado no display através de innerText;
- zera primeiroNum e ops, altera resetNext para True;
- eventListener para botão de Clear, declara todos os componentes como vazios, resultado igual a zero e resetNext para false;
- zera o display com innerText. 

## Observações:
- resetNext serve para indicar que um cálculo acabou de ser realizado. Assim, quando o usuário digitar o próximo número, numAtual será limpo antes da concatenação, iniciando uma nova entrada em vez de continuar o resultado anterior.
