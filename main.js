var modal = document.getElementById('modal-treinamento');
var modalButton = document.getElementById('modalButton');
var exitButton = document.getElementById('exitBt');
var botao = document.getElementById('button');
var som = new Audio("https://www.marxists.org/history/ussr/sounds/mp3/soviet-anthem.mp3");
var imagem = document.getElementById('foto');
var referencia = document.getElementById('referencia');

modalButton.addEventListener('click', abreModal);

function abreModal(){
    modal.style.display = 'block';
}

exitButton.addEventListener('click', fechaModal);

function fechaModal(){
    modal.style.display = 'none';
}

window.addEventListener('click', foraDoModal);

function foraDoModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

botao.addEventListener('click', reproduzir);

function reproduzir(){
    som.play();
    imagem.style.display = 'block';
    referencia.style.display = 'block';
}

