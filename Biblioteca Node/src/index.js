// interage com os arquivos do computador
const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) =>{
    quebraEmParafrafos(texto);
    // verficaPalavrasDuplicadas(texto);
})


// percorrer o texto e verficar palavras duplicadas
// criar um array de palavras
// contar as ocorrencias
// montar um objeto com o resultado:

// {
//     "web": 5;,
//     "computador": 4
// }

function quebraEmParafrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo)=>{
        return verficaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}


function verficaPalavrasDuplicadas(texto){
    const listaPalavra = texto.split(' ');
    const resultado = {};
    // objeto[propriedade] = valor;
    listaPalavra.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
    })
    return resultado;
    
}