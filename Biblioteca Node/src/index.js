// percorrer o texto e verficar palavras duplicadas
// criar um array de palavras
// contar as ocorrencias
// montar um objeto com o resultado:

// interage com os arquivos do computador
const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) =>{
    try {
      if (erro) throw erro
      contaPalavras(texto);
    } catch(erro){
      if(erro.code === 'ENOENT') console.log('Erro esperado');
      else console.log('Outro erro') 
    }
})

function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo)=>{
        if(!paragrafo) return [];
        return verficaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n');
}

// remover caracteres especiais
function limpaPalavras(palavra){
    // expressão regular, o g no final significa global
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); 
}

function verficaPalavrasDuplicadas(texto){
    const listaPalavra = texto.split(' ');
    const resultado = {};
    listaPalavra.forEach(palavra => {
        if(palavra.length >= 3){
        const palavraLimpa = limpaPalavras(palavra);
        resultado[palavra] = (resultado[palavraLimpa] || 0) + 1
        }
        
    })
    return resultado;
}

