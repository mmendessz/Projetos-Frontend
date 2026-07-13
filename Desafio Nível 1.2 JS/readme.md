# Botão de Tema

Aplicação desenvolvida em JavaScript para praticar manipulação do DOM, eventos e alteração dinâmica de estilos através de classes CSS.

# Autor:
Artur Mendes Israel

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Público-alvo

Projeto voltado para estudo e prática de JavaScript básico.

## Funcionalidades

- Alternância entre tema claro e escuro;
- Mudança dinâmica das cores da página;
- Controle do tema através de um botão;
- Manipulação de classes CSS utilizando JavaScript.

## Funcionamento

1. O usuário pressiona o botão de alteração de tema.
2. Um evento de clique é capturado pelo JavaScript.
3. A aplicação acessa as classes do elemento `body`.
4. O método `toggle()` adiciona ou remove a classe responsável pelo tema escuro.
5. O estilo da página é atualizado automaticamente conforme o tema selecionado.

## Estrutura da lógica

- `eventListener`: monitora o clique no botão de tema.
- `classList`: permite acessar e manipular as classes CSS de um elemento.
- `toggle()`: alterna a presença da classe de tema escuro, permitindo mudar entre os modos claro e escuro.
- `body`: elemento principal onde a classe do tema é aplicada.

## Observações

A aplicação utiliza a alternância de classes CSS para controlar os estilos dos temas. O JavaScript fica responsável apenas por adicionar ou remover a classe, enquanto o CSS define a aparência de cada modo.
