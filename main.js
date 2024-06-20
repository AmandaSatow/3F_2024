const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abaconteudo");
const contador = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date (2025,02,25);
const tempoObjetivo2 = new Date (2025,05,25);
const tempoObjetivo3 = new Date (2025,08,25);
const tempoObjetivo4 = new Date (2025,10,25);
let agora = new Date();
contador[0].textContent = tempoObjetivo1 - agora
contador[1].textContent = tempoObjetivo2 - agora
contador[2].textContent = tempoObjetivo3 - agora
contador[3].textContent = tempoObjetivo4 - agora

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
            
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")


    }
}



