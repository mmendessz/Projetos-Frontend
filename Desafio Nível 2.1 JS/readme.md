# To-Do List

Aplicação desenvolvida em JavaScript para praticar manipulação do DOM, criação dinâmica de elementos e tratamento de eventos.

# Autor:
Artur Mendes Israel

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Público-alvo

Projeto voltado para estudo e prática de JavaScript básico/intermediário.

## Funcionalidades

- Adição de novas tarefas;
- Remoção de tarefas da lista;
- Adição de tarefas utilizando o botão ou a tecla Enter;
- Validação para impedir tarefas vazias;
- Criação dinâmica de elementos HTML através do JavaScript.

## Funcionamento

1. O usuário informa uma tarefa no campo de texto.
2. Ao adicionar, a aplicação verifica se o campo não está vazio.
3. Caso válido, uma nova tarefa é criada e adicionada à lista.
4. Cada tarefa recebe um botão de remoção individual.
5. O usuário pode remover tarefas quando desejar.
6. A tecla Enter também pode ser utilizada para adicionar uma nova tarefa.

## Estrutura da lógica

- `addTarefa()`: função responsável por criar e adicionar uma nova tarefa na lista.
- `input`: captura o texto digitado pelo usuário.
- `li`: representa o item criado dentro da lista.
- `span`: armazena o texto da tarefa.
- `btnRemover`: botão criado para remover uma tarefa específica.
- `appendChild()`: utilizado para inserir os elementos criados no DOM.

## Observações

A aplicação utiliza criação dinâmica de elementos HTML para adicionar tarefas sem precisar alterar diretamente o documento. Cada botão de remoção possui seu próprio evento, permitindo excluir apenas a tarefa selecionada.

## Adicional

- Evento de teclado configurado para que a tecla `Enter` execute a mesma ação do botão de adicionar.
