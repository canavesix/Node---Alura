export function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto);

  const contagem = paragrafos.reduce((acc, paragrafo) => {
    if (!paragrafo) return acc;
    const palavras = verficaPalavrasDuplicadas(paragrafo);
    for (const [palavra, qtd] of Object.entries(palavras)) {
      acc[palavra] = (acc[palavra] || 0) + qtd;
    }
    return acc;
  }, {});

  return contagem;
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, '').trim();
}

function verficaPalavrasDuplicadas(texto) {
  const listaPalavra = texto.split(' ');
  const resultado = {};

  listaPalavra.forEach(palavra => {
    const palavraLimpa = limpaPalavras(palavra);
    if (palavraLimpa.length >= 3 && isNaN(palavraLimpa)) {
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });

  return resultado;
}
