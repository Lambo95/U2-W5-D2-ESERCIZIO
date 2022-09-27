let portafoglio = prompt("Quanti soldi hai per le spese online?");
let arrayAcquisti = [];

function addAcquisti() {
  arrayAcquisti;
  let merce = prompt("Cosa vuoi acquistare?");
  if (merce === null) {
    alert("Devi aggiungere un elemento!");
  } else {
    arrayAcquisti.push(merce);
    console.log(arrayAcquisti);
    document.getElementById("msg-acquisto").innerHTML = `Hai acquistato ${merce} per 10€`;
  }
}

function carrello() {
  for (let index = 0; index < arrayAcquisti.length; index++) {
    arrayAcquisti[index];
    let a = document.getElementById("carrello-spesa");
    // if (a.innerHTML === "") {
    //   a.innerHTML = element;
    // } else {
    //   a.innerHTML = element + element;
    // }
    a.innerHTML = arrayAcquisti[index];
  }
}

function saldoPortafoglio() {
  if (parseInt(portafoglio) > 10) {
    let saldo = parseInt(portafoglio) - 10;
    document.getElementById("saldo").innerHTML = `Il tuo saldo è di: ${saldo}`;
  } else {
    document.getElementById("hai-finito-i-soldi").innerHTML = `Hai finito i soldi`;
  }
}
