//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();
console.log('Número gerado para dev: ' + numeroSecreto);

function exibirTextoNaTela(tag, texto){ //função com 2 parâmetros sem retorno
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); //inclui a API para voz sintetizada
}

function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroLimite}`);
}

mensagemInicial(); //executar os textos inicialmente

function verificarChute(){  //função sem parâmetros e sem retorno
    let chute = document.querySelector('input').value;
    //console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';  //operador ternário para trocar a palavra
        let mensagemTentativas = `Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`; //o HTML não reconheceria o Template String ${variável} 
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela('p',`O número secreto é MAIOR que ${chute}. Tente novamente!`);
    } else {
        exibirTextoNaTela('p',`O número secreto é MENOR que ${chute}. Tente novamente!`);
    }
    tentativas++; //incremento de tentativas
    limparCampo();
}

function gerarNumeroAleatorio() {
    //return parseInt(Math.random() * 10 + 1); //função com retorno e sem parâmetros
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); //recursão - a função se chama novamente para execução
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    document.querySelector('input').value = '';
    document.querySelector('input').focus(); //retornar o cursor ao elemento INPUT
    //let chute =  document.querySelector('input');
    //chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mensagemInicial();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
    responsiveVoice.speak('Te desafio a acertar novamente', 'Brazilian Portuguese Female', {rate: 1.2});
}