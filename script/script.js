let tempo = new Date();
document.getElementById("mostra").innerHTML = tempo;
document.getElementById("ore").innerHTML = tempo.getHours();
document.getElementById("minuti").innerHTML = tempo.getMinutes();
document.getElementById("secondi").innerHTML = tempo.getSeconds();
