//Pantalla de inicializacion
window.onload = function() {
  //write your code here
  document.querySelector("#excusa").innerHTML = generadorExcusas();
};
//Funcion para generar las excusas
const generadorExcusas = () => {
  //declaracion de variables
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const whoIndex = Math.floor(Math.random() * who.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const WhatIndex = Math.floor(Math.random() * what.length);
  const WhenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[WhatIndex] +
    " " +
    when[WhenIndex]
  );
};
console.log("Excuse Generator");
console.log(generadorExcusas());
