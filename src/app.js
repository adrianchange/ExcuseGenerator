/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("");
};

let generateExcuse = () => {
  let pronun = ["The", "A"];
  let subject = ["dog", "racoon", "squirl", "mouse"];
  let verb = ["stole my", "destroy my", "threw my"];
  let atribute = ["homework", "dinner", "hat"];
  let complement = ["in the highway.", "in the parc."];

  let pronIndex = Math.floor(Math.random() * pronun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let atribIndex = Math.floor(Math.random() * atribute.length);
  let compleIndex = Math.floor(Math.random() * complement.length);

  return (
    pronun[pronIndex] +
    " " +
    subject[subIndex] +
    " " +
    verb[verbIndex] +
    " " +
    atribute[atribIndex] +
    " " +
    complement[compleIndex]
  );
};
