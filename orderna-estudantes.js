
const estudantes = require('./estudantes.json');

function orderna(lista, propriedade) {
    return lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]) return -1;
        if(a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
}

const listaOrdenada = orderna(estudantes, 'nome');
console.log(listaOrdenada);
