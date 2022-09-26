let tempo = new Date();
document.getElementById("mostra").innerHTML = tempo;
document.getElementById("ore").innerHTML = tempo.getHours();
document.getElementById("minuti").innerHTML = tempo.getMinutes();
document.getElementById("secondi").innerHTML = tempo.getSeconds();

let tempoIta = new Date();
document.getElementById("data-italiana").innerHTML = tempoIta.toLocaleString("it-IT");

let data = new Date();

let dataIta = data.toLocaleDateString("it-IT");
document.getElementById("solo-data").innerHTML = dataIta;

// `${data.getDay()}:${data.getMonth()}:${data.getFullYear()}`;
