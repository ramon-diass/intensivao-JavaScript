const botaoPlayPause = document.getElementById('play-pause');
const botaoAnterior = document.querySelector('button#anterior');
const botaoProximo = document.getElementById('proximo');
const audioCapitulo = document.getElementById('audio-capitulo');
const numeroCapitulos = 10;
const nomeFaixa = document.getElementById('capitulo');
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar(){
    if (taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    }else{
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeFaixa.innerText = 'Capítulo ' + capituloAtual;
}

function proximaFaixa(){
    if (capituloAtual === 10){
        capituloAtual = 1;
    } else{
        capituloAtual = capituloAtual + 1;
    }
    trocarNomeFaixa();
    audioCapitulo.src = './books/'+ capituloAtual +'.mp3';
    tocarFaixa();
    taTocando = 1;
}

function voltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = 10;
    } else{
        capituloAtual = capituloAtual - 1;
    }
    trocarNomeFaixa();
    audioCapitulo.src = './books/'+ capituloAtual +'.mp3';
    tocarFaixa();
    taTocando = 1;
}

botaoPlayPause.addEventListener('click',tocarOuPausar);
botaoProximo.addEventListener('click',proximaFaixa);
botaoAnterior.addEventListener('click',voltarFaixa);