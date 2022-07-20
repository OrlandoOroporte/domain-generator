/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

// //window.onload = function() {
//   document.querySelector("#boton").addEventListener("click", () => {
//     document.querySelector("#domain").innerHTML = domaingenator();
//   });
// };

let domaingenator = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domin = [".com", ".es"];

  for (let pro of pronoun) {
    for (let ad of adj) {
      for (let no of noun) {
        for (let dom of domin) {
          console.log(`${pro}${ad}${no}${dom}`);
        }
      }
    }
  }
};
domaingenator();
