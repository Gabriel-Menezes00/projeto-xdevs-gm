const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual=0; 
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
    const heUltimoCartao = cartaoAtual === cartoes.length - 1;
    if(heUltimoCartao) return;
    
 esconderCartaoSelecionado();

 cartaoAtual++;
 mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
const ehPrimeirocartao =cartaoAtual === 0
if (ehPrimeirocartao) return;

  esconderCartaoSelecionado();

 cartaoAtual--;
 mostrarCartao();
    
});


function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

