//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('Texto: ' + 'Olá, mundo!');
}

olaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
    console.log('Texto com nome: ' + `Olá, ${nome}!`);
}

exibirNome('Audrey');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(numero) {
    return 2 * numero;
}

let dobro = dobroNumero(10);
console.log('O dobro do número escolhido é ' + dobro);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumeros(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

let media = mediaNumeros(2, 4, 6);
console.log('A média dos números escolhidos é ' + media);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numero1, numero2) {
    return Math.max(numero1, numero2);
}

let maior = maiorNumero(4, 8);
console.log(`O maior dos dois números escolhidos é ` + maior);    

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicaNumero(numero) {
    return numero * numero;
}

let multiplica = multiplicaNumero(6);
console.log(`A multiplicação do número escolhido por ele mesmo é ` + multiplica);