/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//function onload() {
//let excusa = document.getElementById("excusas");
//excusa.innerHTML = generadorDeExcusas(who, what, what, when, action);
//}
window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusas").innerHTML = generadorDeExcusas();
  });
};

let generadorDeExcusas = () => {
  let who = [
    "el perro",
    "el gato",
    "mi prima",
    "un oficial",
    "mi novia",
    "un pintor"
  ];
  let action = [
    "se comio",
    "me daño",
    "se llevo",
    "me rompio",
    "me robo",
    "me ensucio",
    "me perdio"
  ];

  let what = ["mi carro", "mi moto", "mis llaves", "mi tarea"];

  let when = ["Ayer", "Hoy", "El finde"];
  let pWho = Math.floor(Math.random() * who.length);
  let pWhen = Math.floor(Math.random() * when.length);
  let pWhat = Math.floor(Math.random() * what.length);
  let pAction = Math.floor(Math.random() * action.length);

  return (
    when[pWhen] + " " + who[pWho] + " " + action[pAction] + " " + what[pWhat]
  );
};
//window.onload = () => {
//document.querySelector("#btn").addEventListener("click", () => {
//document.querySelector("#excusas").innerHTML = generadorDeExcusas();
//});
//};

window.onload = onload;
