import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErros.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .version('0.0.1')
  .option('-t, --texto <string>', 'caminho do texto a ser processado')
  .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
  .action(async (options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
        console.error(chalk.red('Erro: favor inserir caminho de origem e destino'));
        program.help();
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
        await processaArquivo(caminhoTexto, caminhoDestino);
        console.log(chalk.green('Texto processado com sucesso'));
    } catch (erro) {
        trataErros(erro);
    }
});

program.parse();

async function processaArquivo(caminhoTexto, destino) {
  try {
    const conteudo = await fs.promises.readFile(caminhoTexto, 'utf-8');
    const resultado = contaPalavras(conteudo);
    await criaESalvaArquivo(resultado, destino);
  } catch (erro) {
    trataErros(erro);
  }
}

async function criaESalvaArquivo(listaPalavra, endereco) {
  const arquivoNovo = path.join(endereco, 'resultado.txt');
  const textoPalavras = montaSaidaArquivo(listaPalavra);

  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log(`Arquivo criado em: ${arquivoNovo}`);
  } catch (erro) {
    throw erro;
  }
}
