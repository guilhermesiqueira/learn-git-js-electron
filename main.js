// var modal = document.getElementById('modal-treinamento');
// var modalButton = document.getElementById('modalButton');
// var exitButton = document.getElementById('exitBt');
// var botao = document.getElementById('button');
// var som = new Audio("https://www.marxists.org/history/ussr/sounds/mp3/soviet-anthem.mp3");
// var imagem = document.getElementById('foto');
// var referencia = document.getElementById('referencia');

//modalButton.addEventListener('click', abreModal);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Dia da semana', 'Temperatura/dia'],
  ['Segunda', 8],
  ['Terça', 2],
  ['Quarta', 8],
  ['Quinta', 2],
  ['Sexta', 8],
  ['Sábado', 2],
  ['Domingo', 2],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Temperaturas do trocador', 'width':800, 'height':500};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.LineChart(document.getElementById('linechart'));
  chart.draw(data, options);
}


// function abreModal(){
//     modal.style.display = 'block';
// }
//
// exitButton.addEventListener('click', fechaModal);
//
// function fechaModal(){
//     modal.style.display = 'none';
// }
//
// window.addEventListener('click', foraDoModal);
//
// function foraDoModal(e){
//     if(e.target == modal){
//         modal.style.display = 'none';
//     }
// }
//
// botao.addEventListener('click', reproduzir);
//
// function reproduzir(){
//     som.play();
//     imagem.style.display = 'block';
//     referencia.style.display = 'block';
// }
