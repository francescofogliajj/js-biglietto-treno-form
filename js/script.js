var genera = document.getElementById("genera");
genera.addEventListener( 'click',
  function() {

    // Campi di input per chiedere all'utente nome-cognome, età e numero di km da percorrere
    var inputUtente = document.getElementById("utente");
    var utente = inputUtente.value;
    console.log(utente);

    var inputChilometri = document.getElementById("chilometri");
    var chilometri = parseInt(inputChilometri.value);
    console.log(chilometri);

    var inputEta = document.getElementById("eta");
    var eta = inputEta.value;
    console.log(eta);


    // Prezzo al chiometro
    var prezzo = 0.21;
    console.log(prezzo);

    // Sconto del 20% per i minorenni
    var scontoMinorenni = 80 / 100;
    console.log(scontoMinorenni);

    // Sconto del 40% per gli over 65
    var scontoOver = 60 / 100;
    console.log(scontoOver);


    if (eta == "minorenne") {
      var costoBiglietto = (chilometri * prezzo) * scontoMinorenni;
      var offerta = "Sconto Minorenne";
    } else if (eta == "over65") {
      var costoBiglietto = (chilometri * prezzo) * scontoOver;
      var offerta = "Sconto Over 65";
    } else {
      var costoBiglietto = (chilometri * prezzo);
      var offerta = "Nessuno Sconto"
    }


    var carrozza = Math.floor(Math.random() * 9) +1;
    console.log(carrozza)

    var codiceCP = Math.floor(Math.random() * 10000) + 90000;
    console.log(codiceCP);


    document.getElementById("passeggero").innerHTML = utente;
    document.getElementById("offerta").innerHTML = offerta;
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("codice-cp").innerHTML = codiceCP;
    document.getElementById("costo-biglietto").innerHTML = costoBiglietto;


    var cardBiglietto = document.getElementById("card-2");
    cardBiglietto.classList.remove("hidden");
    cardBiglietto.classList.add("show");

  }

);


var annulla = document.getElementById("annulla");
annulla.addEventListener( 'click',
  function() {

    document.getElementById("utente").value = "";
    document.getElementById("chilometri").value = "";
    document.getElementById("eta").value = "";

    document.getElementById("passeggero").innerHTML = "";
    document.getElementById("offerta").innerHTML = "";
    document.getElementById("carrozza").innerHTML = "";
    document.getElementById("codice-cp").innerHTML = "";
    document.getElementById("costo-biglietto").innerHTML = "";

    var cardBiglietto = document.getElementById("card-2");
    cardBiglietto.classList.remove("show");
    cardBiglietto.classList.add("hidden");

  }

);
