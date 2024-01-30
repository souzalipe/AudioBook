const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const audioCapitulo = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo")

const numeroCapitulos = 10;
let taTocando = 0;
let Capituloatual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    }else {
        pausarFaixa();
        taTocando = 0;
    }
}

function TrocarNomeFaixa(){
    nomeCapitulo.innerText = "Capitulo " + Capituloatual;
}

function proximaFaixa(){
    if(Capituloatual === numeroCapitulos){
        Capituloatual = 1;
    }else{
        Capituloatual = Capituloatual + 1
    }
    audioCapitulo.src = "./books/dom-casmurro/" + Capituloatual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    TrocarNomeFaixa();
}

function voltarFaixa(){
    if(Capituloatual === 1){
        Capituloatual = numeroCapitulos;
    }else{
        Capituloatual = Capituloatual - 1
    }
    audioCapitulo.src = "./books/dom-casmurro/" + Capituloatual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    TrocarNomeFaixa();
}




botaoPlayPause.addEventListener("click",tocarOuPausar);
botaoAvancar.addEventListener("click",proximaFaixa);
botaoVoltar.addEventListener("click",voltarFaixa);