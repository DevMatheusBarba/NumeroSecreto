let listaDeNumerosAleatorios = []
let valorMaximo = 100
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibeTextoNaTela(tag, text) {
    let campo = document.querySelector(tag)
    campo.innerHTML = text
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2})

}
function exibeMensagemInicial(params) {
    exibeTextoNaTela("h1", "Jogo do número secreto")
    exibeTextoNaTela("p", "Escolha um número entre 1 e 10")

}
exibeMensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value

    if (chute == numeroAleatorio) {
        exibeTextoNaTela("h1", "Acertou!")
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let tentativasMensagens = `Você descobriu o número secreto, com ${tentativas} ${palavraTentativa}`
        exibeTextoNaTela("p", tentativasMensagens)

        document.querySelector("#reiniciar").removeAttribute("disabled")

    } else {
        if (chute > numeroAleatorio) {
            exibeTextoNaTela("p", "O numero secreto é menor!")
        } else {
            exibeTextoNaTela("p", "O numero secreto é maior!")
        }
        tentativas++
        limapCampo()
    }

}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * valorMaximo + 1)
    let quantidadeElementoList = listaDeNumerosAleatorios.length;

    if (quantidadeElementoList > valorMaximo) {
        listaDeNumerosAleatorios = []
    }

    if (listaDeNumerosAleatorios.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosAleatorios.push(numeroEscolhido)
        return numeroEscolhido
    }




}


function limapCampo() {
    chute = document.querySelector("input")
    chute.value = ""
}

function recarregar() {
    exibeMensagemInicial()
    tentativas = 1
    numeroAleatorio = gerarNumeroAleatorio();
    limapCampo();
    document.querySelector("#reiniciar").setAttribute("disabled", "disabled")

}