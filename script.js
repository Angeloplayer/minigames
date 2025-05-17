const score_container = document.getElementById("score_container");
const score_board = document.getElementById("score");
const powerup1 = document.getElementById("powerup1");
const powerup2 = document.getElementById("powerup2");
const powerup3 = document.getElementById("powerup3");
let score = 0;
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
    // Aggiunge 5 punti allo score ogni secondo
    setInterval(function () {
      score += 5; // Incrementa lo score di 5
      score_board.innerText = score; // Aggiorna il punteggio visivamente
    }, 1000); // Esegui ogni 1000 ms (1 secondo)
  } else {
    alert("Non hai abbastanza punti per usare questo powerup!");
  }
});
