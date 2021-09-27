# Teste Dev. Front-end Junior SenseData
---
### `Objetivo:`
***Fazer uma aplicação de controle financeiro pessoal (`SenFinança`)***

Na aplicação deverá ser possível criar, editar ou excluir uma transação financeira.
Essa transação deverá conter alguns dados como: *título, tipo (entrada ou saída), categoria e valor* (salve também a data de criação da transação, este dado não precisa ser um campo preenchido pelo usuário).
A aplicação *deverá conter uma tabela onde deve ser possível visualizar todas as transações realizadas pelo usuário, mostre todos os dados das transações*.
Como é muito difícil somar e subtrair todos os valores da tabela manualmente, vamos facilitar isso para o nosso usuário. Portanto, crie uma área na aplicação em que seja possível visualizar, de forma clara, o total das transações de entradas, saídas e o total da conta (entradas - saídas);
A fim de ajudar o usuário a visualizar todas as entradas, saídas e entradas/saídas com uma determinada categoria, crie, inicialmente, dois filtros rápidos que devem interagir um com o outro:
- O primeiro filtro deverá filtrar as transações com relação ao tipo (entrada/saída/todas);
- O segundo filtro deverá filtrar as transações com relação a sua categoria.
---
#### `Itens Obrigatórios`
- Adicionar, editar e excluir uma transação;
- Visualizar as transações em uma tabela;
- Visualizar o total das transações de entrada, saída e o total da conta (entradas - saídas);
- Os filtros citados devem estar funcionando;
- Persistir os dados (salvar a lista de transações no localStorage ou algum banco de dados);
- Usar ContextAPI;

---
#### `Bonus`
- Realizar testes unitários;
- Mais filtros;
- Mostrar subtotal de entradas / saídas de acordo com o filtro de categoria.A entrega deve ser feita em um repositório público do GitHub e um link com a aplicação rodando.