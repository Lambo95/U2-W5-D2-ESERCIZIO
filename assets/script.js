let portafoglio = parseInt(prompt("Quanti soldi hai per le spese online?"));
while (portafoglio === null || isNaN(portafoglio)) {
  portafoglio = parseInt(prompt("Devi inserire un numero!"));
}
let arrayAcquisti = [];

function addAcquisti() {
  let merce = prompt("Cosa vuoi acquistare?");
  if (merce === null) {
    alert("Devi aggiungere un elemento!");
  } else if (portafoglio > 10) {
    arrayAcquisti.push(merce);
    portafoglio -= 10;
    document.getElementById("msg-acquisto").innerHTML = `Hai acquistato ${merce} per 10€`;
    document.getElementById("saldo").innerHTML = `Il tuo saldo è di: ${portafoglio}`;
  } else {
    let url = "./assets/broke-poor.gif";
    let image = new Image();
    image.src = url;
    document.getElementById("saldo").innerHTML = `Hai finito i soldi!!`;
    document.getElementById("hai-finito-i-soldi").appendChild(image);
  }
}

function carrello() {
  for (let index = 0; index < arrayAcquisti.length; index++) {
    let element = arrayAcquisti[index];
    let a = document.getElementById("carrello-spesa");
    a.innerHTML += `<li> ${element} </li>`;
    // if (a.innerHTML === "") {
    //   a.innerHTML = element;
    // } else {
    //   a.innerHTML = element + element;
    // }
    // a.innerHTML = arrayAcquisti[index];
  }
}

// function saldoPortafoglio(portafoglio) {
//   if (parseInt(portafoglio) > 10) {
//     document.getElementById("saldo").innerHTML = `Il tuo saldo è di: ${saldo}`;
//   } else {
//     document.getElementById("hai-finito-i-soldi").innerHTML = `Hai finito i soldi`;
//   }
// }
