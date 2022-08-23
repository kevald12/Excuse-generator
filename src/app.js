/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "El perro",
  "El gato",
  "Mi prima",
  "un oficial",
  "mi novia",
  "un pintor"
];
let action = [
  "comio",
  "daño",
  "se llevo",
  "rompio",
  "robo",
  "ensucio",
  "perdio"
];

let what = ["Mi carro", "Mi moto", "Mis llaves", "Mi tarea"];

let when = ["ayer", "hoy", "el finde"]


window.onload = function() {

 generadorDeExcusas(who,what,when,action){
  awho = Math.floor(Math.random() * who.length);
}
};
