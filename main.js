google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Dia', 'Temperatura', 'Média'],
    ['1',  21.3, 21.7],
    ['2',  20.9, 21.7],
    ['3',  21.2, 21.7],
    ['4',  28.3, 21.7],
    ['5',  25.9, 21.7],
    ['6',  21.9, 21.7],
    ['7',  19.5, 21.7],
    ['8',  19.9, 21.7],
    ['9',  18.2, 21.7],
    ['10',  20.1, 21.7],
    ['11',  25.2, 21.7],
    ['12',  21.4, 21.7],
    ['13',  25.2, 21.7],
    ['14',  26.3, 21.7],
    ['15',  21.7, 21.7],
    ['16',  26.3, 21.7],
    ['17',  21.7, 21.7],
    ['18',  18.3, 21.7],
    ['19',  20.3, 21.7],
    ['20',  21.7, 21.7],
    ['21',  21.6, 21.7],
    ['22',  21.1, 21.7],
    ['23',  21.0, 21.7],
    ['24',  20.6, 21.7],
    ['25',  18.5, 21.7],
    ['26',  22.3, 21.7],
    ['27',  20.8, 21.7],
    ['28',  24.0, 21.7],
    ['29',  23.3, 21.7],
    ['30',  22.2, 21.7]
]);

var options = {
    title: 'Dias x Temperatura',
    vAxis: {title: 'Dias',  titleTextStyle: {color: 'red'}}
};

var barras = new google.visualization.BarChart(document.getElementById('barras'));
    barras.draw(data, options);
}
