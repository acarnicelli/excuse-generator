/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

let who = [
  "El Power Ranger rojo ",
  "Un imitador de Michael Jackson ",
  "Un ornitorrinco mutante ",
  "Mi clon "
];

let action = ["quemó ", "empeñó ", "desintegró ", "trituró "];

let what = [
  "a mi gato ",
  "mi última empanada ",
  "mis panchos ",
  "mi colección de Pokemón "
];

let when = [
  "antes de ayer.",
  "el día de la marmota.",
  "cuando estaba mirando Naruto.",
  "el día de entrega del proyecto final de 4Geeks."
];

function enteroRandom(min, max) {
  let num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function randomString(array) {
  let len = array.length;
  return array[enteroRandom(0, len)];
}

let contenido =
  randomString(who) +
  randomString(action) +
  randomString(what) +
  randomString(when);

excuse.innerHTML = contenido;
