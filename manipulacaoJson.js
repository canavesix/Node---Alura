
const fs = require('fs');
// const animaisString = JSON.stringify(animais)
// console.log(animaisString);

// const animaisObject = JSON.parse(animaisString)
// console.log(animaisObject)



const novoAnimal = {
    "id": 4,
    "nome": "Gavião",
    "tipo": "Ave",
    "habitat": "Floresta"
}

const animais = require('./animais.json');
// animais.push(novoAnimal);
const animaisString = JSON.stringify(animais);
// console.log(animaisString);

console.log(animais)