const score_container = document.getElementById("score_container");
const score_board = document.getElementById("score");
const powerup1 = document.getElementById("powerup1");
const powerup2 = document.getElementById("powerup2");
const powerup3 = document.getElementById("powerup3");
const powerup4 = document.getElementById("powerup4");
const powerup5 = document.getElementById("powerup5");
const powerup6 = document.getElementById("powerup6");
const powerup7 = document.getElementById("powerup7");
const audio = new Audio("Media/scream.mp3"); // Assicurati di avere un file audio.mp3 nella stessa cartella
const gnomo = document.getElementById("gnomo");
// Variabili per salvare gli ID dei loop
let intervalIdPowerup3 = null;
let intervalIdPowerup4 = null;
let score = 100000;
let increment = 1;
score_board.innerText = score;

score_container.addEventListener("click", function () {
  score += increment; // Incrementa il punteggio
  score_board.innerText = score;
});

powerup1.addEventListener("click", function () {
  if (score >= 10) {
    // Controlla se ci sono abbastanza punti
    score -= 10; // Scala 10 punti
    score_board.innerText = score; // Aggiorna il punteggio
    score_container.style.backgroundColor = "green"; // Cambia il colore di sfondo
    increment = 2; // Raddoppia il punteggio
    powerup1.style.display = "none";
    powerup4.style.display = "block"; // Mostra il powerup 4
  } else {
    alert("Non hai abbastanza punti per usare questo powerup!");
  }
});

powerup2.addEventListener("click", function () {
  if (score >= 50) {
    // Controlla se ci sono abbastanza punti
    score -= 50; // Scala 25 punti
    score_board.innerText = score; // Aggiorna il punteggio
    score_container.style.backgroundColor = "blue"; // Cambia il colore di sfondo
    increment = 5; // Triplica il punteggio
    powerup2.style.display = "none";
    powerup5.style.display = "block"; // Mostra il powerup 5
  } else {
    alert("Non hai abbastanza punti per usare questo powerup!");
  }
});

powerup3.addEventListener("click", function () {
  if (score >= 100) {
    // Controlla se ci sono abbastanza punti
    score -= 100; // Scala 50 punti
    score_board.innerText = score; // Aggiorna il punteggio
    score_container.style.backgroundColor = "yellow"; // Cambia il colore di sfondo
    powerup3.style.display = "none";
    powerup6.style.display = "block"; // Mostra il powerup 6

    // Aggiunge 5 punti allo score ogni secondo
    intervalIdPowerup3 = setInterval(function () {
      score += 5; // Incrementa lo score di 5
      score_board.innerText = score; // Aggiorna il punteggio visivamente
    }, 1000); // Esegui ogni 1000 ms (1 secondo)
  } else {
    alert("Non hai abbastanza punti per usare questo powerup!");
  }
});

powerup4.addEventListener("click", function () {
  if (score >= 300) {
    // Controlla se ci sono abbastanza punti
    score -= 300; // Scala 10 punti
    score_board.innerText = score; // Aggiorna il punteggio
    score_container.style.backgroundColor = "green"; // Cambia il colore di sfondo
    powerup4.style.display = "none";
    powerup7.style.display = "block"; // Mostra il powerup 7
    intervalIdPowerup4 = setInterval(function () {
      score += 5; // Incrementa lo score di 5
      score_board.innerText = score; // Aggiorna il punteggio visivamente
    }, 1000); // Esegui ogni 1000 ms (1 secondo)
    powerup1.style.display = "none";
  } else {
    alert("Non hai abbastanza punti per usare questo powerup!");
  }
});

powerup5.addEventListener("click", function () {
  if (score >= 500) {
    // Controlla se ci sono abbastanza punti
    score -= 500; // Scala 25 punti
    score_board.innerText = score; // Aggiorna il punteggio
    score_container.style.backgroundColor = "blue"; // Cambia il colore di sfondo
    increment = 10; // Triplica il punteggio
    powerup5.style.display = "none";
  } else {
    alert("Non hai abbastanza punti per usare questo powerup!");
  }
});

powerup6.addEventListener("click", function () {
  if (score >= 1000) {
    // Controlla se ci sono abbastanza punti
    score -= 1000; // Scala 50 punti
    score_board.innerText = score; // Aggiorna il punteggio
    increment = 50; // Triplica il punteggio
    score_container.style.backgroundColor = "yellow"; // Cambia il colore di sfondo
    powerup6.style.display = "none";
  } else {
    alert("Non hai abbastanza punti per usare questo powerup!");
  }
});

powerup7.addEventListener("click", function () {
  if (score >= 10000) {
    // Controlla se ci sono abbastanza punti
    score -= 10000; // Scala i punti
    score_board.innerText = score; // Aggiorna il punteggio
    gnomo.style.position = "absolute"; // Mostra il gnomo
    gnomo.style.top = "0"; // Posiziona il gnomo in alto
    gnomo.style.left = "0"; // Posiziona il gnomo a sinistra
    gnomo.style.height = "100vh"; // Cambia l'altezza del gnomo
    gnomo.style.width = "100vw"; // Cambia la larghezza del gnomo
    audio.volume = 1.0; // Imposta il volume dell'audio
    // Ferma i loop creati dai power-up precedenti
    if (intervalIdPowerup3 !== null) {
      clearInterval(intervalIdPowerup3);
    }
    if (intervalIdPowerup4 !== null) {
      clearInterval(intervalIdPowerup4);
    }
    score_board.innerText = "HAI VINTO"; // Cambia il punteggio a "HAI VINTO"
    // Riproduci l'audio
    audio.play();
  } else {
    alert("Non hai abbastanza punti per usare questo powerup!");
  }
});
