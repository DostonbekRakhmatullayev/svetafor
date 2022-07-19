// Document dan query selector qilib chaqirilgan classlar
let elQizil = document.querySelector(".js-svetofor__item--qizil");
let elSariq = document.querySelector(".js-svetofor__item--sariq");
let elYashil = document.querySelector(".js-svetofor__item--yashil");

//  Qizildi vaqti
let countRed = 10;

// Qizildi functionsi
function colorRed() {
  // Rangi bilan vaqti chiqishi
  let redInterval = setInterval(() => {
    elQizil.textContent = countRed;
    countRed--;
    elQizil.style.backgroundColor = "red";
  }, 1000)
  
  // Rangi bilan vaqtdi tuxtashi
  setTimeout(() => {
    clearInterval(redInterval);
    elQizil.style.backgroundColor = "white";
    elQizil.innerHTML = "";
  }, (countRed - 2) * 1000);
}

// functiondi chaqirib quydik 
colorRed();

// Qayta set interval bulish jarayoni
setInterval(() => {
  console.log("qizil 23");
  countRed = 10;
  colorRed();
}, 20000)

// Sariqdi vaqti
let coundYellow = 3;

// Sariqdi funtioni 
function colorYelow() {
  // Randi va vaqti ishlashi 
  let yellowInterval = setInterval(() => {
    elSariq.textContent = coundYellow;
    coundYellow--;
    elSariq.style.backgroundColor = "yellow";
  }, 1000)

  //  Randi va vaqti tuxtashi
  setTimeout(() => {
    clearInterval(yellowInterval);
    elSariq.style.backgroundColor = "white";
    elSariq.innerHTML = "";
  }, (coundYellow + 1) * 1000);
}

// Qizildi  boshlanish vaqti
setTimeout(()=> {
  colorYelow();
}, 7000)

//  Qayta set interval bulish jarayoni
setInterval(() => {
  coundYellow = 3;
  colorYelow();
}, 27000)

// Yashildi vaqti
let coundGreen = 10;

// Yashil funtioni 
function colorGreen() {
  // Randi va vaqti ishlashi 
  let greenInterval = setInterval(() => {
    elYashil.textContent = coundGreen;
    coundGreen--;
    elYashil.style.backgroundColor = "green";
  }, 1000)

  //  Randi va vaqti tuxtashi
  setTimeout(() => {
    clearInterval(greenInterval);
    elYashil.style.backgroundColor = "white";
    elYashil.innerHTML = "";
  }, (coundGreen + 1) * 1000);
}

// Qizildi  boshlanish vaqti
setTimeout(()=> {
  colorGreen();
}, 10000)

//  Qayta set interval bulish jarayoni
setInterval(() => {
  coundGreen = 10;
  colorGreen();
}, 30000)

