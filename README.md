[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11920732&assignment_repo_type=AssignmentRepo)
<h2>Tarefa Node.JS</h2>

- Crie uma apliação em NodeJS que faça o seguinte:

 - Peça o caminho de um arquivo txt do seu computador;
  - Leia o arquivo;
  - Conte quantas linhas possuem somente números e some os números destas linhas;
  - Conte quantas linhas possuem texto;

   Exiba um resumo com:

    - Soma dos números dentro deste arquivo;
    - Quantas linhas continham texto (se tiver texto e número na mesma linha deverá contar aqui);
    - Quanto tempo demorou a execução;

  - O resumo deverá ser disparado por EVENTO

  - A leitura do arquivo deverá ser feita de forma assíncrona;
  - Pergunte se deseja executar novamente.



--------


Este é um programa simples em Node.js que lê um arquivo de texto, realiza algumas operações e exibe um resumo. O programa é executado no terminal de linha de comando e não requer HTML ou CSS, pois não se destina a ser uma aplicação web.

Funcionalidades
Solicita ao usuário o caminho de um arquivo de texto no sistema.
Lê o arquivo de forma assíncrona, processa cada linha e realiza as seguintes tarefas:
Conta quantas linhas contêm apenas números e soma esses números.
Conta quantas linhas contêm texto.
Exibe um resumo que inclui:
Soma dos números dentro do arquivo.
Quantidade de linhas que continham texto.
Tempo de execução em milissegundos.
Pergunta ao usuário se deseja executar o programa novamente.
Como usar
Siga estas etapas para executar o programa:

Certifique-se de ter o Node.js instalado no seu computador. Você pode baixá-lo em Node.js Website.

Clone ou baixe este repositório para o seu computador.

Abra o terminal e navegue até o diretório onde você salvou os arquivos.

Execute o programa com o seguinte comando:

Copy code: node stackX_node.js
O programa solicitará que você digite o caminho para um arquivo de texto no seu computador. Após fornecer o caminho do arquivo, o programa processará o arquivo e exibirá o resumo no terminal.

O programa também perguntará se você deseja executá-lo novamente.

Observações
Certifique-se de que o arquivo de texto tenha uma linha por número ou texto, separados por quebras de linha.
O programa assume que o arquivo de texto não contém números em formato decimal, apenas números inteiros.
Este programa foi criado como uma aplicação de linha de comando simples para fins de demonstração e pode ser personalizado ou expandido conforme necessário.



