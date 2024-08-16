const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
console.log(botoesCarrossel);
console.log(imagens);
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener("click", () =>{  

        desativarBotaoSelecionado();

        marcarBotaoSelecionar(botao);  
        
        
        esconderImagemAtiva();

        
        mostrarImagemDeFundo(indice);

        esconderInformacoesAtivas();


        mostrarInformacoes(indice);  
    });       
 });

function marcarBotaoSelecionar(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
    console.log(indice);
}

    


function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    console.log(informacoesAtiva); 
        informacoesAtiva.classList.remove("ativa");

}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

