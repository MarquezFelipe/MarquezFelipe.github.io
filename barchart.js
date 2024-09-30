// crear un div desde javascript en vez de selecionar uno predeterminado de html
let nuevoDiv = document.createElement('div');

// Asignar un id único al nuevo div
nuevoDiv.id = 'barchart 1';

// Insertar el nuevo div dentro de un contenedor existente
document.body.appendChild(nuevoDiv);


var trace1 = {
    x: ["Adan y Eva", "Tal Vez", "Nena Maldición", "Cuando Te Besé", "Te Amo", "Chica Paranormal", "Por Eso Vine", "Plan A"],
    y: [951749705, 783042405, 645784654	, 608552565, 498785803, 376295353, 311221308, 290947051],
    type: 'bar'
};

var data = [trace1];

var layout = {
    title: 'Reproducciones de las canciones más populares de Paulo Londra en Spotify',
    xaxis: { title: 'Canciones' },
    yaxis: { title: 'Reproducciones' }
};

Plotly.newPlot('barchart 1', data, layout);