//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let alturaPessoa = 1.74;
let pesoPessoa = 80;

function calcularImc(altura, peso){
    //let imc = peso / (altura * altura);   //uma forma
    //let imc = peso / (altura ** 2);       //outra forma
    let imc = peso / (Math.pow(altura, 2)); //usando Math.pow()
    return imc.toFixed(2);
}
let imc = calcularImc(alturaPessoa, pesoPessoa); //chamando a função
console.log('O IMC é ' + imc);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let numeroFatorial = 5;

function calcularFatorial(numero){
    let resultadoFatorial = numero;
    while (numero > 1){
        resultadoFatorial = resultadoFatorial * (numero -1);
        numero --;
    }
    return resultadoFatorial;
}

let resultadoFatorial = calcularFatorial(numeroFatorial);
console.log(`O fatorial de ${numeroFatorial} é ${resultadoFatorial}`);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let cotacaoDolarHoje = 4.80;
    cotacaoDolarHoje.toFixed(2);
let valorParaConverter = 10; //Converter US$ 100,00 em real
function converteDolarEmReal(valorDolar, cotacao){
    let valorRealConvertido = valorDolar * cotacao;
    return valorRealConvertido.toFixed(2);
}

let valorRealConvertido = converteDolarEmReal(valorParaConverter, cotacaoDolarHoje);
console.log(`Pela cotação de hoje em R$/US$ ${cotacaoDolarHoje} , US$ ${valorParaConverter} vale R$ ${valorRealConvertido}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let alturaAmbiente = 3;
let larguraAmbiente = 10;

function calcularAreaPerimetroSala(altura, largura){
    let areaCalculada = altura * largura;
    let perimetroCalculado = 2 * (altura + largura);

console.log(`A área calculada do ambiente é de ${areaCalculada} metros quadrados`);
console.log(`O perímetro calculado do ambiente é de ${perimetroCalculado} metros`); 
}

calcularAreaPerimetroSala(alturaAmbiente, larguraAmbiente);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let pi = 3.14;
let raioMedido = 10;

function calcularAreaPerimetroCirculo(raio, pi){
    let areaCalculada = pi * Math.pow(raio, 2);
        areaCalculada = areaCalculada.toFixed(2);
    let perimetroCalculado = 2 * pi * raio;
        perimetroCalculado = perimetroCalculado.toFixed(2);

    console.log(`A área calculada do ambiente circular é de ${areaCalculada} metros quadrados`);
    console.log(`O perímetro calculado do ambiente circular é de ${perimetroCalculado} metros`);
    
}

calcularAreaPerimetroCirculo(raioMedido, pi);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let multiplicando = 5;
let multiplicador = 1;
console.log(`Tabuada do número ${multiplicando}`);

function tabuada(){
    while(multiplicador <= 10){
        resultadoMultiplicacao = multiplicando * multiplicador;
        console.log(`${multiplicando} X ${multiplicador} = ${resultadoMultiplicacao}`);
        multiplicador++;
    }
}

tabuada();