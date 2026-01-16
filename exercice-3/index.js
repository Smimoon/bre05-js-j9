// vos imports ici
import {numbers} from "./numbers.js";
import {computeAverage} from "./function.js";
window.addEventListener("DOMContentLoaded", () => {
   // votre code ici
   let average = computeAverage(numbers)
   
   console.log(average);
});