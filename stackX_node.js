const readline = require('readline');
const fs = require('fs');
const path = require('path');
const startTime = new Date();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para ler e processar o arquivo de forma assíncrona
async function readAndProcessFile(filePath) {
  let totalNumbers = 0;
  let totalTextLines = 0;

  try {
    // Lê o conteúdo do arquivo de forma assíncrona
    const data = await fs.promises.readFile(filePath, 'utf8');
    const lines = data.split('\n');

    // Processa cada linha do arquivo
    lines.forEach((line) => {
      if (/^\d+$/.test(line)) {
        totalNumbers += parseInt(line);
      } else {
        totalTextLines++;
      }
    });

    const endTime = new Date();
    const executionTime = endTime - startTime;

    // Exibe um resumo do processamento
    console.log('Resumo:');
    console.log(`- Soma dos números: ${totalNumbers}`);
    console.log(`- Linhas com texto: ${totalTextLines}`);
    console.log(`- Tempo de execução: ${executionTime}ms`);

    // Pergunta se o usuário deseja executar novamente
    rl.question('Deseja executar novamente? (S/N): ', (answer) => {
      if (answer.toLowerCase() === 's') {
        rl.question('Digite o caminho do arquivo: ', (newFilePath) => {
          readAndProcessFile(newFilePath);
        });
      } else {
        rl.close();
      }
    });
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
    rl.close();
  }
}

// Solicita o caminho do arquivo ao usuário
rl.question('Digite o caminho do arquivo: ', (filePath) => {
  readAndProcessFile(filePath);
});
