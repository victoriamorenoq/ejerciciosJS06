// DOM API
// OBTENER EL POR ID 
//
const div1 = document.getElementById("div-1");
console.log(div1);

const divCollection = document.getElementsByTagName("div");
console.log(divCollection);

const p = document.getElementById("p1");

const userNameInputs = document.getElementsByName("userName");
const userNameInput =userNameInputs[0];

console.log(p, userNameInput);




// EVENTS
// Cualquier evento que coincida con lo que voy a decir haga la siguiente funcionalidad
//tiene dos tipos de parámetros, primero el evento que va a utilizar y luego lo que va a suceder

userNameInput.addEventListener("input", (event) => {
    console.log(event.target.value);
    console.log(p, userNameInput);
p.innerText = event.target.value;
});