var modal = document.getElementById('minhaModal');

var openBtn = document.getElementById('meuBotao');

var span = document.getElementsByClassName("close")[0];

openBtn.onclick = function(){
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
}
