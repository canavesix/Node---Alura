
const fs = require('fs');
const animais = require('./animais.json')

const animaisString = JSON.stringify(animais)
// console.log(animaisString);

const animaisObject = JSON.parse(animaisString)
// console.log(animaisObject)


// Adicionando informações no JSON
// const novoAnimal = {id: 4, nome: "Gavião", tipo: "Ave", habitat: "Floresta"};

// animais.animais.push(novoAnimal);


// fs.writeFileSync('./animais.json', JSON.stringify(animais, null, 2));

// console.log(animais);



// alterar propriedade de um json

// const animal = animais.animais.find(a => a.id === 4);

// if(animal){
//     animal.habitat = "Montanha";
// }

// fs.writeFileSync('./animais.json', JSON.stringify(animais, null, 2));

// console.log(animais);



// Remover propriedade
// animais.animais = animais.animais.filter(a => a.id !== 4);
// fs.writeFileSync('./animais.json', JSON.stringify(animais, null, 2));
// console.log(animais);


// =================================




const pessoalOriginal = {
    id: 1,
    nome: "Gustavo",
    idade: 25
}

const copiaProfundaPessoa = JSON.parse(JSON.stringify(pessoalOriginal));

copiaProfundaPessoa.nome = "Gustavo Canavesi";
console.log(copiaProfundaPessoa);
console.log(pessoalOriginal);